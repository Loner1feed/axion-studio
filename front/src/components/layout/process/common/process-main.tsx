"use client";

import { ProcessTypes } from "@/src/utils/types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ProcessBackdrop } from "./process-backdrop";
import { ProcessHeading } from "./process-heading";

import styles from "../process.module.scss";
import { ProcessContent } from "./process-content";

interface ProcessMainProps {
  data: ProcessTypes[];
}

export const ProcessMain: React.FC<ProcessMainProps> = ({ data }) => {
  const [activeId, setActiveId] = useState<string | null | undefined>(null);

  const activeItem = activeId ? data.find((el) => el._id === activeId) : null;

  const sortData = (data: ProcessTypes[]) => {
    return data.sort((el1: ProcessTypes, el2: ProcessTypes) => {
      if (Number(el1.number) < Number(el2.number)) return -1;
      else if (Number(el2.number) < Number(el1.number)) return 1;
      return 0;
    });
  };

  // set active element on first load and data collection
  useEffect(() => {
    if (data[0]) {
      setActiveId(data[0]._id);
    }
  }, [data]);

  return (
    <div className={styles.main}>
      <div className={styles.headingGrp}>
        <motion.div
          viewport={{ once: true }}
          whileInView="visible"
          initial="hidden"
          transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
        >
          {sortData(data).map((el: ProcessTypes, i) => (
            <ProcessHeading
              title={el.title}
              number={el.number}
              active={activeId === el._id}
              onClick={() => setActiveId(el._id)}
              key={i}
              delayValue={i}
            />
          ))}
        </motion.div>
        <ProcessBackdrop />
      </div>

      {!!activeItem && (
        <ProcessContent
          title={activeItem.title}
          paragraph={activeItem.paragraph}
        />
      )}
    </div>
  );
};
