"use client";

import { ProjectType } from "@/src/utils/types";
import styles from "../project-types.module.scss";
import { useState } from "react";
import { CursorBackdrop } from "./cursor-backdrop";
import icons from "@/src/components/icons";

interface ProjectProps extends ProjectType {
  reversed?: boolean;
}

export const Project: React.FC<ProjectProps> = ({
  paragraph,
  title,
  iconName,
  showOnFront,
  reversed = false,
}) => {
  const [hovered, setHovered] = useState(false);

  return showOnFront ? (
    <div
      className={
        !reversed
          ? styles.project
          : `${styles.project} ${styles.projectReversed}`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* card backdrop */}
      <div className={styles.backdrop}></div>

      {/* icon */}
      <div className={styles.icon}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {icons[iconName || "default"]}
      </div>

      <div className={styles.content}>
        {/* cursor backdrop */}
        <CursorBackdrop active={hovered} />

        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  ) : null;
};
