import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import { navigationConfig } from "@configs/index";

export const MenuContent: React.FC = () => {
  let location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Menu
      mode="inline"
      theme="dark"
      style={{ height: "100%" }}
      selectedKeys={[current]}
      // defaultSelectedKeys={[String(routeInfo?.key)]}
      // defaultOpenKeys={setDefaultOpen(String(routeInfo?.key))}
      //@ts-ignore
      items={navigationConfig}
    />
  );
};
