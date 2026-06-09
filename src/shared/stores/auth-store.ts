import { create } from "zustand";

import type { AppRole } from "@/shared/types/roles";

export type OnboardingStatus = "PENDING" | "COMPLETED";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string | null;
  role: AppRole;
  phone: string | null;
  is_active: boolean;
  onboarding_status?: OnboardingStatus;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  profile: Profile | null;
  isLoading: boolean;
  setProfile: (profile: Profile | null) => void;
  setLoading: (isLoading: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  profile: {
    id: "1",
    email: "snigdha@dibiz.com",
    full_name: "Snigdha Singh",
    avatar_url: null,
    role: "SUPER_ADMIN",
    phone: null,
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  isLoading: false,
  setProfile: (profile) => set({ profile, isLoading: false }),
  setLoading: (isLoading) => set({ isLoading }),
  clearAuth: () => set({ profile: null, isLoading: false })
}));
