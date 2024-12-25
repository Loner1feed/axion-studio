"use client";

import { TechnologyTypes } from "@/src/utils/types";
import styles from "../technologies.module.scss";
import { Technology } from "./technology";

interface TechnologiesGridProps {
  data: TechnologyTypes[];
}

export const TechnologiesGrid: React.FC<TechnologiesGridProps> = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((el, i) => (
        <Technology
          key={`technology-${i}`}
          iconName={el.iconName}
          title={el.title}
          paragraph={el.paragraph}
          backdropColor={el.backdropColor}
          href={el.href}
          showOnFront={el.showOnFront}
        />
      ))}
    </div>
  );
};
