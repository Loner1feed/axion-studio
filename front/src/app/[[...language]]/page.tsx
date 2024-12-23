import React from "react";

import "../globals.scss";
import { MainBanner } from "@/src/components/layout";
import { ProjectTypes } from "@/src/components/layout";
import { ApiService } from "@/src/utils/services";

async function getProjectTypes() {
  const res = await ApiService.getProjectTypes();

  return res.data;
}

export default async function Page() {
  const projectTypesData = getProjectTypes();

  const [projectTypes] = await Promise.all([projectTypesData]);

  return (
    <MainPageContext.Provider value={toggleHeader}>
      <MainBanner />
      <ProjectTypes data={projectTypes} />
    </div>
  );
}
