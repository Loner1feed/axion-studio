import { motion } from "framer-motion";

import styles from "../form.module.scss";
import { SvgLines } from "./svg-lines";

export const FormBackdrop: React.FC = () => {
  return (
    <motion.div
      className={styles.backdrop}
      initial={{ left: 0 }}
      whileInView={{ left: -4000 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: [0.23, 0.02, 0, 0.97] }}
    >
      <motion.div
        className={styles.backdropBlur}
        initial={{ backdropFilter: "blur(0px)" }}
        whileInView={{ backdropFilter: "blur(5px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2 }}
      ></motion.div>
      <SvgLines />
    </motion.div>
  );
};
