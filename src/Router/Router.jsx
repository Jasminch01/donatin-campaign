import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Donation from "../Donation/Donation";

const Router = createBrowserRouter([
    {
        path : '/',
        element: <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/donation',
                element : <Donation></Donation>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            }
        ]
    }
])

export default Router;
