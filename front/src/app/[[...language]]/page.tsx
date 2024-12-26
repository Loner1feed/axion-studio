import React from "react";

import "../globals.scss";
import {
  MainBanner,
  Technologies,
  ProjectTypes,
  Process,
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

// temporary
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const processMockData = [
  {
    _id: "1",
    number: "01",
    title: "Meet",
    paragraph:
      "aboba aboba aboba aboba aboba aboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba aboba boba aboba aboba aboba aboba aboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba abobaaboba aboba aboba aboba aboba",
  },

  {
    _id: "3",
    number: "03",
    title: "Design",
    paragraph: "aboba aboba aboba aboba aboba 2",
  },

  {
    _id: "4",
    number: "04",
    title: "Development",
    paragraph: "aboba aboba aboba aboba aboba 3",
  },

  {
    _id: "2",
    number: "02",
    title: "Planning",
    paragraph: "aboba aboba aboba aboba aboba",
  },

  {
    _id: "5",
    number: "05",
    title: "Testing",
    paragraph: "aboba aboba aboba aboba aboba 2",
  },

  {
    _id: "6",
    number: "06",
    title: "Launch!",
    paragraph: "aboba aboba aboba aboba aboba 3",
  },
];

export default async function Page() {
  const projectTypesData = getProjectTypes();
  const technologiesData = getTechnologies();
  const processesData = getProcesses();

  const [projectTypes, technologies, processes] = await Promise.all([
    projectTypesData,
    technologiesData,
    processesData,
  ]);

  console.log(processes);

  return (
    <div>
      <MainBanner />
      <ProjectTypes data={projectTypes} />
      <Technologies data={technologies} />
      <Process data={processes} />
    </div>
  );
}
