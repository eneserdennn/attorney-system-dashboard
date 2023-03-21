import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MinimalLayout from "layout/MinimalLayout";
import { Navigate } from "react-router-dom";

// render - login
const AuthLogin = Loadable(lazy(() => import("pages/authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("pages/authentication/Register"))
);

// ==============================|| AUTH ROUTING ||============================== //

const token = localStorage.getItem("token");

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: token ? <Navigate to="/dashboard/default" /> : <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;
