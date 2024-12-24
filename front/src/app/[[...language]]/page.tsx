import React from "react";

import "../globals.scss";
import {
  MainBanner,
  Technologies,
  ProjectTypes,
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

// temporary
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockTechnologiesData = [
  {
    id: "fsdhgfbasdf",
    iconName: "react",
    title: "React",
    paragraph:
      "технология для создания быстрых сайтов, которые легко находят поисковые системы.",
    backdropColor: "#7BD2EB",
    href: "",
    showOnFront: true,
  },

  {
    id: "fsdhgfbasdf",
    iconName: "react",
    title: "React Native",
    paragraph:
      "технология для создания быстрых сайтов, которые легко находят поисковые системы.",
    backdropColor: "#7BD2EB",
    href: "",
    showOnFront: true,
  },

  {
    id: "fsdhgfbasdf",
    iconName: "nodejs",
    title: "Node.js",
    paragraph:
      "технология для создания быстрых сайтов, которые легко находят поисковые системы.",
    backdropColor: "#777867",
    href: "",
    showOnFront: true,
  },

  {
    id: "fsdhgfbasdf",
    iconName: "nextjs",
    title: "Next.js",
    paragraph:
      "технология для создания быстрых сайтов, которые легко находят поисковые системы.",
    backdropColor: "#CECECE",
    href: "",
    showOnFront: true,
  },

  {
    id: "fsdhgfbasdf",
    iconName: "nestjs",
    title: "Nest.js",
    paragraph:
      "технология для создания быстрых сайтов, которые легко находят поисковые системы.",
    backdropColor: "#F24E68",
    href: "",
    showOnFront: true,
  },

  {
    id: "fsdhgfbasdf",
    iconName: "typescript",
    title: "TypeScript",
    paragraph:
      "технология для создания быстрых сайтов, которые легко находят поисковые системы.",
    backdropColor: "#059DFF",
    href: "",
    showOnFront: true,
  },
];

export default async function Page() {
  const projectTypesData = getProjectTypes();
  const technologiesData = getTechnologies();

  const [projectTypes, technologies] = await Promise.all([
    projectTypesData,
    technologiesData,
  ]);

  return (
    <div>
      <MainBanner />
      <div style={{ height: "100vh" }}></div>
      <ProjectTypes data={projectTypes} />
      <Technologies data={technologies} />
    </div>
  );
}
