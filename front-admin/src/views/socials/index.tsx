import { SocialsCreate } from "./create";
import { SocialsEdit } from "./edit";
import { SocialsList } from "./list";

export const socialsRoute = {
  path: "socials",
  children: [
    // socials list
    {
      index: true,
      element: <SocialsList />,
    },
    // socials create
    {
      path: "create",
      element: <SocialsCreate />,
    },
    // socials edit
    {
      path: "edit/:itemId",
      element: <SocialsEdit />,
    },
  ],
};
