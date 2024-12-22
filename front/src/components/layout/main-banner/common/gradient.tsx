import React from "react";

import { motion } from "framer-motion";

import styles from "../main-banner.module.scss";

export const MainBannerGradient = ({
  hovered = false,
}: {
  hovered: boolean;
}) => {
  return (
    <motion.div
      className={styles.gradient}
      initial={{ backgroundPosition: "center -700px" }}
      animate={{
        backgroundPosition: hovered ? "center -500px" : "center -300px",
      }}
      transition={{ duration: 0.75 }}
    />
  );
};
