"use client";

import React from "react";

import "../globals.scss";
import { MainBanner } from "@/components/layout";

export const MainPage = () => {
  return (
    <div>
      <MainBanner />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default MainPage;
