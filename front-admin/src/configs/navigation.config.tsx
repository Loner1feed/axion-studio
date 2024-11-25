import {
  CommentOutlined,
  FileImageOutlined,
  PhoneOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "./app.config";
import React from "react";
import { Link } from "react-router-dom";

// generate react-router link
const generateLabel = (path: string | undefined, label: string) => {
  return path ? React.createElement(Link, { to: path, children: label }) : null;
};

const contentNavTree = [
  {
    key: "Main page content",
    label: "Main page content",
    type: "group",
    children: [
      {
        key: `${APP_PREFIX_PATH}/project-types`,
        path: `${APP_PREFIX_PATH}/project-types`,
        icon: <ProductOutlined />,
        // call function to generate react-router link
        get label() {
          return generateLabel(this.path, "Projects we do");
        },
        breadcrumb: false,
      },
    ],
  },
];

export const navigationConfig = [...contentNavTree];
