import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./errorPage";
import PrivateRoute from "./privateRoute";
import { Suspense, lazy } from "react";


const Login = lazy(() => import("../views/login"))
const Home = lazy(() => import("../layout/PageLayout"))
const Web3 = lazy(() => import("../views/Web3"))
const MyWorks = lazy(() => import("../views/myworks"))

const routes = createBrowserRouter([
    {
        path: "/",
        element:
            <Suspense fallback={<div>Lazy loading...</div>}>
                <PrivateRoute />
            </Suspense>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <App /> },
            {
                path: "home", element: <Home />, children: [
                    { path: "my-works", element: <MyWorks /> },
                    { path: "web3", element: <Web3 /> }]
            },
        ]
    },
    { path: "login", element: <Login /> },
])

export default routes;