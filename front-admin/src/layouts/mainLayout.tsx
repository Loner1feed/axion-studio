import { Layout } from "antd";
import React from "react";
import { Location } from "react-router";
import { Outlet } from "react-router-dom";
import { SideNav } from "../components/layout/side-nav";

const { Content } = Layout;

interface MainLayoutProps {
  navCollapsed?: boolean;
  location?: Location;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ navCollapsed }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideNav />

      <Layout>
        <div>
          {/* <PageHeader
            display={currentRouteInfo?.breadcrumb}
            title={currentRouteInfo?.label}
          /> */}
          <Content style={{ padding: "10px" }}>
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};
