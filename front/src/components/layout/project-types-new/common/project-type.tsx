/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ProjectTypeTypes } from "@/src/utils/types";
import { contentVariants } from "../project-types-new";
import icons from "@/src/components/icons";

import styles from "../project-types-new.module.scss";
import { FadeInOnView } from "@/src/components/common";

interface ProjectTypeProps
  extends Omit<ProjectTypeTypes, "order" | "paragraph"> {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}

export const ProjectType: React.FC<ProjectTypeProps> = ({
  background,
  icon,
  subtitle,
  title,
  open,
  setOpen = () => {},
  index,
}) => {
  return (
    <FadeInOnView>
      <motion.div
        className={styles.projectType}
        layoutId={`project-type-${index}`}
        onClick={() => !open && setOpen(index)}
      >
        {/* BACKDROP */}
        <motion.div
          className={styles.itemBackdrop}
          style={{ background: background }}
        ></motion.div>
        {/* BACKDROP END */}

        {/* GRADIENT BORDER */}
        <motion.div className={styles.gradientBorder} />
        {/* GRADIENT BORDER END */}

        <motion.h3
          layoutId={`project-type-heading-${index}`}
          className={styles.heading}
        >
          {title}
        </motion.h3>
        <motion.div
          className={styles.icon}
          variants={contentVariants}
          initial="visible"
          animate={!open ? "visible" : "hidden"}
        >
          <img src={icon} alt={title} />
        </motion.div>
        <motion.div
          className={styles.bottomRow}
          variants={contentVariants}
          initial="visible"
          animate={!open ? "visible" : "hidden"}
        >
          <span>{subtitle}</span>
          {icons["arrow"]}
        </motion.div>
      </motion.div>
    </FadeInOnView>
  );
};
