import { AdvantagesCreate } from "./create";
import { AdvantagesEdit } from "./edit";
import { AdvantagesList } from "./list";

export const advantagesRoute = {
  path: "advantages",
  children: [
    {
      index: true,
      element: <AdvantagesList />,
    },

    {
      path: "create",
      element: <AdvantagesCreate />,
    },

    {
      path: "edit/:itemId",
      element: <AdvantagesEdit />,
    },
  ],
};
