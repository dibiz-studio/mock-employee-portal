import type { AppRole } from "@/shared/types/roles";
import {
  MOCK_EMPLOYEE_KPIS,
  MOCK_KPI_TEMPLATES,
  MOCK_EMPLOYEES,
} from "@/shared/lib/mock-data";
import { calcProgress } from "../lib/utils";
import type {
  EmployeeKpi,
  KpiDashboardStats,
  KpiTemplate,
  KpiTrendPoint,
  LeaderboardEntry,
} from "../types";

export async function getEmployeeKpis(
  role: AppRole,
  userId: string,
  employeeId?: string,
): Promise<EmployeeKpi[]> {
  let kpis = [...MOCK_EMPLOYEE_KPIS];

  if (employeeId) {
    kpis = kpis.filter((k) => k.employee_id === employeeId);
  } else if (role === "EMPLOYEE" || role === "INTERN") {
    kpis = kpis.filter((k) => k.employee_id === userId);
  }

  return kpis as unknown as EmployeeKpi[];
}

export async function getKpiDashboardStats(
  role: AppRole,
  userId: string,
): Promise<KpiDashboardStats> {
  const kpis = await getEmployeeKpis(role, userId);
  const active = kpis.filter(
    (k) => !["COMPLETED", "CANCELLED"].includes(k.status),
  );

  const avgCompletion =
    active.length > 0
      ? Math.round(
          active.reduce((sum, k) => sum + calcProgress(k), 0) / active.length,
        )
      : 0;

  return {
    total: kpis.length,
    onTrack: kpis.filter((k) => k.status === "ON_TRACK").length,
    atRisk: kpis.filter((k) => k.status === "AT_RISK").length,
    completed: kpis.filter((k) => k.status === "COMPLETED").length,
    inProgress: kpis.filter((k) =>
      ["IN_PROGRESS", "NOT_STARTED"].includes(k.status),
    ).length,
    avgCompletion,
  };
}

export async function getKpiTemplates(): Promise<KpiTemplate[]> {
  return MOCK_KPI_TEMPLATES as unknown as KpiTemplate[];
}

export async function getKpiTrendData(
  role: AppRole,
  userId: string,
): Promise<KpiTrendPoint[]> {
  const kpis = await getEmployeeKpis(role, userId);
  const active = kpis.filter((k) => !["CANCELLED"].includes(k.status));

  const byStatus = new Map<string, { total: number; count: number }>();
  for (const kpi of active) {
    const label = kpi.status.replace(/_/g, " ");
    const entry = byStatus.get(label) ?? { total: 0, count: 0 };
    entry.total += calcProgress(kpi);
    entry.count += 1;
    byStatus.set(label, entry);
  }

  return Array.from(byStatus.entries()).map(([label, { total, count }]) => ({
    label,
    value: count > 0 ? Math.round(total / count) : 0,
    target: 100,
  }));
}

export async function getKpiCategoryBreakdown(
  role: AppRole,
  userId: string,
): Promise<{ category: string; count: number; avgProgress: number }[]> {
  const kpis = await getEmployeeKpis(role, userId);
  const map = new Map<string, { count: number; totalProgress: number }>();

  for (const kpi of kpis) {
    const category = kpi.template?.category ?? "Uncategorized";
    const entry = map.get(category) ?? { count: 0, totalProgress: 0 };
    entry.count += 1;
    entry.totalProgress += calcProgress(kpi);
    map.set(category, entry);
  }

  return Array.from(map.entries())
    .map(([category, { count, totalProgress }]) => ({
      category,
      count,
      avgProgress: count > 0 ? Math.round(totalProgress / count) : 0,
    }))
    .sort((a, b) => b.count - a.count);
}

export async function getKpiLeaderboard(
  role: AppRole,
  userId: string,
): Promise<LeaderboardEntry[]> {
  const kpis = MOCK_EMPLOYEE_KPIS.filter((k) => k.status !== "CANCELLED");
  const deptMap = new Map(
    MOCK_EMPLOYEES.map((e) => [e.profile_id, e.department?.name ?? "—"]),
  );

  const leaderboard = new Map<
    string,
    {
      fullName: string;
      avatarUrl: string | null;
      totalProgress: number;
      kpiCount: number;
      onTrackCount: number;
    }
  >();

  for (const kpi of kpis) {
    const entry = leaderboard.get(kpi.employee_id) ?? {
      fullName: kpi.employee.full_name,
      avatarUrl: kpi.employee.avatar_url,
      totalProgress: 0,
      kpiCount: 0,
      onTrackCount: 0,
    };
    entry.totalProgress += calcProgress(kpi as unknown as EmployeeKpi);
    entry.kpiCount += 1;
    if (kpi.status === "ON_TRACK" || kpi.status === "COMPLETED") {
      entry.onTrackCount += 1;
    }
    leaderboard.set(kpi.employee_id, entry);
  }

  return Array.from(leaderboard.entries())
    .map(([employeeId, entry]) => ({
      employeeId,
      fullName: entry.fullName,
      avatarUrl: entry.avatarUrl,
      department: deptMap.get(employeeId) ?? "—",
      avgProgress:
        entry.kpiCount > 0
          ? Math.round(entry.totalProgress / entry.kpiCount)
          : 0,
      kpiCount: entry.kpiCount,
      onTrackCount: entry.onTrackCount,
    }))
    .sort((a, b) => b.avgProgress - a.avgProgress);
}

export async function getAssignableEmployees(role: AppRole, userId: string) {
  return MOCK_EMPLOYEES.map((emp) => ({
    profile_id: emp.profile_id,
    employee_code: emp.employee_code,
    job_title: emp.job_title,
    profile: emp.profile,
  }));
}
