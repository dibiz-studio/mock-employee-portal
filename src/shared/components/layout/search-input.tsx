"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Search, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Input } from "@/shared/components/ui/input";
import {
  searchEmployees,
  type EmployeeSearchResult,
} from "@/features/employees/services/employee.service";

export function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<EmployeeSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const delayDebounceFn = setTimeout(async () => {
      try {
        const formatted = await searchEmployees(trimmed, 5);
        setResults(formatted);
      } catch (err) {
        console.error("Failed to fetch search results", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSelect = (userId: string) => {
    setOpen(false);
    setQuery("");
    router.push(`/employees/${userId}`);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search employees..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full pl-9 pr-9"
        />
        {loading ? (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        ) : null}
      </div>

      {open && (query.trim().length >= 2 || results.length > 0) ? (
        <div className="absolute top-full z-50 mt-1 w-full rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none animate-in fade-in-50 slide-in-from-top-1">
          {loading && results.length === 0 ? (
            <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching...
            </div>
          ) : results.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          ) : (
            <ul className="max-h-[300px] overflow-y-auto">
              {results.map((user) => (
                <li key={user.id}>
                  <button
                    onClick={() => handleSelect(user.id)}
                    className="flex w-full items-center gap-3 rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.avatar_url ?? undefined}
                        alt={user.full_name}
                      />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{user.full_name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {user.job_title ? `${user.job_title} • ` : ""}
                        {user.department_name ?? user.role}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
