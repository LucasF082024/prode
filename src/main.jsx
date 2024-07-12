import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { RUTAS } from "./constants/routers.constants.js";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Predictions from "./pages/Predictions/Predictions.jsx"
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([{
    path:"/",
    element:<Layout />,
    children: [
        {
            index:true,
            element: <Home />
        },
        {
            path: RUTAS.LOGIN,
            element: <Login />
        },
        {
            path: RUTAS.REGISTER,
            element: <Register />
        },
        {
            path: RUTAS.PREDICTIONS,
            element: <Predictions />
        }
    ]
}])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>

);
