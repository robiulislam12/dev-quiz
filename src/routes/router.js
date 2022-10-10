import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Statistics from "../pages/Statistics";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Main/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },
            
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])