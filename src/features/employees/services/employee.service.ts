import type { AppRole } from "@/shared/types/roles";
import {
  MOCK_EMPLOYEES,
  MOCK_DEPARTMENTS,
  MOCK_LEAVE_REQUESTS,
  MOCK_SUPER_ADMIN,
  MOCK_PROFILES,
} from "@/shared/lib/mock-data";

import type {
  DepartmentWithStats,
  EmployeeProfile,
  LeaveRequestSummary,
} from "../types";

export async function canAccessEmployee(
  viewerId: string,
  viewerRole: AppRole,
  targetProfileId: string,
): Promise<boolean> {
  if (viewerRole === "SUPER_ADMIN" || viewerRole === "HR") return true;
  if (viewerId === targetProfileId) return true;
  return false;
}

export async function requireEmployeeAccess(_targetProfileId: string) {
  return MOCK_SUPER_ADMIN;
}

export async function getEmployees(
  _role: AppRole,
  _userId: string,
): Promise<EmployeeProfile[]> {
  return MOCK_EMPLOYEES as unknown as EmployeeProfile[];
}

export async function getEmployeeByProfileId(
  profileId: string,
): Promise<EmployeeProfile | null> {
  const emp = MOCK_EMPLOYEES.find((e) => e.profile_id === profileId);
  return (emp as unknown as EmployeeProfile) ?? null;
}

export async function getEmployeeStats(_role: AppRole, _userId: string) {
  const employees = MOCK_EMPLOYEES;
  const active = employees.filter(
    (e) => e.employment_status === "ACTIVE" && e.profile.is_active,
  ).length;
  const onLeave = employees.filter(
    (e) => e.employment_status === "ON_LEAVE",
  ).length;
  const departments = new Set(
    employees.map((e) => e.department_id).filter(Boolean),
  ).size;

  return {
    total: employees.length,
    active,
    onLeave,
    departments,
  };
}

export async function getDepartmentsWithStats(): Promise<DepartmentWithStats[]> {
  return MOCK_DEPARTMENTS.map((d) => ({
    id: d.id,
    name: d.name,
    code: d.code,
    description: d.description,
    is_active: d.is_active,
    head: d.head,
    employee_count: d.employee_count,
  })) as DepartmentWithStats[];
}

export async function getEmployeeLeaveRequests(
  profileId: string,
): Promise<LeaveRequestSummary[]> {
  return MOCK_LEAVE_REQUESTS.filter((l) => l.employee_id === profileId).map(
    (l) => ({
      id: l.id,
      start_date: l.start_date,
      end_date: l.end_date,
      days_requested: l.days_requested,
      reason: l.reason,
      status: l.status,
      policy: { name: l.policy_name, code: "CL" },
    }),
  ) as LeaveRequestSummary[];
}

export async function getDepartmentsList() {
  return MOCK_DEPARTMENTS.filter((d) => d.is_active).map((d) => ({
    id: d.id,
    name: d.name,
    code: d.code,
  }));
}

export interface EmployeeSearchResult {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  role: AppRole;
  job_title?: string;
  department_name?: string;
}

export async function searchEmployees(
  query: string,
  limit = 5,
): Promise<EmployeeSearchResult[]> {
  const trimmed = query.trim().toLowerCase();
  if (trimmed.length < 2) return [];

  const employeeByProfileId = new Map(
    MOCK_EMPLOYEES.map((employee) => [employee.profile_id, employee]),
  );
  const departmentById = new Map(
    MOCK_DEPARTMENTS.map((department) => [department.id, department]),
  );

  return MOCK_PROFILES.filter(
    (profile) =>
      profile.full_name.toLowerCase().includes(trimmed) ||
      profile.email.toLowerCase().includes(trimmed),
  )
    .slice(0, limit)
    .map((profile) => {
      const employee = employeeByProfileId.get(profile.id);
      const department = employee?.department_id
        ? departmentById.get(employee.department_id)
        : null;

      return {
        id: profile.id,
        full_name: profile.full_name,
        email: profile.email,
        avatar_url: profile.avatar_url ?? null,
        role: profile.role,
        job_title: employee?.job_title,
        department_name: department?.name,
      };
    });
}
