import translations from "../translations";
import { useLang } from "./use-lang";

export const useTranslations = () => {
  const lang = useLang();

  const defaultTranslation = translations["en"];

  const currentTranslation =
    lang && translations.hasOwnProperty(lang)
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        translations[lang]
      : defaultTranslation;

  return currentTranslation;
};
