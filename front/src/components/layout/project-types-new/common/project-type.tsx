"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        style={{
          background:
            background ||
            "linear-gradient(90deg, rgba(139,95,191,1) 0%, rgba(28,26,66,1) 100%)",
        }}
        layoutId={`project-type-${index}`}
        onClick={() => !open && setOpen(index)}
      >
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
          <Image src={icon} alt={title} width={1} height={1} />
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
