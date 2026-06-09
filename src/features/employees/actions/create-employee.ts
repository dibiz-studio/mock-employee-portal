"use server";

import { revalidatePath } from "next/cache";
import type { AppRole } from "@/shared/types/roles";

export interface CreateEmployeeInput {
  email: string;
  password: string;
  full_name: string;
  role: AppRole;
  phone?: string;
  employee_code: string;
  department_id?: string;
  job_title: string;
  hire_date: string;
  work_location?: string;
  employment_status: "ACTIVE" | "PROBATION";
}

export async function createEmployee(input: CreateEmployeeInput) {
  // Mock: simulate successful employee creation
  revalidatePath("/employees");
  return { success: true, profileId: `mock-${Date.now()}` };
}
