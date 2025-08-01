import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/donor", "/organization", "/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  // Redirect authenticated users from the landing page to events page.
  if (accessToken && pathname === "/") {
    return NextResponse.redirect(new URL("/donor/events", request.url));
  }

  // Redirect unauthenticated users from protected routes to landing page.
  if (!accessToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (asset files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};

