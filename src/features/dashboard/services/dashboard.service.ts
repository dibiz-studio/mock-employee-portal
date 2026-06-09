import type { AppRole } from "@/shared/types/roles";
import {
  MOCK_PROFILES,
  MOCK_DEPARTMENTS,
  MOCK_LEAVE_REQUESTS,
  MOCK_EMPLOYEE_KPIS,
  MOCK_NOTIFICATIONS,
} from "@/shared/lib/mock-data";

export interface DashboardStats {
  totalEmployees: number;
  pendingLeaves: number;
  activeKpis: number;
  kpiAtRisk: number;
  unreadNotifications: number;
  departments: number;
  pendingOnboarding: number;
}

export async function getDashboardStats(
  userId: string,
  role: AppRole,
): Promise<DashboardStats> {
  const activeProfiles = MOCK_PROFILES.filter((p) => p.is_active);
  const pendingLeaves = MOCK_LEAVE_REQUESTS.filter((l) => l.status === "PENDING").length;
  const activeKpis = MOCK_EMPLOYEE_KPIS.filter((k) =>
    ["NOT_STARTED", "IN_PROGRESS", "ON_TRACK", "AT_RISK"].includes(k.status)
  ).length;
  const kpiAtRisk = MOCK_EMPLOYEE_KPIS.filter((k) => k.status === "AT_RISK").length;
  const unreadNotifications = MOCK_NOTIFICATIONS.filter(
    (n) => n.user_id === userId && !n.is_read
  ).length;
  const departments = MOCK_DEPARTMENTS.filter((d) => d.is_active).length;
  const pendingOnboarding = MOCK_PROFILES.filter(
    (p) => p.onboarding_status === "PENDING" && p.is_active
  ).length;

  return {
    totalEmployees: activeProfiles.length,
    pendingLeaves,
    activeKpis,
    kpiAtRisk,
    unreadNotifications,
    departments,
    pendingOnboarding,
  };
}

export async function requireRole(allowed: AppRole[]) {
  const { MOCK_SUPER_ADMIN } = await import("@/shared/lib/mock-data");
  if (!allowed.includes(MOCK_SUPER_ADMIN.role)) {
    const { redirect } = await import("next/navigation");
    redirect("/access-denied");
  }
  return MOCK_SUPER_ADMIN;
}

export async function getUnreadNotificationCount(userId: string) {
  return MOCK_NOTIFICATIONS.filter((n) => n.user_id === userId && !n.is_read).length;
}
