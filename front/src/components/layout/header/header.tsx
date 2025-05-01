import React from "react";

import { Logo } from "@/src/components/icons";
import styles from "./header.module.scss";
// import { LangSwitcher } from "@/src/components/common/lang-switcher/lang-switcher";
import { Button } from "@/src/components/common/button/button";
import { Container } from "../container/contaner";

interface HeaderProps {
  showBtn?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showBtn = false }) => {
  return (
    <header
      className={
        !showBtn ? styles.header : `${styles.header} ${styles.headerSmall}`
      }
    >
      <Container className={styles.content}>
        <Logo />
        <div className={styles.right}>
          <Button
            label={"Contact Us"}
            className={
              showBtn ? `${styles.button} ${styles.showBtn}` : styles.button
            }
            onClick={() => {
              const contactBlock = document.getElementById("contact");
              if (contactBlock?.parentElement) {
                window.scrollTo({
                  top: contactBlock.parentElement.offsetTop - 50,
                  behavior: "smooth",
                });
              }
            }}
          />
          {/* <LangSwitcher /> */}
        </div>
      </Container>
    </header>
  );
};
