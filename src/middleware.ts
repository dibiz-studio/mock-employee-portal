import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/shared/lib/supabase/middleware";

const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password", "/auth/callback"];

function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
const user = { id: "1", email: "snigdha@dibiz.com", role: "SUPER_ADMIN" };

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const destination = user ? "/dashboard" : "/login";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  if (!user && !isPublicRoute(pathname) && pathname !== "/access-denied") {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (
    user &&
    (pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/forgot-password")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
