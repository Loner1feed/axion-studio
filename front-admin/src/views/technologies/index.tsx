import { TechnologiesCreate } from "./create";
import { TechnologiesEdit } from "./edit";
import { TechnologiesList } from "./list";

export const technologiesRoute = {
  path: "technologies",
  children: [
    {
      index: true,
      element: <TechnologiesList />,
    },

    {
      path: "create",
      element: <TechnologiesCreate />,
    },

    {
      path: "edit/:itemId",
      element: <TechnologiesEdit />,
    },
  ],
};
