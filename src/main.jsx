import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screen/Home.jsx";
import GxApp from "./screen/GxApp.jsx";
import Contact from "./screen/Contact.jsx";
import Careers from "./screen/Careers.jsx";
import Dashboard from "./Dashboard.jsx";
import JobCreation from "./components/JobCreation.jsx";
import { Toaster } from "react-hot-toast";
import EditJob from "./components/EditJob.jsx";
import EditJobList from "./components/EditJobList.jsx";
import ResetPassword from "./components/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gxapp",
        element: <GxApp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <JobCreation />,
      },
      {
        path: "edit",
        element: <EditJobList />,
      },
      {
        path: "edit/:jobId",
        element: <EditJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>,
);
