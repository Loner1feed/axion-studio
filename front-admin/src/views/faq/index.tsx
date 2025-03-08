import { FaqCreate } from "./create";
import { FaqEdit } from "./edit";
import { FaqList } from "./list";

export const faqRoute = {
  path: "faq",
  children: [
    {
      index: true,
      element: <FaqList />,
    },

    {
      path: "create",
      element: <FaqCreate />,
    },

    {
      path: "edit/:itemId",
      element: <FaqEdit />,
    },
  ],
};
