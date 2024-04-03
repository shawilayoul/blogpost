import { createBrowserRouter } from "react-router-dom";
import AppLayOut from "../components/AppLayOut";
import HomePage from "../pages/HomePage";
import Post from "../pages/Post";
import EditPost from "../pages/EditPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/",
    element: <AppLayOut />,
    children: [
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/post/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);
