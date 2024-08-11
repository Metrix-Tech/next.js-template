import { NextResponse, NextRequest } from "next/server";

/**
 * @param req
 */
export default function middleware(req: NextRequest) {
  const { pathname, origin, locale } = req.nextUrl;
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host");
  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)
  const currentHost = hostname?.includes("vendor") ? "vendor" : "";
  // PUT YOUR DOMAIN HERE

  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents. This can also be done
  // via rewrites to a custom 404 page
  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") // exclude all API routes
  ) {
    const response = NextResponse.next();
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    if (currentHost?.includes("vendor")) {
      return NextResponse.rewrite(
        new URL(`${origin}/${locale}/_sites/${currentHost}${pathname}`, req.url)
      );
    }
    return NextResponse.rewrite(
      new URL(`${origin}/${locale}/_sites/customer${pathname}`, req.url)
    );
  }
}
