"use client";

import React from "react";

import "../globals.scss";
import { MainBanner } from "@/src/components/layout";
import { ProjectTypes } from "@/src/components/layout/project-types/project-types";
import { useToggleHeader } from "@/src/components/layout/header/hooks/use-toggle-header";
import { MainPageContext } from "./page.context";

export const MainPage = () => {
  const toggleHeader = useToggleHeader();
  return (
    <MainPageContext.Provider value={toggleHeader}>
      <MainBanner />
      <ProjectTypes />
      <div style={{ height: "1000px" }}></div>
    </MainPageContext.Provider>
  );
};

export default MainPage;
