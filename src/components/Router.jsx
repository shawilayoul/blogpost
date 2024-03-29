import { createBrowserRouter } from "react-router-dom";
import AppLayOut from "./AppLayOut";
import HomePage from "../pages/HomePage";
import BlogePost from "../pages/BlogePost";
import EditBlogPost from "../pages/EditBlogPost";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayOut/>,
        children:[
            {
                index:true,
                element: <HomePage/>
            },
            {
                path:'/post',
                element:<BlogePost/>
            },
            {
                path:'/post/edit/:id',
                element:<EditBlogPost/>
            }
        ]
    }
]

)