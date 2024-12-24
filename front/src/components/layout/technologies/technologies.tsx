"use client";

import { FadeInOnView, Heading } from "@/src/components/common";
import { Container } from "../container/contaner";
import { TechnologiesGrid } from "./common/technologies-grid";

import styles from "./technologies.module.scss";
import { TechnologyTypes } from "@/src/utils/types";
import { useTranslations } from "@/src/utils/hooks";

interface TechnologiesProps {
  data?: TechnologyTypes[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ data = [] }) => {
  const t = useTranslations();

  return (
    <FadeInOnView>
      <div className={styles.technologies}>
        <Container>
          <Heading className={styles.heading}>{t.technologies.heading}</Heading>
          <TechnologiesGrid data={data} />
        </Container>
      </div>
    </FadeInOnView>
  );
};
