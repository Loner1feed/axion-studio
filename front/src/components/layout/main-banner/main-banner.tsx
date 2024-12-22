"use client";

import React, { useContext, useState } from "react";

import { motion } from "framer-motion";

import { Container } from "../container/contaner";
import { Header } from "../header/header";
import { Button, Heading } from "@/src/components/common";
import { Phone } from "@/src/components/icons";

import { useTranslations } from "@/src/utils/hooks";
import styles from "./main-banner.module.scss";
import { MainBannerGradient } from "./common/gradient";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

import "./typewrite.scss";
import { MainPageContext } from "@/src/app/[[...language]]/page.context";

export const MainBanner: React.FC = () => {
  const t = useTranslations();
  const { isHideHeader } = useContext(MainPageContext);

  const [background, setBackground] = useState("black");
  const [hovered, setHovered] = useState(false);

  const getRandomColor = (index: number) => {
    setBackground(() => ["#F8A23E", "#2E8B57", "#8B5FBF"][index]);
  };

  const typewriterComponentOnInit = (typewriter: TypewriterClass) => {
    t.mainBanner.heading.dynamic.forEach((animation: string, index: number) => {
      typewriter
        .callFunction(() => getRandomColor(index))
        .typeString(animation)
        .pauseFor(1000)
        .deleteAll();
    });

    typewriter.start();
  };

  return (
    <div className={styles.mainBanner}>
      <Header showBtn={!isHideHeader} />
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

            <span style={{ background, borderRadius: 30 }}>
              <TypewriterComponent
                onInit={typewriterComponentOnInit}
                options={{ autoStart: true, loop: true }}
              />
            </span>
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
