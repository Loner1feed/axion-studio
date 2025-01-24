"use client";

import { TechnologyTypes } from "@/src/utils/types";
import icons from "../../../icons";
import styles from "../technologies.module.scss";

export const Technology: React.FC<TechnologyTypes> = ({
  iconName,
  title,
  paragraph,
  backdropColor = "#000000",
  href = "https://google.com",
  showOnFront,
}) => {
  return showOnFront ? (
    <a href={href} target="_blank" className={styles.technology}>
      <div
        className={styles.backdrop}
        style={{ background: backdropColor }}
      ></div>
      <div className={styles.icon}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {icons[iconName]}
      </div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </a>
  ) : null;
};
