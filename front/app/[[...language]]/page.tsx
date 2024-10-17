"use client";

import { FancyDisplay } from "@/components/fancy-display/fancy-display";
import React from "react";

import "../globals.scss";
import { useTranslations } from "@/utils/hooks";
import { LangSwitcher } from "@/components/lang-switcher/lang-switcher";

export const MainPage = () => {
  const t = useTranslations();

  return (
    <div>
      <FancyDisplay>
        <LangSwitcher />
        MainPage {t.key}
      </FancyDisplay>
    </div>
  );
};

export default MainPage;
