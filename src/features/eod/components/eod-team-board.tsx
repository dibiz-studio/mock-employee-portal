import Link from "next/link";
import { CheckCircle2, Clock4 } from "lucide-react";

import type { EodBoard, EodBoardEmployeeDay } from "@/features/eod/services/eod.service";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function dayLabel(date: string, index: number) {
  if (index === 0) return "Today";
  if (index === 1) return "Yesterday";
  const d = new Date(`${date}T00:00:00`);
  return d.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
}

function fullDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function DayCell({ day }: { day: EodBoardEmployeeDay }) {
  if (!day.submission) {
    return (
      <div className="flex h-full items-center gap-2 rounded-md border border-dashed border-border/70 bg-muted/30 px-3 py-2.5 text-sm text-muted-foreground">
        <Clock4 className="h-4 w-4 shrink-0" aria-hidden />
        <span>Not submitted</span>
      </div>
    );
  }

  const s = day.submission;
  return (
    <div className="flex h-full flex-col gap-2 rounded-md border border-border bg-card px-3 py-2.5">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
          Submitted
        </span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {s.hours_worked}h
        </span>
      </div>
      <ul className="space-y-1 text-sm text-foreground/90">
        {s.tasks_completed.slice(0, 4).map((task, i) => (
          <li key={i} className="flex gap-1.5 leading-snug">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span className="line-clamp-2">{task}</span>
          </li>
        ))}
      </ul>
      {s.tasks_completed.length > 4 ? (
        <span className="text-xs text-muted-foreground">
          +{s.tasks_completed.length - 4} more
        </span>
      ) : null}
    </div>
  );
}

export function EodTeamBoard({ board }: { board: EodBoard }) {
  return (
    <Card>
      <CardHeader className="gap-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle>Team EOD Board</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="success">{board.submittedToday} submitted today</Badge>
            {board.pendingToday > 0 ? (
              <Badge variant="warning">{board.pendingToday} pending</Badge>
            ) : null}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Daily updates by employee. EOD reports are due at 7:00 PM (office hours
          11:00 AM – 7:00 PM).
        </p>
      </CardHeader>
      <CardContent>
        {/* Column header row (hidden on mobile) */}
        <div className="hidden border-b border-border pb-2 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] md:gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Employee
          </span>
          {board.dates.map((date, i) => (
            <span
              key={date}
              className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
            >
              {dayLabel(date, i)}{" "}
              <span className="font-normal normal-case text-muted-foreground/70">
                · {fullDate(date)}
              </span>
            </span>
          ))}
        </div>

        <ul className="divide-y divide-border">
          {board.employees.map((emp) => (
            <li
              key={emp.employee_id}
              className="grid grid-cols-1 gap-3 py-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] md:gap-4"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary/15 text-xs font-semibold text-primary">
                    {initials(emp.employee_name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <Link
                    href={`/eod/employee/${emp.employee_id}`}
                    className="block truncate text-sm font-medium hover:text-primary hover:underline"
                  >
                    {emp.employee_name}
                  </Link>
                  <p className="truncate text-xs text-muted-foreground">
                    {emp.job_title} · {emp.department}
                  </p>
                </div>
              </div>
              {emp.days.map((day, i) => (
                <div key={day.date} className="flex flex-col">
                  <span
                    className={cn(
                      "mb-1 text-xs font-medium text-muted-foreground md:hidden",
                    )}
                  >
                    {dayLabel(day.date, i)}
                  </span>
                  <DayCell day={day} />
                </div>
              ))}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
