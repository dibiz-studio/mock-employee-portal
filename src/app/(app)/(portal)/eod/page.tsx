import Link from "next/link";
import { CheckCircle2, ClipboardList, Clock4, Users } from "lucide-react";

import { getServerProfile } from "@/features/auth/services/auth-server.service";
import { EodTeamBoard } from "@/features/eod/components/eod-team-board";
import {
  getEodDashboard,
  getEodTeamBoard,
} from "@/features/eod/services/eod.service";
import { PageHeader } from "@/shared/components/data/page-header";
import { StatCard } from "@/shared/components/data/stat-card";
import { SectionNav } from "@/shared/components/layout/section-nav";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { hasPermission } from "@/shared/lib/rbac";
import { formatDate } from "@/shared/lib/utils";

const EOD_NAV = [
  { label: "Dashboard", href: "/eod" },
  { label: "Submit", href: "/eod/submit" },
  { label: "History", href: "/eod/history" },
];

export default async function EodDashboardPage() {
  const profile = await getServerProfile();
  if (!profile) return null;

  const canReview = hasPermission(profile.role, "eod:review:team");

  const nav = [
    ...EOD_NAV,
    ...(canReview ? [{ label: "Review", href: "/eod/review" }] : []),
  ];

  // Managers, HR and Admins get the team board (employee-wise, today + yesterday).
  if (canReview) {
    const board = await getEodTeamBoard(2);
    return (
      <div className="space-y-6">
        <PageHeader
          title="End of Day"
          description="Track daily updates across the team."
          actions={
            <Button asChild>
              <Link href="/eod/review">Review Submissions</Link>
            </Button>
          }
        />
        <SectionNav items={nav} />

        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard
            title="Submitted Today"
            value={`${board.submittedToday}/${board.total}`}
            icon={CheckCircle2}
            description="Reports received for today"
          />
          <StatCard
            title="Pending Today"
            value={board.pendingToday}
            icon={Clock4}
            description="Yet to submit by 7:00 PM"
          />
          <StatCard
            title="Team Size"
            value={board.total}
            icon={Users}
            description="Active contributors"
          />
        </div>

        <EodTeamBoard board={board} />
      </div>
    );
  }

  // Personal view for employees / interns.
  const dashboard = await getEodDashboard(profile.id, profile.role);

  return (
    <div className="space-y-6">
      <PageHeader
        title="End of Day"
        description="Submit your daily update before 7:00 PM."
        actions={
          <Button asChild>
            <Link href="/eod/submit">Submit Today&apos;s EOD</Link>
          </Button>
        }
      />
      <SectionNav items={nav} />

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          title="Today's Status"
          value={dashboard.submittedToday ? "Submitted" : "Pending"}
          icon={dashboard.submittedToday ? CheckCircle2 : Clock4}
          description={
            dashboard.submittedToday
              ? "Your EOD is in"
              : "Due by 7:00 PM today"
          }
        />
        <StatCard
          title="Recent Updates"
          value={dashboard.recentUpdates.length}
          icon={ClipboardList}
          description="Submissions on record"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Recent Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {dashboard.recentUpdates.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No EOD submissions yet.
            </p>
          ) : (
            <ul className="space-y-3">
              {dashboard.recentUpdates.map((update) => (
                <li
                  key={update.id}
                  className="flex items-center justify-between rounded-md border border-border p-3 text-sm"
                >
                  <div className="min-w-0">
                    <p className="font-medium">
                      {formatDate(update.report_date)}
                    </p>
                    <p className="truncate text-muted-foreground">
                      {update.tasks_completed.length} tasks ·{" "}
                      {update.hours_worked}h
                    </p>
                  </div>
                  {update.reviewed_at ? (
                    <span className="shrink-0 text-xs text-success">
                      Reviewed
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs text-muted-foreground">
                      Pending
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
