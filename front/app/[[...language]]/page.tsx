"use client";

import { useTranslations } from "@/utils/hooks/use-translations";
import React from "react";

export const MainPage = () => {
  const t = useTranslations();

  return <div>MainPage {t.key}</div>;
};

export default MainPage;
