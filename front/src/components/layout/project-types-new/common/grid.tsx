"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectTypeTypes } from "@/src/utils/types";
import { ProjectTypeOpen } from "./project-type-open";
import { ProjectType } from "./project-type";

import styles from "../project-types-new.module.scss";

interface ProjectTypesGridProps {
  data?: ProjectTypeTypes[];
}

export const ProjectTypesGrid: React.FC<ProjectTypesGridProps> = ({ data }) => {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [index]);

  return (
    <>
      <AnimatePresence>
        {index !== null && (
          <ProjectTypeOpen
            data={typeof index === "number" && data ? data[index] : null}
            setOpen={setIndex}
            index={index}
          />
        )}
      </AnimatePresence>
      <div className={styles.grid}>
        {data
          ?.filter((el) => el.showOnFront)
          .sort((a, b) => a.order - b.order)
          .map((el, i) => (
            <ProjectType
              key={`project-type-${i}`}
              open={typeof index === "number" && index === i}
              setOpen={setIndex}
              index={i}
              background={el.background}
              icon={el.icon}
              subtitle={el.subtitle}
              title={el.title}
            />
          ))}
      </div>
    </>
  );
};
