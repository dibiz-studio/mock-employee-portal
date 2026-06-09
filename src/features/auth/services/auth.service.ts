import type { Profile } from "@/shared/stores/auth-store";
import { MOCK_SUPER_ADMIN, MOCK_PROFILES } from "@/shared/lib/mock-data";

export async function signInWithGoogle() {
  // Mock: no-op for stub environment
  return {};
}

export async function signUp(email: string, password: string, fullName: string) {
  return {};
}

export async function syncGoogleAvatar(userId: string, avatarUrl: string) {
  // no-op
}

export async function signIn(email: string, password: string) {
  return {};
}

export async function signOut() {
  // no-op
}

export async function resetPassword(email: string) {
  // no-op
}

export async function fetchProfile(userId: string): Promise<Profile | null> {
  return (
    (MOCK_PROFILES.find((p) => p.id === userId) as Profile) ?? MOCK_SUPER_ADMIN
  );
}
