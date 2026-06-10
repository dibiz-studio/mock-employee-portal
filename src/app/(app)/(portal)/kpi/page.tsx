import Link from "next/link";
import { format } from "date-fns";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Plus,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { getServerProfile } from "@/features/auth/services/auth-server.service";
import { KpiChart } from "@/features/kpi/components/kpi-chart";
import { calcProgress } from "@/features/kpi/lib/utils";
import {
  getEmployeeKpis,
  getKpiCategoryBreakdown,
  getKpiDashboardStats,
  getKpiTrendData,
} from "@/features/kpi/services/kpi.service";
import { PageHeader } from "@/shared/components/data/page-header";
import { EmptyState } from "@/shared/components/data/empty-state";
import { StatCard } from "@/shared/components/data/stat-card";
import { StatusBadge } from "@/shared/components/data/status-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Progress } from "@/shared/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function KpiDashboardPage() {
  const profile = await getServerProfile();
  if (!profile) return null;

  const [stats, kpis, trendData, categoryData] = await Promise.all([
    getKpiDashboardStats(profile.role, profile.id),
    getEmployeeKpis(profile.role, profile.id),
    getKpiTrendData(profile.role, profile.id),
    getKpiCategoryBreakdown(profile.role, profile.id),
  ]);

  const canManage = ["SUPER_ADMIN", "HR"].includes(profile.role);
  const canAssign = ["SUPER_ADMIN", "HR", "MANAGER"].includes(profile.role);

  const categoryChartData = categoryData.map((c) => ({
    label: c.category,
    value: c.avgProgress,
  }));

  const employeeSummaryMap = new Map<
    string,
    {
      employeeId: string;
      fullName: string;
      avatarUrl: string | null;
      kpiCount: number;
      totalProgress: number;
      onTrackCount: number;
      atRiskCount: number;
      titles: string[];
    }
  >();

  for (const kpi of kpis) {
    const employee = kpi.employee ?? {
      id: kpi.employee_id,
      full_name: "Employee",
      avatar_url: null,
    };

    const entry = employeeSummaryMap.get(kpi.employee_id) ?? {
      employeeId: kpi.employee_id,
      fullName: employee.full_name,
      avatarUrl: employee.avatar_url ?? null,
      kpiCount: 0,
      totalProgress: 0,
      onTrackCount: 0,
      atRiskCount: 0,
      titles: [],
    };

    entry.kpiCount += 1;
    entry.totalProgress += calcProgress(kpi);
    entry.titles.push(kpi.title);

    if (["ON_TRACK", "COMPLETED"].includes(kpi.status)) {
      entry.onTrackCount += 1;
    }
    if (kpi.status === "AT_RISK") {
      entry.atRiskCount += 1;
    }

    employeeSummaryMap.set(kpi.employee_id, entry);
  }

  const employeeSummaries = Array.from(employeeSummaryMap.values())
    .map((entry) => ({
      ...entry,
      avgProgress:
        entry.kpiCount > 0
          ? Math.round(entry.totalProgress / entry.kpiCount)
          : 0,
    }))
    .sort((a, b) => b.kpiCount - a.kpiCount || b.avgProgress - a.avgProgress);

  return (
    <div className="space-y-6">
      <PageHeader
        title="KPI Dashboard"
        description="Track performance goals, ownership, and progress across your scope"
        actions={
          <>
            <Button variant="outline" asChild>
              <Link href="/kpi/analytics">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/kpi/leaderboard">
                <Trophy className="mr-2 h-4 w-4" />
                Leaderboard
              </Link>
            </Button>
            {canManage ? (
              <Button variant="outline" asChild>
                <Link href="/kpi/templates">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  Templates
                </Link>
              </Button>
            ) : null}
            {canAssign ? (
              <Button asChild>
                <Link href="/kpi/assign">
                  <Plus className="mr-2 h-4 w-4" />
                  Assign KPI
                </Link>
              </Button>
            ) : null}
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total KPIs" value={stats.total} icon={Target} />
        <StatCard title="On track" value={stats.onTrack} icon={CheckCircle2} />
        <StatCard title="At risk" value={stats.atRisk} icon={AlertTriangle} />
        <StatCard
          title="Avg completion"
          value={`${stats.avgCompletion}%`}
          icon={BarChart3}
          description="Active KPIs"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <KpiChart
          title="Progress by status"
          description="Average completion per status"
          data={trendData}
          variant="area"
        />
        <KpiChart
          title="By category"
          description="Average progress per category"
          data={categoryChartData}
          variant="bar"
          valueLabel="Avg %"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All KPI assignments</CardTitle>
          <CardDescription>
            Click any KPI to see the full breakdown for that assignment
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {kpis.length === 0 ? (
            <div className="p-6">
              <EmptyState
                icon={Target}
                title="No KPIs assigned"
                description="Assign KPIs to start tracking performance goals."
                actionLabel={canAssign ? "Assign KPI" : undefined}
                actionHref={canAssign ? "/kpi/assign" : undefined}
              />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>KPI</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpis.map((kpi) => {
                  const progress = calcProgress(kpi);

                  return (
                    <TableRow key={kpi.id}>
                      <TableCell>
                        <Link
                          href={`/employees/${kpi.employee_id}`}
                          className="flex items-center gap-3 transition-colors hover:text-primary"
                        >
                          <Avatar className="h-9 w-9">
                            <AvatarImage
                              src={kpi.employee?.avatar_url ?? undefined}
                              alt={kpi.employee?.full_name ?? "Employee"}
                            />
                            <AvatarFallback>
                              {kpi.employee?.full_name
                                ? getInitials(kpi.employee.full_name)
                                : "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="truncate font-medium">
                              {kpi.employee?.full_name ?? "Employee"}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                              View employee profile
                            </p>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="max-w-[320px]">
                        <div className="space-y-1">
                          <Link
                            href={`/kpi/${kpi.id}`}
                            className="block truncate font-medium transition-colors hover:text-primary"
                          >
                            {kpi.title}
                          </Link>
                          {kpi.description ? (
                            <p className="line-clamp-2 text-xs text-muted-foreground">
                              {kpi.description}
                            </p>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className="min-w-[180px]">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                            <span>{progress}% complete</span>
                            <span className="whitespace-nowrap tabular-nums">
                              {kpi.current_value} / {kpi.target_value} {kpi.unit}
                            </span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={kpi.status} />
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        <div className="space-y-1">
                          <Badge variant="secondary">{kpi.period}</Badge>
                          <p className="whitespace-nowrap">
                            {format(new Date(kpi.period_start), "MMM d")} - {" "}
                            {format(new Date(kpi.period_end), "MMM d, yyyy")}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {kpi.template?.category ? (
                          <Badge variant="outline">{kpi.template.category}</Badge>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            Uncategorized
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/kpi/${kpi.id}`}>Open</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workload by employee</CardTitle>
          <CardDescription>
            See who is working on what and how much progress each person has made
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {employeeSummaries.length === 0 ? (
            <div className="p-6">
              <EmptyState
                icon={Users}
                title="No KPI owners yet"
                description="Employee workload will appear once KPIs are assigned."
              />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>KPIs</TableHead>
                  <TableHead>Avg progress</TableHead>
                  <TableHead>On track</TableHead>
                  <TableHead>At risk</TableHead>
                  <TableHead>Assigned work</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeSummaries.map((summary) => (
                  <TableRow key={summary.employeeId}>
                    <TableCell>
                      <Link
                        href={`/employees/${summary.employeeId}`}
                        className="flex items-center gap-3 transition-colors hover:text-primary"
                      >
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src={summary.avatarUrl ?? undefined}
                            alt={summary.fullName}
                          />
                          <AvatarFallback>
                            {getInitials(summary.fullName)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{summary.fullName}</p>
                          <p className="text-xs text-muted-foreground">
                            Employee profile
                          </p>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium tabular-nums">
                      {summary.kpiCount}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                          <span>{summary.avgProgress}%</span>
                          <span>Average</span>
                        </div>
                        <Progress value={summary.avgProgress} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium tabular-nums">
                      {summary.onTrackCount}
                    </TableCell>
                    <TableCell className="font-medium tabular-nums">
                      {summary.atRiskCount}
                    </TableCell>
                    <TableCell>
                      <div className="max-w-[320px] space-y-1">
                        {summary.titles.slice(0, 2).map((title) => (
                          <p
                            key={title}
                            className="truncate text-xs text-muted-foreground"
                          >
                            {title}
                          </p>
                        ))}
                        {summary.titles.length > 2 ? (
                          <p className="text-xs text-muted-foreground">
                            +{summary.titles.length - 2} more assignments
                          </p>
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
