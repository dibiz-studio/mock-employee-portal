import { NextResponse } from "next/server";
import { ROLE_DASHBOARD_PATHS } from "@/shared/lib/rbac";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  // Mock: always redirect as SUPER_ADMIN
  return NextResponse.redirect(`${origin}${ROLE_DASHBOARD_PATHS["SUPER_ADMIN"]}`);
}
