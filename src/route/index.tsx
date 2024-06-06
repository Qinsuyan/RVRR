
import Loading from "@/components/Loading";
import React, { LazyExoticComponent, Suspense } from "react";
import { lazy } from "react";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
const componentLoading = (children: LazyExoticComponent<React.FC>) => {
  return (
    <Suspense fallback={<Loading />}>{React.createElement(children)}</Suspense>
  );
};
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/welcome"></Navigate>,
  },
  {
    path: "/welcome",
    element: componentLoading(lazy(() => import("@/pages/Welcome"))),
  },
  {
    path: "/count",
    element: componentLoading(lazy(() => import("@/pages/Count"))),
  },
];
const router = createBrowserRouter(routes);
export default router;
export { routes };
