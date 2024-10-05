import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "./app/actions/config";

const publicRoutes = ["/home", "/register", "/", "/signup", "/login"];
const CLIENT_HOME_PAGE = "/client";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = !publicRoutes.includes(path) && req.nextUrl.basePath == API_URL;

  const currentToken = cookies().get("session")?.value;

  if (isProtectedRoute && !currentToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (currentToken) {
    if (!isProtectedRoute) {
      return NextResponse.redirect(new URL(CLIENT_HOME_PAGE, req.nextUrl));
    }
    req.headers.set("Authorization", `Bearer ${currentToken}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.png$).*)"],
};
