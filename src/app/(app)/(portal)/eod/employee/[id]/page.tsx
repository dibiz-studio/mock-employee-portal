import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getEmployeeByProfileId } from "@/features/employees/services/employee.service";
import { EmployeeEodHistory } from "@/features/eod/components/employee-eod-history";
import { getEmployeeEodHistory } from "@/features/eod/services/eod.service";
import { requireRole } from "@/features/dashboard/services/dashboard.service";
import { Breadcrumbs } from "@/shared/components/layout/breadcrumbs";
import { PageHeader } from "@/shared/components/data/page-header";
import { Button } from "@/shared/components/ui/button";

interface EmployeeEodPageProps {
  params: Promise<{ id: string }>;
}

export default async function EmployeeEodPage({ params }: EmployeeEodPageProps) {
  const { id } = await params;
  const viewer = await requireRole(["SUPER_ADMIN", "HR", "MANAGER"]);
  const employee = await getEmployeeByProfileId(id);

  if (!employee) notFound();

  const updates = await getEmployeeEodHistory(id);
  const { profile } = employee;

  return (
    <div className="space-y-6">
      <Breadcrumbs trailingLabel={`${profile.full_name} EOD`} />
      <Button variant="ghost" size="sm" asChild className="-ml-2 w-fit">
        <Link href="/eod">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to EOD board
        </Link>
      </Button>

      <PageHeader
        title={`${profile.full_name} EOD history`}
        description={`All recorded daily updates for ${profile.full_name}. ${viewer.role === "SUPER_ADMIN" ? "Founder & CEO overview." : "Team review view."}`}
        actions={
          <Button asChild variant="outline">
            <Link href={`/employees/${profile.id}`}>Open profile</Link>
          </Button>
        }
      />

      <EmployeeEodHistory
        employeeId={profile.id}
        employeeName={profile.full_name}
        updates={updates}
      />
    </div>
  );
}
