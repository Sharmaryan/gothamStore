import { useTitle } from "hooks/useTitle";
import React from "react";
import { Login } from "../../components/Login/Login";
import "./LoginPage.css";
export const LoginPage = () => {
  useTitle("Login | Gotham Store");
  return (
    <div className="login-page">
      <Login />
    </div>
  );
};
