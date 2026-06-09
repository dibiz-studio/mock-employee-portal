"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/shared/lib/utils";

interface SectionNavItem {
  label: string;
  href: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
  className?: string;
}

export function SectionNav({ items, className }: SectionNavProps) {
  const pathname = usePathname();

  // Determine the single best-matching item: the one whose href is the
  // longest prefix of the current pathname (exact match wins outright).
  let activeHref: string | null = null;
  let bestLength = -1;
  for (const item of items) {
    const isMatch = pathname === item.href || pathname.startsWith(`${item.href}/`);
    if (isMatch && item.href.length > bestLength) {
      activeHref = item.href;
      bestLength = item.href.length;
    }
  }

  return (
    <nav
      className={cn(
        "flex flex-wrap items-center gap-1 border-b border-border",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.href === activeHref;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative -mb-px rounded-t-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute inset-x-2 -bottom-px h-0.5 rounded-full transition-colors",
                isActive ? "bg-primary" : "bg-transparent",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
