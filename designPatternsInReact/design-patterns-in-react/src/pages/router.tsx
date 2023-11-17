import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SingletonPage from "@/pages/singleton.page";
import ObserverPage from "./observer.page";
import FactoryPage from "./factory.page";
import ContainerPage from "./container.page";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
