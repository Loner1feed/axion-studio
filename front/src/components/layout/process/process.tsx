"use client";

import { ProcessTypes } from "@/src/utils/types";
import React from "react";
import { Container } from "../container/contaner";
import { Heading } from "../../common";
import styles from "./process.module.scss";
import { ProcessMain } from "./common/process-main";
import { useTranslations } from "@/src/utils/hooks";

interface ProcessProps {
  data?: ProcessTypes[];
}

export const Process: React.FC<ProcessProps> = ({ data = [] }) => {
  const t = useTranslations();

  return data.length ? (
    <div className={styles.process}>
      <Container>
        <Heading className={styles.heading}>{t.process.heading}</Heading>
        <ProcessMain data={data} />
      </Container>
    </div>
  ) : null;
};
