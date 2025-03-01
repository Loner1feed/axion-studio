import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IndexLayout, MainLayout } from "@layouts/index";
import { projectTypesRoute } from "@views/project-types";
import { technologiesRoute } from "@views/technologies";
import { socialsRoute } from "@views/socials";
import authRoute from "@views/auth/index";
import { processRoute } from "@views/process";
import { advantagesRoute } from "@views/advantages";
import { feedbackRoute } from "@views/feedback";
import { faqRoute } from "@views/faq";

export const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        {
          path: "main",
          element: <MainLayout />,

          children: [
            projectTypesRoute,
            technologiesRoute,
            socialsRoute,
            processRoute,
            advantagesRoute,
            feedbackRoute,
            faqRoute,
          ],
        },

        authRoute,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
