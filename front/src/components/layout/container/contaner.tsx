import React from "react";

import styles from "./container.module.scss";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
