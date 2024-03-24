import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Error from "./Pages/Error.jsx";
import Applied, { loader as applliedJobsLoader } from "./Pages/Applied.jsx";
import Blog from "./Pages/Blog.jsx";
import JobDetails, { loader as singleJobLoader } from "./Pages/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/jobes/:jobId",
        loader: singleJobLoader,
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: applliedJobsLoader,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
