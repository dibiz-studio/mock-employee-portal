import type { AppRole } from "@/shared/types/roles";
import {
  MOCK_ALL_EOD_RECORDS,
  MOCK_EOD_ROSTER,
  getRecentWorkingDays,
} from "@/shared/lib/mock-data";

export interface DailyUpdateRow {
  id: string;
  employee_id: string;
  employee_name: string;
  report_date: string;
  tasks_completed: string[];
  hours_worked: number;
  blockers: string | null;
  tomorrow_plan: string | null;
  manager_comment: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
}

export interface EodBoardEmployeeDay {
  date: string;
  submission: DailyUpdateRow | null;
}

export interface EodBoardEmployee {
  employee_id: string;
  employee_name: string;
  job_title: string;
  department: string;
  days: EodBoardEmployeeDay[];
}

export interface EodBoard {
  dates: string[];
  employees: EodBoardEmployee[];
  submittedToday: number;
  pendingToday: number;
  total: number;
}

export async function getEodDashboard(userId: string, role: AppRole) {
  const today = new Date().toISOString().split("T")[0];
  const todayUpdate = MOCK_ALL_EOD_RECORDS.find(
    (r) => r.employee_id === userId && r.report_date === today,
  );
  const recent = await getEodHistory(userId, role, { limit: 5 });

  let teamPendingReview = 0;
  if (role === "MANAGER" || role === "HR" || role === "SUPER_ADMIN") {
    const teamUpdates = await getTeamEodForReview(userId, role);
    teamPendingReview = teamUpdates.filter((u) => !u.reviewed_at).length;
  }

  return {
    submittedToday: !!todayUpdate,
    recentUpdates: recent,
    teamPendingReview,
    streak: recent.length,
  };
}

// Manager/HR/Admin board: every employee, with their submission for each of the
// most recent working days (defaults to today + yesterday), ordered by name.
export async function getEodTeamBoard(days = 2): Promise<EodBoard> {
  const dates = getRecentWorkingDays(days); // most-recent first
  const today = dates[0];

  const employees: EodBoardEmployee[] = MOCK_EOD_ROSTER.map((member) => ({
    employee_id: member.employee_id,
    employee_name: member.employee_name,
    job_title: member.job_title,
    department: member.department,
    days: dates.map((date) => ({
      date,
      submission:
        MOCK_ALL_EOD_RECORDS.find(
          (r) => r.employee_id === member.employee_id && r.report_date === date,
        ) ?? null,
    })),
  })).sort((a, b) => a.employee_name.localeCompare(b.employee_name));

  const submittedToday = employees.filter(
    (e) => e.days.find((d) => d.date === today)?.submission,
  ).length;

  return {
    dates,
    employees,
    submittedToday,
    pendingToday: employees.length - submittedToday,
    total: employees.length,
  };
}

export async function getEodHistory(
  userId: string,
  role: AppRole,
  options?: { employeeId?: string; limit?: number },
): Promise<DailyUpdateRow[]> {
  let records = [...MOCK_ALL_EOD_RECORDS];

  if (options?.employeeId) {
    records = records.filter((r) => r.employee_id === options.employeeId);
  } else if (role === "EMPLOYEE" || role === "INTERN") {
    records = records.filter((r) => r.employee_id === userId);
  }

  records.sort(
    (a, b) =>
      new Date(b.report_date).getTime() - new Date(a.report_date).getTime(),
  );

  if (options?.limit) {
    records = records.slice(0, options.limit);
  }

  return records;
}

export async function getTeamEodForReview(
  userId: string,
  role: AppRole,
  options?: { date?: string },
): Promise<DailyUpdateRow[]> {
  let records = [...MOCK_ALL_EOD_RECORDS];

  if (options?.date) {
    records = records.filter((r) => r.report_date === options.date);
  }

  records.sort(
    (a, b) =>
      new Date(b.report_date).getTime() - new Date(a.report_date).getTime(),
  );

  return records.slice(0, 60);
}

export async function getEodByDate(employeeId: string, date: string) {
  return (
    MOCK_ALL_EOD_RECORDS.find(
      (r) => r.employee_id === employeeId && r.report_date === date,
    ) ?? null
  );
}
