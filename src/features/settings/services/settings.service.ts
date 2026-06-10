import type { AppRole } from "@/shared/types/roles";
import {
  MOCK_PROFILES,
  MOCK_DEPARTMENTS,
  MOCK_LEAVE_POLICIES,
  MOCK_KPI_TEMPLATES,
  MOCK_SUPER_ADMIN,
} from "@/shared/lib/mock-data";

export async function getProfile(userId: string) {
  return MOCK_PROFILES.find((p) => p.id === userId) ?? MOCK_SUPER_ADMIN;
}

export async function getDepartments() {
  return MOCK_DEPARTMENTS.map((d) => ({
    id: d.id,
    name: d.name,
    code: d.code,
    description: d.description,
    is_active: d.is_active,
    profiles: d.head ? [{ full_name: d.head.full_name }] : [],
  }));
}

export async function getProfilesForRoleManagement() {
  return MOCK_PROFILES.map((p) => ({
    id: p.id,
    email: p.email,
    full_name: p.full_name,
    role: p.role,
    is_active: p.is_active,
    onboarding_status: p.onboarding_status,
    created_at: p.created_at,
  })).sort((a, b) => {
    if (a.onboarding_status !== b.onboarding_status) {
      return a.onboarding_status === "PENDING" ? -1 : 1;
    }
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
}

export async function getPendingOnboardingUsers() {
  return MOCK_PROFILES.filter(
    (p) => p.onboarding_status === "PENDING" && p.is_active,
  ).map((p) => ({
    id: p.id,
    email: p.email,
    full_name: p.full_name,
    role: p.role,
    created_at: p.created_at,
  }));
}

export async function getCompanyStats() {
  return {
    employees: MOCK_PROFILES.filter((p) => p.is_active).length,
    departments: MOCK_DEPARTMENTS.filter((d) => d.is_active).length,
    leavePolicies: MOCK_LEAVE_POLICIES.filter((p) => p.is_active).length,
  };
}

export async function getLeaveSettings() {
  return MOCK_LEAVE_POLICIES;
}

export async function getKpiSettings() {
  return MOCK_KPI_TEMPLATES.map((t) => ({
    id: t.id,
    name: t.name,
    category: t.category,
    period: t.period,
    is_active: t.is_active,
    weight: t.weight,
    default_target: t.default_target,
  }));
}

export async function getPayrollSettings() {
  return {
    allowanceTypes: ["HRA", "transport", "medical", "bonus"],
    deductionTypes: ["PF", "TDS", "ESI"],
    sampleCount: 12,
  };
}

export async function updateProfileRole(userId: string, role: AppRole) {
  const profile = MOCK_PROFILES.find((p) => p.id === userId);
  if (profile) {
    (profile as { role: AppRole }).role = role;
    profile.onboarding_status = "COMPLETED";
    profile.updated_at = new Date().toISOString();
  }
}

export async function updateProfileDetails(
  userId: string,
  values: { full_name: string; phone: string | null },
) {
  const profile = MOCK_PROFILES.find((p) => p.id === userId);
  if (profile) {
    profile.full_name = values.full_name;
    profile.phone = values.phone;
    profile.updated_at = new Date().toISOString();
  }
}
