import { lazy } from "react";

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

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
    {
      path: "calendar",
      element: <Calendar />,
    },
    {
      path: "clients",
      element: <Clients />,
    },
    {
      path: "/add/clients",
      element: <AddClient />,
    },
    {
      path: "/add/folders",
      element: <AddFolder />,
    },
    {
      path: "/add/organization",
      element: <AddOrganization />,
    },
    {
      path: "organization",
      element: <Organization />,
    },
    {
      path: "folders",
      element: <Folders />,
    },
    {
      path: "task",
      element: <Task />,
    },
    {
      path: "mail",
      element: <Mail />,
    },
    {
      path: "shadow",
      element: <Shadow />,
    },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "icons/ant",
      element: <AntIcons />,
    },
  ],
};

export default MainRoutes;
