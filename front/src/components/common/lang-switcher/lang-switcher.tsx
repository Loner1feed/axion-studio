import { languages } from "@/src/utils/const";
import { useChangeLang } from "@/src/utils/hooks/use-change-lang";
import React from "react";

import styles from "./lang-switcher.module.scss";
import { useLang } from "@/src/utils/hooks/use-lang";

export const LangSwitcher = () => {
  const switcher = useChangeLang();
  const lang = useLang();

  const defineClassNames = (el: string, lang: string) => {
    return lang === el ? `${styles.item} ${styles.active}` : styles.item;
  };

  return (
    <div className={styles.switcher}>
      {languages.map((el, i) => (
        <React.Fragment key={`lang-item-${i}`}>
          <span
            className={defineClassNames(el, lang)}
            onClick={() => switcher(el)}
          >
            {el}
          </span>
          <span className={styles.divider}></span>
        </React.Fragment>
      ))}
    </div>
  );
};
