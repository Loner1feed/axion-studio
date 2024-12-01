import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const PageHeader: React.FC = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <Header
      style={{
        padding: 0,
        paddingRight: "20px",
        background: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Button size="middle" icon={<LogoutOutlined />} onClick={logoutHandler}>
        Log Out
      </Button>
    </Header>
  );
};
