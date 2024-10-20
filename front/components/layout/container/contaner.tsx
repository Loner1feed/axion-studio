import React from "react";

import styles from "./container.module.scss";

interface ContainerProps {
  children?: React.ReactNode;
  pt?: string;
  pb?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  pt = "0px",
  pb = "0px",
}) => {
  return (
    <div
      style={{ paddingTop: pt, paddingBottom: pb }}
      className={styles.container}
    >
      {children}
    </div>
  );
};
