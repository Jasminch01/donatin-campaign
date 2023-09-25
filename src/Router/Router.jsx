import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Donation from "../Donation/Donation";
import Donate from "../Donate/Donate";

const Router = createBrowserRouter([
    {
        path : '/',
        element: <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('/data.json')
            },
            {
                path : '/donation',
                element : <Donation></Donation>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path : '/donate/:id',
                element : <Donate></Donate>,
                loader : ()=>fetch('/data.json')
            }
        ]
    }
])

export default Router;
