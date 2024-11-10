"use client";

import React from "react";

import "../globals.scss";
import { MainBanner } from "@/src/components/layout";
import { ProjectTypes } from "@/src/components/layout/project-types/project-types";

export const MainPage = () => {
  return (
    <div>
      <MainBanner />
      <ProjectTypes />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default MainPage;
