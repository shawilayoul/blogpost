import { createBrowserRouter } from "react-router-dom";
import AppLayOut from "./AppLayOut";
import HomePage from "../pages/HomePage";
import Post from "../pages/Post";
import EditPost from "../pages/EditPost";
import DeletePost from "../pages/DeletePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/post/edit/:id",
        element: <EditPost />,
      },
      {
        path: "/post/delete/:id",
        element: <DeletePost />,
      },
    ],
  },
]);
