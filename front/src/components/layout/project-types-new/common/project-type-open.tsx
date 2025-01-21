"use client";

import { motion } from "framer-motion";
import { MouseEventHandler, useEffect } from "react";
import { contentVariants } from "../project-types-new";
import styles from "../project-types-new.module.scss";
import { Button } from "@/src/components/common";
import { useTranslations } from "@/src/utils/hooks";

interface ProjectTypeOpenProps {
  data: {
    paragraph: string;
    title: string;
    background: string;
  } | null;
  index: number;
  setOpen: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ProjectTypeOpen: React.FC<ProjectTypeOpenProps> = ({
  data = null,
  index = null,
  setOpen,
}) => {
  const t = useTranslations();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeHandler: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(null);
    }
  };

  return data ? (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ pointerEvents: "auto" }}
        className={styles.overlay}
        transition={{ duration: 0.2, delay: 0.1 }}
      ></motion.div>

      <div className={styles.openContainer} onClick={closeHandler}>
        <motion.div
          className={`${styles.projectTypeOpen} ${styles.projectType}`}
          style={{
            background:
              data?.background ||
              "linear-gradient(90deg, rgba(139,95,191,1) 0%, rgba(28,26,66,1) 100%)",
          }}
          layoutId={`project-type-${index}`}
        >
          <motion.h3
            layoutId={`project-type-heading-${index}`}
            className={styles.heading}
          >
            {data?.title}
          </motion.h3>
          <motion.div
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: data?.paragraph || "" }}
            variants={contentVariants}
            initial="hidden"
            animate={"visible"}
            exit="hidden"
          />
          <motion.div
            className={styles.buttonRow}
            variants={contentVariants}
            initial="hidden"
            exit="hidden"
            animate={"visible"}
          >
            <Button
              onClick={() => setOpen(null)}
              label={t.projectTypes.actions.close}
              className={styles.button}
            />
            <Button
              className={styles.button}
              label={t.projectTypes.actions.contact}
            />
            {/* <button >close</button>
            <button>contact us</button> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  ) : null;
};
