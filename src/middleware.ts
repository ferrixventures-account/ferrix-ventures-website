import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. If the user is requesting the default locale, redirect them to the path without the prefix.
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const newPath = pathname.replace(`/${defaultLocale}`, "") || "/";
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // 2. Check if the path is missing a locale.
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 3. If it's missing a locale, rewrite the path to include the default locale prefix.
  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // 4. If the path includes a non-default locale, do nothing.
  return;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*|favicon.ico).*)',
  ],
};
