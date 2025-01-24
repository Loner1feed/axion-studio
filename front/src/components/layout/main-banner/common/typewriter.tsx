import { useTranslations } from "@/src/utils/hooks";
import React, { useState } from "react";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

import "../typewrite.scss";

export const TypeWriter = () => {
  const t = useTranslations();

  const [background, setBackground] = useState("#8B5FBF");

  const getRandomColor = (index: number) => {
    setBackground(() => ["#F8A23E", "#2E8B57", "#8B5FBF"][index]);
  };

  const typewriterComponentOnInit = (typewriter: TypewriterClass) => {
    t.mainBanner.heading.dynamic.forEach((animation: string, index: number) => {
      typewriter
        .typeString(animation)
        .pauseFor(1000)
        .deleteAll()
        .callFunction(() => getRandomColor(index));
    });

    typewriter.start();
  };

  return (
    <span style={{ background, borderRadius: 30, transition: "0.3s" }}>
      <TypewriterComponent
        onInit={typewriterComponentOnInit}
        options={{ autoStart: true, loop: true }}
      />
    </span>
  );
};
