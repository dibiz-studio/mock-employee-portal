import type { Profile } from "@/shared/stores/auth-store";
import { MOCK_SUPER_ADMIN } from "@/shared/lib/mock-data";

export async function getServerProfile(): Promise<Profile | null> {
  return MOCK_SUPER_ADMIN;
}
