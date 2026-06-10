"use server";

import { revalidatePath } from "next/cache";
import type { KpiPeriod } from "../types";

type ActionResult = {
  success: boolean;
  error?: string;
};

export interface CreateTemplateInput {
  name: string;
  description?: string;
  category: string;
  measurement_unit: string;
  default_target?: number;
  period: KpiPeriod;
  department_id?: string;
  weight: number;
}

export async function createKpiTemplate(
  _input: CreateTemplateInput
): Promise<ActionResult> {
  try {
    revalidatePath("/kpi/templates");

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "Failed to create KPI template",
    };
  }
}

export interface AssignKpiInput {
  employee_id: string;
  template_id?: string;
  title: string;
  description?: string;
  target_value: number;
  unit: string;
  weight: number;
  period: KpiPeriod;
  period_start: string;
  period_end: string;
}

export async function assignKpi(
  input: AssignKpiInput
): Promise<ActionResult> {
  try {
    revalidatePath("/kpi");
    revalidatePath(`/employees/${input.employee_id}`);

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "Failed to assign KPI",
    };
  }
}