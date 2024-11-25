import { AuthForm } from "./common/_form";
import { AuthBackground } from "@components/ui/auth-background/auth-background";

export const AuthLogin = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthBackground />
      <div
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <AuthForm />
      </div>
    </div>
  );
};
