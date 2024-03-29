import { createBrowserRouter } from "react-router-dom";
import AppLayOut from "../components/AppLayOut";
import HomePage from "../pages/HomePage";
import Post from "../pages/Post";
import EditPost from "../pages/EditPost";

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
     
    ],
  },
]);
