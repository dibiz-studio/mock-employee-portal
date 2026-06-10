import type { AppRole } from "@/shared/types/roles";
import { MOCK_PAYROLL_RECORDS, MOCK_EMPLOYEES } from "@/shared/lib/mock-data";

export interface PayrollRecordRow {
  id: string;
  employee_id: string;
  employee_name: string;
  period_month: number;
  period_year: number;
  base_salary: number;
  allowances: Record<string, number>;
  deductions: Record<string, number>;
  leave_deduction: number;
  gross_pay: number;
  net_pay: number;
  status: string;
  notes: string | null;
  created_at: string;
}

export async function getPayrollRecords(
  userId: string,
  role: AppRole,
  options?: { employeeId?: string; month?: number; year?: number },
): Promise<PayrollRecordRow[]> {
  let records: PayrollRecordRow[] = MOCK_PAYROLL_RECORDS as PayrollRecordRow[];

  if (options?.employeeId) {
    records = records.filter((r) => r.employee_id === options.employeeId);
  } else if (role === "EMPLOYEE" || role === "INTERN") {
    records = records.filter((r) => r.employee_id === userId);
  }

  if (options?.month) {
    records = records.filter((r) => r.period_month === options.month);
  }
  if (options?.year) {
    records = records.filter((r) => r.period_year === options.year);
  }

  return records.sort((a, b) => {
    if (b.period_year !== a.period_year) return b.period_year - a.period_year;
    return b.period_month - a.period_month;
  });
}

export async function getPayrollSummary(userId: string, role: AppRole) {
  const now = new Date();
  let records = await getPayrollRecords(userId, role, {
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  });

  // Fall back to the most recent month that has data
  if (records.length === 0) {
    records = await getPayrollRecords(userId, role);
    if (records.length > 0) {
      const latest = records[0];
      records = records.filter(
        (r) =>
          r.period_month === latest.period_month &&
          r.period_year === latest.period_year,
      );
    }
  }

  const totalGross = records.reduce((sum, r) => sum + r.gross_pay, 0);
  const totalNet = records.reduce((sum, r) => sum + r.net_pay, 0);
  const processed = records.filter(
    (r) => r.status === "PROCESSED" || r.status === "PAID",
  ).length;
  const draft = records.filter((r) => r.status === "DRAFT").length;

  return {
    records,
    totalGross,
    totalNet,
    employeeCount: records.length,
    processedCount: processed,
    draftCount: draft,
  };
}

export async function getPayrollAnalytics(userId: string, role: AppRole) {
  const records = await getPayrollRecords(userId, role);
  const deptMap = new Map(
    MOCK_EMPLOYEES.map((e) => [e.profile_id, e.department?.name ?? "Unassigned"]),
  );
  const byDepartment: Record<
    string,
    { gross: number; net: number; count: number }
  > = {};

  for (const record of records) {
    const dept = deptMap.get(record.employee_id) ?? "Unassigned";
    if (!byDepartment[dept]) {
      byDepartment[dept] = { gross: 0, net: 0, count: 0 };
    }
    byDepartment[dept].gross += record.gross_pay;
    byDepartment[dept].net += record.net_pay;
    byDepartment[dept].count += 1;
  }

  const byStatus = records.reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] ?? 0) + 1;
    return acc;
  }, {});

  return {
    totalRecords: records.length,
    totalGross: records.reduce((s, r) => s + r.gross_pay, 0),
    totalNet: records.reduce((s, r) => s + r.net_pay, 0),
    byDepartment: Object.entries(byDepartment).map(([name, stats]) => ({
      name,
      ...stats,
    })),
    byStatus: Object.entries(byStatus).map(([status, count]) => ({
      status,
      count,
    })),
  };
}

export async function getEmployeePayroll(
  employeeId: string,
  viewerRole: AppRole,
  viewerId: string,
) {
  if (
    (viewerRole === "EMPLOYEE" || viewerRole === "INTERN") &&
    viewerId !== employeeId
  ) {
    return [];
  }
  return getPayrollRecords(viewerId, viewerRole, { employeeId });
}
