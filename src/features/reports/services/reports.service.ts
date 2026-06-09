import {
  MOCK_PROFILES,
  MOCK_DEPARTMENTS,
  MOCK_LEAVE_REQUESTS,
  MOCK_EMPLOYEE_KPIS,
  MOCK_PAYROLL_RECORDS,
  MOCK_EOD_RECORDS,
  MOCK_EMPLOYEES,
} from "@/shared/lib/mock-data";

export interface DepartmentRow {
  id: string;
  name: string;
  code: string;
  description: string | null;
  head_name: string | null;
  employee_count: number;
  is_active: boolean;
}

export async function getDepartmentsWithStats(): Promise<DepartmentRow[]> {
  return MOCK_DEPARTMENTS.map((d) => ({
    id: d.id,
    name: d.name,
    code: d.code,
    description: d.description,
    head_name: d.head?.full_name ?? null,
    employee_count: d.employee_count,
    is_active: d.is_active,
  }));
}

export async function getOrganizationReportData() {
  const now = new Date();
  const totalGross = MOCK_PAYROLL_RECORDS.reduce(
    (s, r) => s + r.gross_pay,
    0,
  );
  const totalNet = MOCK_PAYROLL_RECORDS.reduce((s, r) => s + r.net_pay, 0);

  return {
    employeeCount: MOCK_PROFILES.filter((p) => p.is_active).length,
    departmentCount: MOCK_DEPARTMENTS.filter((d) => d.is_active).length,
    pendingLeaves: MOCK_LEAVE_REQUESTS.filter((l) => l.status === "PENDING").length,
    activeKpis: MOCK_EMPLOYEE_KPIS.filter((k) =>
      ["IN_PROGRESS", "ON_TRACK", "AT_RISK"].includes(k.status),
    ).length,
    payrollRecords: MOCK_PAYROLL_RECORDS.length,
    totalGrossPay: totalGross,
    totalNetPay: totalNet,
    generatedAt: now.toISOString(),
    period: `${now.toLocaleString("en-IN", { month: "long" })} ${now.getFullYear()}`,
  };
}

export async function getDepartmentReportData(departmentId: string) {
  const dept = MOCK_DEPARTMENTS.find((d) => d.id === departmentId);
  if (!dept) throw new Error("Department not found");

  const employees = MOCK_EMPLOYEES.filter(
    (e) => e.department_id === departmentId,
  );
  const profileIds = employees.map((e) => e.profile_id);

  const leaveCount = MOCK_LEAVE_REQUESTS.filter((l) =>
    profileIds.includes(l.employee_id),
  ).length;
  const kpiCount = MOCK_EMPLOYEE_KPIS.filter((k) =>
    profileIds.includes(k.employee_id),
  ).length;
  const eodCount = MOCK_EOD_RECORDS.filter((e) =>
    profileIds.includes(e.employee_id),
  ).length;

  return {
    department: {
      id: dept.id,
      name: dept.name,
      code: dept.code,
      description: dept.description,
      head_name: dept.head?.full_name ?? null,
    },
    employeeCount: employees.length,
    employees: employees.map((e) => ({
      name: e.profile.full_name,
      email: e.profile.email,
      job_title: e.job_title,
      status: e.employment_status,
    })),
    leaveRequests: leaveCount,
    activeKpis: kpiCount,
    eodSubmissions: eodCount,
    generatedAt: new Date().toISOString(),
  };
}
