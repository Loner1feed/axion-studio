"use client";

import { usePathname, useRouter } from "next/navigation";
import { languages } from "../const/languages";

export const useLang = (defaultLanguage = "en") => {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const lang = segments[1];

  // redirect user if language is not correct
  if (!languages.includes(lang))
    router.push(`/${defaultLanguage}/${pathname.slice(lang.length + 1)}`);

  return lang || defaultLanguage;
};
