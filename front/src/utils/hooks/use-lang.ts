"use client";

import { usePathname, useRouter } from "next/navigation";
import { languages } from "../const";

// This hook detects language from the browser's URL (Client Side)
// Redirects user if language is not correct
export const useLang = (defaultLanguage = "en") => {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const lang = segments[1];

  if (!languages.includes(lang)) {
    router.push(`/${defaultLanguage}/${pathname.slice(lang.length + 1)}`);
  }

  return lang || defaultLanguage;
};
