import { NextRequest, NextResponse } from "next/server";
import { languages } from "./utils/const";

// Detecting language on the Server Side from browser's URL
// Redirecting if language is incorrect before the page renders
export const middleware = (req: NextRequest) => {
  const { nextUrl: url } = req;

  const lang = url.pathname.split("/")[1];

  if (!languages.includes(lang)) {
    console.log("**SSR** wrong URL language:", lang);
    const defaultLang = "en";

    return NextResponse.redirect(
      new URL(`/${defaultLang}${url.pathname.slice(lang.length + 1)}`, req.url)
    );
  } else {
    console.log("**SSR** Language is correct now!", lang);
  }
};

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Skip API, Next.js internals, and static assets
};
