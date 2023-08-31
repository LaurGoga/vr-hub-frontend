import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Main from "../layouts/main.layout";
import Homepage from "../pages/home";
import AdminLogin from "../pages/admin/login";
import Dashboard from "../pages/admin/dashboard";
import AddBlog from "../pages/admin/add-blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "/main/vr-corner",
        element: <Homepage />,
      },
      {
        path: "/main/vr-education",
        element: <Homepage />,
      },
      {
        path: "/main/community",
        element: <Homepage />,
      },
      {
        path: "/main/vr-career",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/add-blog",
    element: <AddBlog />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default router;
