import type { AppRole } from "@/shared/types/roles";
import {
  MOCK_LEAVE_POLICIES,
  MOCK_LEAVE_REQUESTS,
  MOCK_LEAVE_BALANCES,
} from "@/shared/lib/mock-data";

export interface LeaveBalance {
  id: string;
  policy_id: string;
  policy_name: string;
  policy_code: string;
  allocated_days: number;
  used_days: number;
  remaining_days: number;
  year: number;
}

export interface LeaveRequestRow {
  id: string;
  employee_id: string;
  employee_name: string;
  policy_id: string;
  policy_name: string;
  start_date: string;
  end_date: string;
  days_requested: number;
  reason: string;
  status: string;
  reviewed_by: string | null;
  reviewed_at: string | null;
  review_notes: string | null;
  created_at: string;
}

export interface LeavePolicyRow {
  id: string;
  name: string;
  code: string;
  description: string | null;
  days_per_year: number;
  is_paid: boolean;
  requires_approval: boolean;
  min_notice_days: number;
  max_consecutive_days: number | null;
  carry_forward: boolean;
  carry_forward_limit: number | null;
  is_active: boolean;
}

export async function getLeaveBalances(
  employeeId: string,
  year?: number,
): Promise<LeaveBalance[]> {
  return MOCK_LEAVE_BALANCES;
}

export async function getLeaveRequests(
  userId: string,
  role: AppRole,
  options?: { employeeId?: string; status?: string; limit?: number },
): Promise<LeaveRequestRow[]> {
  let records = [...MOCK_LEAVE_REQUESTS];

  if (options?.employeeId) {
    records = records.filter((r) => r.employee_id === options.employeeId);
  } else if (role === "EMPLOYEE" || role === "INTERN") {
    records = records.filter((r) => r.employee_id === userId);
  }

  if (options?.status) {
    records = records.filter((r) => r.status === options.status);
  }

  if (options?.limit) {
    records = records.slice(0, options.limit);
  }

  return records.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}

export async function getPendingLeaveApprovals(
  userId: string,
  role: AppRole,
): Promise<LeaveRequestRow[]> {
  if (role === "EMPLOYEE" || role === "INTERN") return [];
  return getLeaveRequests(userId, role, { status: "PENDING" });
}

export async function getLeavePolicies(
  activeOnly = true,
): Promise<LeavePolicyRow[]> {
  const policies = MOCK_LEAVE_POLICIES;
  return activeOnly ? policies.filter((p) => p.is_active) : policies;
}

export async function getLeavePolicy(id: string): Promise<LeavePolicyRow | null> {
  return MOCK_LEAVE_POLICIES.find((p) => p.id === id) ?? null;
}

export async function getLeaveCalendarEvents(
  userId: string,
  role: AppRole,
): Promise<LeaveRequestRow[]> {
  let records = MOCK_LEAVE_REQUESTS.filter((r) =>
    ["APPROVED", "PENDING"].includes(r.status),
  );

  if (role === "EMPLOYEE" || role === "INTERN") {
    records = records.filter((r) => r.employee_id === userId);
  }

  return records.sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
  );
}

export async function getLeaveAnalytics(userId: string, role: AppRole) {
  const requests = await getLeaveRequests(userId, role);
  const byStatus = requests.reduce<Record<string, number>>((acc, req) => {
    acc[req.status] = (acc[req.status] ?? 0) + 1;
    return acc;
  }, {});

  const byPolicy = requests.reduce<Record<string, number>>((acc, req) => {
    acc[req.policy_name] = (acc[req.policy_name] ?? 0) + req.days_requested;
    return acc;
  }, {});

  const totalDays = requests
    .filter((r) => r.status === "APPROVED")
    .reduce((sum, r) => sum + r.days_requested, 0);

  return {
    totalRequests: requests.length,
    pendingCount: byStatus.PENDING ?? 0,
    approvedCount: byStatus.APPROVED ?? 0,
    rejectedCount: byStatus.REJECTED ?? 0,
    totalApprovedDays: totalDays,
    byPolicy: Object.entries(byPolicy).map(([name, days]) => ({ name, days })),
  };
}

export async function getActiveLeavePoliciesForEmployee(employeeId: string) {
  return MOCK_LEAVE_BALANCES.map((b) => ({
    policy_id: b.policy_id,
    policy_name: b.policy_name,
    remaining_days: b.remaining_days,
  }));
}

export async function updateLeavePolicy(
  policyId: string,
  values: Partial<LeavePolicyRow>,
) {
  const policy = MOCK_LEAVE_POLICIES.find((p) => p.id === policyId);
  if (!policy) return;

  Object.assign(policy, values, { updated_at: new Date().toISOString() });
}

export async function reviewLeaveRequest(
  requestId: string,
  reviewerId: string,
  status: "APPROVED" | "REJECTED",
  reviewNotes: string | null,
) {
  const request = MOCK_LEAVE_REQUESTS.find((r) => r.id === requestId);
  if (!request) return;

  request.status = status;
  request.reviewed_by = reviewerId;
  request.reviewed_at = new Date().toISOString();
  request.review_notes = reviewNotes;
}
