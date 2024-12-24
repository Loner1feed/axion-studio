"use client";

import { RefObject, useEffect, useState } from "react";

interface MousePos {
  x: null | number;
  y: null | number;
}

export const useMousePosition = (ref: RefObject<HTMLDivElement>) => {
  const [mousePos, setMousePos] = useState<MousePos>({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (ref.current) {
        const bounds = ref.current.parentElement?.getBoundingClientRect();
        if (bounds) {
          const x = ev.clientX - bounds.left;
          const y = ev.clientY - bounds.top;
          setMousePos({ x, y });
        }
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mousePos;
};
