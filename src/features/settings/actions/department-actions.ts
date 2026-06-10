"use server";

import { revalidatePath } from "next/cache";
import { MOCK_DEPARTMENTS } from "@/shared/lib/mock-data";

export interface CreateDepartmentInput {
  name: string;
  code: string;
  description?: string;
}

export async function createDepartment(input: CreateDepartmentInput) {
  const name = input.name.trim();
  const code = input.code.trim().toUpperCase();

  if (!name || name.length < 2) {
    return { error: "Department name must be at least 2 characters." };
  }
  if (!code || code.length < 2) {
    return { error: "Department code must be at least 2 characters." };
  }

  // Simulate success — mock data only
  const newDept = {
    id: `dept-${Date.now()}`,
    name,
    code,
    description: input.description?.trim() || null,
    head_id: null,
    head: null,
    is_active: true,
    employee_count: 0,
  };
  (MOCK_DEPARTMENTS as typeof MOCK_DEPARTMENTS).push(
    newDept as unknown as (typeof MOCK_DEPARTMENTS)[0],
  );

  revalidatePath("/settings/departments");
  revalidatePath("/employees/departments");
  revalidatePath("/employees/new");

  return { success: true, id: newDept.id };
}
