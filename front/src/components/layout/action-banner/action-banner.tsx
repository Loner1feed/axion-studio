import React from "react";

import styles from "./action-banner.module.scss";
import { ActionBannerBG } from "./common/bg";

interface ActionBannerProps {
  children: React.ReactNode;
  className?: string;
}

export const ActionBanner: React.FC<ActionBannerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <ActionBannerBG />
      <span className={styles.content}>{children}</span>
    </div>
  );
};
