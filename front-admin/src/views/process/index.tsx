import { ProcessCreate } from "./create";
import { ProcessEdit } from "./edit";
import { ProcessList } from "./list";

export const processRoute = {
  path: "process",
  children: [
    {
      index: true,
      element: <ProcessList />,
    },
    {
      path: "create",
      element: <ProcessCreate />,
    },

    {
      path: "edit/:itemId",
      element: <ProcessEdit />,
    },
  ],
};
