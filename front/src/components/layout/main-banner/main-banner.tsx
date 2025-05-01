"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useVisibility } from "@/src/utils/hooks";
import { Button, Heading } from "@/src/components/common";
// import { Phone } from "@/src/components/icons";
import { MainBannerGradient } from "./common/gradient";
// import { TypeWriter } from "./common/typewriter";
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
            We create powerful <span className={styles.highlight}>MVP</span>
            &apos;s <br />
            within guaranteed deadlines
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.75, delay: 0 }}
        >
          <span className={styles.subHeading}>
            A structured development process, clear milestones <br /> and
            on-time delivery{" "}
            <span className={styles.highlight}>for your bright ideas 💡</span>.
          </span>
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
            label={"Contact Us"}
            className={styles.button}
            onClick={() => {
              const contactBlock = document.getElementById("contact");
              if (contactBlock?.parentElement) {
                window.scrollTo({
                  top: contactBlock.parentElement.offsetTop - 50,
                  behavior: "smooth",
                });
              }
            }}
          />
        </motion.div>
        <i className={styles.subButton}>{t.mainBanner.subButton}</i>
      </Container>
    </div>
  );
};
