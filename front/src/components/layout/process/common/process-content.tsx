"use client";

import styles from "../process.module.scss";
import { CustomScroll } from "react-custom-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { ProcessTypes } from "@/src/utils/types";
import { FadeInOnView } from "@/src/components/common";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ProcessContentProps
  extends Pick<ProcessTypes, "title" | "paragraph"> {}

const contentVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const ProcessContent: React.FC<ProcessContentProps> = ({
  title,
  paragraph,
}) => {
  return (
    <FadeInOnView>
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.h3
            key={title}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.div
            key={paragraph}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <CustomScroll>
              <p>{paragraph}</p>
            </CustomScroll>
          </motion.div>
        </AnimatePresence>
      </div>
    </FadeInOnView>
  );
};
