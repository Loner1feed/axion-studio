import React from "react";

import styles from "./fancy-display.module.scss";

interface FancyDisplayProps {
  children?: React.ReactNode;
}

export const FancyDisplay: React.FC<FancyDisplayProps> = ({
  children = <></>,
}) => {
  return <div className={styles.display}>{children}</div>;
};
