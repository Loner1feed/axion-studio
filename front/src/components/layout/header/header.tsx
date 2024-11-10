import React from "react";

import { Logo, Phone } from "@/src/components/icons";
import styles from "./header.module.scss";
import { LangSwitcher } from "@/src/components/common/lang-switcher/lang-switcher";
import { Button } from "@/src/components/common/button/button";
import { useTranslations } from "@/src/utils/hooks";
import { Container } from "../container/contaner";

interface HeaderProps {
  showBtn?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showBtn = false }) => {
  const t = useTranslations();

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Logo />
        <div className={styles.right}>
          <Button
            label={t.actions.book}
            icon={<Phone />}
            className={
              showBtn ? `${styles.button} ${styles.showBtn}` : styles.button
            }
          />
          <LangSwitcher />
        </div>
      </Container>
    </header>
  );
};
