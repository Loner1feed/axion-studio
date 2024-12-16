import {
  CodeOutlined,
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

      {
        key: `${APP_PREFIX_PATH}/technologies`,
        path: `${APP_PREFIX_PATH}/technologies`,
        icon: <CodeOutlined />,
        // call function to generate react-router link
        get label() {
          return generateLabel(this.path, "Technologies we use");
        },
        breadcrumb: false,
      },

      {
        key: `${APP_PREFIX_PATH}/socials`,
        path: `${APP_PREFIX_PATH}/socials`,
        icon: <CodeOutlined />,
        // call function to generate react-router link
        get label() {
          return generateLabel(this.path, "Our socials");
        },
        breadcrumb: false,
      },

      {
        key: `${APP_PREFIX_PATH}/process`,
        path: `${APP_PREFIX_PATH}/process`,
        icon: <CodeOutlined />,
        // call function to generate react-router link
        get label() {
          return generateLabel(this.path, "How the process goes");
        },
        breadcrumb: false,
      },
    ],
  },
];

export const navigationConfig = [...contentNavTree];
