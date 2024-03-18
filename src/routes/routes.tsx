import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./errorPage";
import Login from "../views/Login";
import Home from "../views/Home";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
    {
        path: "/", element: <PrivateRoute />, errorElement: <ErrorPage />, children: [
            { path: "/", element: <App /> },
            { path: "home", element: <Home /> },
        ]
    },
    { path: "login", element: <Login /> },
])

export default routes;