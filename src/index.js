import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsCategories from "./components/NewsCategories";
import NewsDetails from "./components/NewsDetails";
import NewsList from "./components/NewsList";
import NotFoundPage from "./components/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsCategories />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/NewsDetails/:title",
    element: <NewsDetails />,
  },

  {
    path: "/NewsList",
    element: <NewsList />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
