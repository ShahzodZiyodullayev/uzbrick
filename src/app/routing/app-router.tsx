import { type JSX, lazy, type LazyExoticComponent } from "react";
import { createBrowserRouter } from "react-router-dom";

type Component = LazyExoticComponent<() => JSX.Element>;

const BaseLayout = lazy(() => import("@/app/layouts/base-layout"));

const Home: Component = lazy(() => import("@/pages/home"));
const NotFound: Component = lazy(() => import("@/pages/not-found"));
const Phone: Component = lazy(() => import("@/pages/phone"));

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "phone",
      element: <Phone />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
