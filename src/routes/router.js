import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Quiz from "../pages/Quiz";
import Statistics from "../pages/Statistics";


const url = 'https://openapi.programming-hero.com/api/quiz';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Main/>,
        children: [
            {
                path: '/',
                loader: () => fetch(url),
                element: <Home/>
            },
            {
                path: '/topics',
                loader: () => fetch(url),
                element: <Home/>
            },
            {
                path: '/topics/:topicId',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
                element: <Quiz/>
            },
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: 'statistics',
                element: <Statistics/>
            },
            
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])