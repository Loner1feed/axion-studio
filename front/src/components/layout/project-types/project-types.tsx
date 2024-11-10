import React from "react";

import styles from "./project-types.module.scss";
import { Heading } from "../../common";
import { useTranslations } from "@/src/utils/hooks";
import { Container } from "../container/contaner";

export const ProjectTypes = () => {
  const t = useTranslations();

  return (
    <div className={styles.projectTypes}>
      <Container>
        <Heading className={styles.heading}>{t.projectTypes.heading}</Heading>
      </Container>
    </div>
  );
};
