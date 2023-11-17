import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SingletonPage from "@/pages/singleton.page";
import ObserverPage from "@/pages/observer.page";
import FactoryPage from "@/pages/factory.page";
import ContainerPage from "@/pages/container.page";
import HigherOrderComponentPage from "@/pages/hoc.page";
import CompoundComponentPage from "@/pages/compound.page";

const router = createBrowserRouter([
  {
    path: "/singleton",
    element: <SingletonPage />,
  },
  {
    path: "/observer",
    element: <ObserverPage />,
  },
  {
    path: "/factory",
    element: <FactoryPage />,
  },
  {
    path: "/container",
    element: <ContainerPage />,
  },
  {
    path: "/hoc",
    element: <HigherOrderComponentPage />,
  },
  {
    path: "/compound",
    element: <CompoundComponentPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
