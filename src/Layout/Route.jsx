import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./Main Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/Add Product";
import MyCard from "../Pages/My Card";
import Login from "../Pages/Login";

const router = createBrowserRouter([

{
    path: '/',
    element: <MainLayout></MainLayout>,

    children: [

        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/brand.json')
            
        },

        {
            path: 'add-product',
            element: <AddProduct></AddProduct>
        },

        {
            path: '/my-card',
            element: <MyCard></MyCard>
        },

        {
            path: 'login',
            element: <Login></Login>
        }

    ]
}


])


export default router;