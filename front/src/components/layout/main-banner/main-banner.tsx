"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useVisibility } from "@/src/utils/hooks";
import { Button, Heading } from "@/src/components/common";
import { Phone } from "@/src/components/icons";
import { MainBannerGradient } from "./common/gradient";
import { TypeWriter } from "./common/typewriter";
import { Container } from "../container/contaner";
import { Header } from "../header/header";

import styles from "./main-banner.module.scss";

export const MainBanner: React.FC = () => {
  const t = useTranslations();

  const { ref, isVisible } = useVisibility(
    {
      // At least 50% of the element must be visible
      threshold: 0.2,
    },
    // An element is initially visible
    true
  );

  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.mainBanner} ref={ref}>
      <Header showBtn={!isVisible} />
      <MainBannerGradient hovered={hovered} />
      <Container className={styles.container}>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1 }}
        >
          <Heading tag="h1" className={styles.heading}>
            {t.mainBanner.heading.main}
            <br />
            {t.mainBanner.heading.nextLine}
            <TypeWriter />
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.75, delay: 0 }}
        >
          <span className={styles.subHeading}>{t.mainBanner.subHeading}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.75, delay: 0 }}
          className={styles.buttonBlock}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Button
            label={t.actions.book}
            icon={<Phone />}
            className={styles.button}
          />
        </motion.div>
        <i className={styles.subButton}>{t.mainBanner.subButton}</i>
      </Container>
    </div>
  );
};
