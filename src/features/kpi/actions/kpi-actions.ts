"use server";

import { revalidatePath } from "next/cache";
import type { KpiPeriod } from "../types";
import {
  assignKpiRecord,
  createKpiTemplateRecord,
} from "@/features/kpi/services/kpi.service";

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
  input: CreateTemplateInput,
): Promise<ActionResult> {
  try {
    const result = await createKpiTemplateRecord(input);
    if (!result.success) {
      return result;
    }
    revalidatePath("/kpi/templates");
    revalidatePath("/kpi");

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
    const result = await assignKpiRecord(input);
    if (!result.success) {
      return result;
    }
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
