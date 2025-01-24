import React from "react";
import { motion } from "framer-motion";

import styles from "../form.module.scss";
import { CheckIcon } from "@/src/components/icons";
import { formContentVariants } from "../form";
import { useTranslations } from "@/src/utils/hooks";

export const EndScreen = ({ visible = false }: { visible: boolean }) => {

  const t = useTranslations();

  return (
    <motion.div
      className={styles.endScreen}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variants={formContentVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <CheckIcon />
      <h3>{t.form.endScreen.title}</h3>
      <span>{t.form.endScreen.subheading}</span>
    </motion.div>
  );
};
