import React from "react";

import { Logo, Phone } from "@/components/icons";
import styles from "./header.module.scss";
import { LangSwitcher } from "@/components/common/lang-switcher/lang-switcher";
import { Button } from "@/components/common/button/button";
import { useTranslations } from "@/utils/hooks";

export const Header: React.FC = () => {
  const t = useTranslations();

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <Button
          label={t.actions.book}
          icon={<Phone />}
          className={styles.button}
        />
        <LangSwitcher />
      </div>
    </header>
  );
};
