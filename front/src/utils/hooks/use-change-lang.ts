import { usePathname, useRouter } from "next/navigation";
import { languages } from "../const";

// This hook changes the language
export const useChangeLang = () => {
  const pathname = usePathname();
  const router = useRouter();

  const splitUrl = pathname.split("/");

  const changer = (lang: string) => {
    if (lang && languages.includes(lang) && splitUrl[1] !== lang) {
      splitUrl[1] = lang;
      router.replace(splitUrl.join("/"));
      console.log("language changed!!!", splitUrl.join(""));
    }
  };

  return changer;
};
