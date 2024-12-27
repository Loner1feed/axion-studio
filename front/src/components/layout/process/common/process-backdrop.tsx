import { motion } from "framer-motion";
import { AxionIcon } from "@/src/components/icons";
import styles from "../process.module.scss";

export const ProcessBackdrop = () => {
  return (
    <div className={styles.backdrop}>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        variants={{
          visible: { transform: "translateY(0)", opacity: 1 },
          hidden: { transform: "translateY(-50px)", opacity: 0 },
        }}
        className={styles.backdropItem}
      >
        <AxionIcon />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        variants={{
          visible: { transform: "translateY(0)", opacity: 1 },
          hidden: { transform: "translateY(50px)", opacity: 0 },
        }}
        className={styles.backdropItem}
      >
        <AxionIcon />
      </motion.div>
    </div>
  );
};
