import React, { useContext } from "react";

import styles from "./project-types.module.scss";
import { Heading } from "../../common";
import { useTranslations } from "@/src/utils/hooks";
import { Container } from "../container/contaner";
import { MainPageContext } from "@/src/app/[[...language]]/page.context";

export const ProjectTypes = () => {
  const t = useTranslations();
  const { revealHeaderOnScrollToElementRef } = useContext(MainPageContext);

  return (
    <div ref={revealHeaderOnScrollToElementRef} className={styles.projectTypes}>
      <Container>
        <Heading className={styles.heading}>{t.projectTypes.heading}</Heading>
      </Container>
    </div>
  );
};
