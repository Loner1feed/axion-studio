"use client";

import React from "react";
// import { useTranslations } from "@/utils/hooks";

import "../globals.scss";
import { Header } from "@/components/layout/header/header";
import { Container } from "@/components/layout/container/contaner";

export const MainPage = () => {
  // const t = useTranslations();

  return (
    <div>
      <Container>
        {/* <FancyDisplay>
          <LangSwitcher />
          MainPage {t.key}
        </FancyDisplay> */}

        <Header />
      </Container>
    </div>
  );
};

export default MainPage;
