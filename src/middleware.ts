import { NextRequest, NextResponse } from "next/server";
export async function middleware(request: NextRequest) {
  const token = await request.cookies.get("LOGIN_STATE"); // Check for auth token in cookies
  const path = request.nextUrl.pathname;
  // If the token is not present, redirect to the login page
  if (token && (path === "/login" || path === "/")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!token && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard",
    "/dashboard/:path",
    "/info",
    "/datalog"
  ]
};
