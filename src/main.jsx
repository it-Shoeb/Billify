import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Billing from "./pages/billing/Billing.jsx";
import BillCreate from "./pages/billcreate/BillCreate.jsx";
import Client from "./pages/client/Client.jsx";
import Product from "./pages/product/Product.jsx";

import CreateClient from "./pages/createClient/CreateClient.jsx";
import CreateProduct from "./pages/createProduct/CreateProduct.jsx";

import ErrorPage from "./pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/billing",
    element: <Billing />,
  },
  {
    path: "/billing/create",
    element: <BillCreate />,
  },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/client/create",
    element: <CreateClient />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/create",
    element: <CreateProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
