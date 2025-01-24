"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../process.module.scss";
import icons from "@/src/components/icons";
import { ProcessTypes } from "@/src/utils/types";

interface ProcessHeadingProps
  extends Omit<Omit<ProcessTypes, "showOnFront">, "paragraph"> {
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  delayValue: number;
}

export const ProcessHeading: React.FC<ProcessHeadingProps> = ({
  number = "01",
  title = "Heading",
  active = false,
  onClick = () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delayValue,
}) => {
  const [animEnd, setAnimEnd] = useState(false);

  return (
    <motion.div
      className={
        active && animEnd
          ? `${styles.processHeading} ${styles.active}`
          : styles.processHeading
      }
      onClick={onClick}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onAnimationComplete={() => setAnimEnd(true)}
    >
      <div className={styles.headingBackdrop}></div>
      <div className={styles.headingContent}>
        <div className={styles.number}>{number}</div>
        <h3>{title}</h3>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <div className={styles.arrow}>{icons["chevron"]}</div>
      </div>
    </motion.div>
  );
};
