"use client";

import React from "react";

import styles from "../contact.module.scss";
import { SocialLink, SocialLinkTypes } from "@/src/components/common";

interface SocialGridProps {
  data?: SocialLinkTypes[];
}

export const SocialGrid: React.FC<SocialGridProps> = ({ data }) => {
  return (
    <div className={styles.socials}>
      {data?.map((el, i) => (
        <SocialLink
          backdropColor={el.backdropColor}
          href={el.href}
          iconName={el.iconName}
          label={el.label}
          key={`social-${i}`}
        />
      ))}
    </div>
  );
};
