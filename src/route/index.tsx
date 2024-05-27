
import React from "react";
import { lazy } from "react";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/welcome"></Navigate>,
  },
  {
    path: "/welcome",
    element: React.createElement(lazy(() => import("@/pages/Welcome"))),
  },
  {
    path: "/count",
    element: React.createElement(lazy(() => import("@/pages/Count"))),
  },
];
const router = createBrowserRouter(routes);
export default router;
export { routes };
