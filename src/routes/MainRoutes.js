import { lazy } from "react";
import { Navigate } from "react-router-dom";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";
import Organization from "pages/organization/Organization";
import Calendar from "pages/calendar/Calendar";
import Mail from "pages/mails/Mail";
import Task from "pages/task/Task";
import Folders from "pages/folders/Folders";
import AddClient from "pages/client/AddClient";
import AddFolder from "pages/folders/AddFolder";
import AddOrganization from "pages/organization/AddOrganization";
import SingleClient from "pages/client/SingleClient";
import AddForm from "pages/task/AddForm";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - sample page
const SamplePage = Loadable(lazy(() => import("pages/extra-pages/SamplePage")));

// render - clients page
const Clients = Loadable(lazy(() => import("pages/client/Client")));

// render - utilities
const Typography = Loadable(
  lazy(() => import("pages/components-overview/Typography"))
);
const Color = Loadable(lazy(() => import("pages/components-overview/Color")));
const Shadow = Loadable(lazy(() => import("pages/components-overview/Shadow")));
const AntIcons = Loadable(
  lazy(() => import("pages/components-overview/AntIcons"))
);

// check if user has token, otherwise redirect to login
const protectedRoutes = (element) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return element;
};

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: protectedRoutes(<Navigate to="/dashboard/default" />),
    },
    {
      path: "color",
      element: protectedRoutes(<Color />),
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: protectedRoutes(<DashboardDefault />),
        },
      ],
    },
    {
      path: "sample-page",
      element: protectedRoutes(<SamplePage />),
    },
    {
      path: "calendar",
      element: protectedRoutes(<Calendar />),
    },
    {
      path: "clients",
      element: protectedRoutes(<Clients />),
    },
    { path: "clients/:id", element: protectedRoutes(<SingleClient />) },
    {
      path: "/add/clients",
      element: protectedRoutes(<AddClient />),
    },
    {
      path: "/add/task",
      element: protectedRoutes(<AddForm />),
    },
    {
      path: "/add/folders",
      element: protectedRoutes(<AddFolder />),
    },
    {
      path: "/add/organization",
      element: protectedRoutes(<AddOrganization />),
    },
    {
      path: "organization",
      element: protectedRoutes(<Organization />),
    },
    {
      path: "folders",
      element: protectedRoutes(<Folders />),
    },
    {
      path: "task",
      element: protectedRoutes(<Task />),
    },
    {
      path: "mail",
      element: protectedRoutes(<Mail />),
    },
    {
      path: "shadow",
      element: protectedRoutes(<Shadow />),
    },
    {
      path: "typography",
      element: protectedRoutes(<Typography />),
    },
    {
      path: "icons/ant",
      element: protectedRoutes(<AntIcons />),
    },
  ],
};

export default MainRoutes;
