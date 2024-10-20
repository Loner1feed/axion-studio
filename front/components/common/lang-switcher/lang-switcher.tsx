import { languages } from "@/utils/const";
import { useChangeLang } from "@/utils/hooks/use-change-lang";
import React from "react";

import styles from "./lang-switcher.module.scss";
import { useLang } from "@/utils/hooks/use-lang";

export const LangSwitcher = () => {
  const switcher = useChangeLang();
  const lang = useLang();

  const defineClassNames = (el: string, lang: string) => {
    return lang === el ? `${styles.item} ${styles.active}` : styles.item;
  };

  return (
    <div className={styles.switcher}>
      {languages.map((el, i) => (
        <>
          <span
            key={`lang-item-${i}`}
            className={defineClassNames(el, lang)}
            onClick={() => switcher(el)}
          >
            {el}
          </span>
          <span className={styles.divider}></span>
        </>
      ))}
    </div>
  );
};
