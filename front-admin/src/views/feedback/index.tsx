import { FeedbackEdit } from "./edit";
import { FeedbackList } from "./list";

export const feedbackRoute = {
  path: "feedback",
  children: [
    {
      index: true,
      element: <FeedbackList />,
    },

    {
      path: "edit/:itemId",
      element: <FeedbackEdit />,
    },
  ],
};
