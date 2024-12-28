"use client";

import React from "react";
import {
  FadeInOnView,
  Form,
  Heading,
  SocialLinkTypes,
} from "@/src/components/common";
import { Container } from "../container/contaner";
import { SocialGrid } from "./common/social-grid";
import { Handwriting } from "./common/handwriting";

import styles from "./contact.module.scss";
import { useTranslations } from "@/src/utils/hooks";

interface ContactProps {
  data: SocialLinkTypes[];
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const t = useTranslations();

  return (
    <FadeInOnView>
      <div className={styles.contact}>
        <Container>
          <div className={styles.titleGrp}>
            <Heading className={styles.title}>{t.contact.title}</Heading>
            <p className={styles.subtitle}>
              {t.contact.subtitle.pre} <br />{" "}
              <span>{t.contact.subtitle.accent}</span>
            </p>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <h3>{t.contact.socialsHeading}</h3>
              <SocialGrid data={data} />
              <h3>{t.contact.formHeading}</h3>
              <Form />
            </div>

            <div className={styles.right}>
              <Handwriting />
            </div>
          </div>
        </Container>
      </div>
    </FadeInOnView>
  );
};
