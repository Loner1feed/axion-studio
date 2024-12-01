import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IndexLayout, MainLayout } from "@layouts/index";
import { projectTypesRoute } from "@views/project-types";
import { technologiesRoute } from "@views/technologies";
import authRoute from "@views/auth/index";

export const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        {
          path: "main",
          element: <MainLayout />,

          children: [projectTypesRoute, technologiesRoute],
        },

        authRoute,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
