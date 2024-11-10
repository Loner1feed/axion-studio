"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

import { Container } from "../container/contaner";
import { Header } from "../header/header";
import { Button, Heading } from "@/src/components/common";
import { Phone } from "@/src/components/icons";

import { useTranslations } from "@/src/utils/hooks";

import styles from "./main-banner.module.scss";
import { MainBannerGradient } from "./common/gradient";

export const MainBanner: React.FC = () => {
  const t = useTranslations();

  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.mainBanner}>
      <Header showBtn />
      <MainBannerGradient hovered={hovered} />
      <Container className={styles.container}>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1 }}
        >
          <Heading tag="h1" className={styles.heading}>
            {t.mainBanner.heading.pre}
            <span className={styles.accent}>{t.mainBanner.heading.accent}</span>
            <br />
            {t.mainBanner.heading.post}
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <span className={styles.subHeading}>
            {t.mainBanner.subHeading.pre}
            <span className={styles.accent}>
              {t.mainBanner.subHeading.accent}
            </span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.buttonBlock}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Button
            label={t.actions.book}
            icon={<Phone />}
            className={styles.button}
          />
          <i>{t.mainBanner.subButton}</i>
        </motion.div>
      </Container>
    </div>
  );
};
