import { createContext, RefObject } from "react";

interface MainPageContextProps {
  revealHeaderOnScrollToElementRef: RefObject<HTMLDivElement> | null;
  isHideHeader: boolean;
}

export const MainPageContext = createContext<MainPageContextProps>({
  revealHeaderOnScrollToElementRef: null,
  isHideHeader: true,
});
