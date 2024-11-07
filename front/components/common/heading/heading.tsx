import React from "react";

import styles from "./heading.module.scss";

interface HeadingProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
  children?: React.ReactNode | string;
}

export const Heading: React.FC<HeadingProps> = ({
  tag = "h2",
  className,
  children,
}) => {
  const Tag = tag;

  return <Tag className={`${styles.heading} ${className}`}>{children}</Tag>;
};
