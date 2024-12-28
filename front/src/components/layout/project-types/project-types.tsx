"use client";

import React from "react";
import { ProjectType } from "@/src/utils/types";
import { useTranslations } from "@/src/utils/hooks";
import { Heading, FadeInOnView } from "@/src/components/common";
import { Container } from "../container/contaner";
import { ProjectGrid } from "./common/project-grid";

import styles from "./project-types.module.scss";

interface ProjectTypesProps {
  data: ProjectType[];
}

export const ProjectTypes: React.FC<ProjectTypesProps> = ({ data }) => {
  const t = useTranslations();

  return (
    <FadeInOnView>
      <div className={styles.projectTypes}>
        <Container>
          <Heading className={styles.heading}>{t.benefits.heading}</Heading>
          <ProjectGrid data={data} />
        </Container>
      </div>
    </FadeInOnView>
  );
};
