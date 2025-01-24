"use client";

import { ProjectType } from "@/src/utils/types";
import styles from "../project-types.module.scss";
import { Project } from "./project";

interface ProjectGridProps {
  data?: ProjectType[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data?.map((el: ProjectType, i) => (
        <Project
          key={`project-${i}`}
          title={el.title}
          iconName={el.iconName}
          paragraph={el.paragraph}
          reversed={!!(i % 2)}
          showOnFront={el.showOnFront}
        />
      ))}
    </div>
  );
};
