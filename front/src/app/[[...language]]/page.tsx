/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import "../globals.scss";
import {
  MainBanner,
  ProjectTypes,
  Process,
  Contact,
  ProjectTypesNew,
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

// async function getSocials() {}

// temporary
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const socialsMockData = [
  {
    label: "Social 1",
    iconName: "react",
    backdropColor: "#7BD2EB",
    href: "https://google.com",
    showOnFront: true,
  },

  {
    label: "Social 2",
    iconName: "react",
    backdropColor: "#7BD2EB",
    href: "https://google.com",
    showOnFront: true,
  },

  {
    label: "Social 3",
    iconName: "react",
    backdropColor: "#7BD2EB",
    href: "https://google.com",
    showOnFront: true,
  },

  {
    label: "Social 4",
    iconName: "react",
    backdropColor: "#7BD2EB",
    href: "https://google.com",
    showOnFront: true,
  },
];

export default async function Page() {
  const projectTypesData = getProjectTypes();
  const technologiesData = getTechnologies();
  const processesData = getProcesses();

  const [projectTypes, _, processes] = await Promise.all([
    projectTypesData,
    technologiesData,
    processesData,
  ]);

  return (
    <div>
      <MainBanner />
      <ProjectTypes data={projectTypes} />
      <ProjectTypesNew data={projectTypes} />
      {/* <Technologies data={technologies} /> */}
      <Process data={processes} />
      <Contact data={socialsMockData} />
    </div>
  );
}
