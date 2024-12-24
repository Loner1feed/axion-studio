import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../project-types.module.scss";
import { useMousePosition } from "@/src/utils/hooks";

interface CursorBackdropProps {
  active?: boolean;
}

export const CursorBackdrop: React.FC<CursorBackdropProps> = ({
  active = false,
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition(backdropRef);

  return (
    <motion.div
      ref={backdropRef}
      className={styles.cursorBackdrop}
      style={{
        top: `${mousePosition.y || 0}px`,
        left: `${mousePosition.x || 0}px`,
      }}
      animate={{
        opacity: active ? 0.5 : 0,
        visibility: active ? "visible" : "hidden",
        transform: active
          ? "translate(-50%, -50%) scale(1) "
          : " translate(-50%, -50%) scale(0)",
      }}
    />
  );
};
