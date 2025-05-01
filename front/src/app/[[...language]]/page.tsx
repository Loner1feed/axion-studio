/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import "../globals.scss";
import {
  MainBanner,
  ProjectTypes,
  Process,
  Contact,
  ProjectTypesNew,
  Technologies,
} from "@/src/components/layout";
import { ApiService } from "@/src/utils/services";

async function getProjectTypes() {
  const res = await ApiService.getProjectTypes();

  return res.data;
}

async function getTechnologies() {
  const res = await ApiService.getTechnologies();

  return res.data;
}

async function getProcesses() {
  const res = await ApiService.getProcesses();

  return res.data;
}

async function getSocials() {
  const res = await ApiService.getSocials();

  return res.data;
}

export default async function Page() {
  const projectTypesData = getProjectTypes();
  const technologiesData = getTechnologies();
  const processesData = getProcesses();
  const socialsData = getSocials();

  const [projectTypes, technologies, processes, socials] = await Promise.all([
    projectTypesData,
    technologiesData,
    processesData,
    socialsData,
  ]);

  return (
    <div>
      <MainBanner />
      {/* <ProjectTypes data={projectTypes} /> */}
      <ProjectTypesNew data={projectTypes} />
      <Technologies data={technologies} />
      <Process data={processes} />
      <Contact data={socials} />
    </div>
  );
}
