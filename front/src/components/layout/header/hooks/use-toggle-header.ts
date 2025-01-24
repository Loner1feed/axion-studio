import { useRef, useEffect, useState } from "react";

export const useToggleHeader = () => {
  const revealHeaderOnScrollToElementRef = useRef<HTMLDivElement>(null);

  const [isHideHeader, setIsHideHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const revealHeaderOnScrollToElement =
        revealHeaderOnScrollToElementRef.current;

      if (revealHeaderOnScrollToElement) {
        const revealHeaderOnScrollToElementRect =
          revealHeaderOnScrollToElement.getBoundingClientRect();

        setIsHideHeader(
          window.scrollY <= revealHeaderOnScrollToElementRect.top
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { revealHeaderOnScrollToElementRef, isHideHeader };
};
