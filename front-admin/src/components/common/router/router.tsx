import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import authRoute from "../../../views/auth";
import { IndexLayout } from "../../../layouts/indexLayout";

export const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        {
          path: "main",
          element: <></>,

          children: [],
        },

        authRoute,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
