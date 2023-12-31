import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./Main Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/Add Product";
import MyCard from "../Pages/My Card";
import Login from "../Pages/Login";
import BrandCard from "../components/Brand Card";
import BrandProduct from "../Pages/Brand Product";
import ProductDetails from "../Pages/product Details";
import Registraition from "../Pages/Registration";
import UpdateProduct from "../Pages/Update Product";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([

{
    path: '/',
    element: <MainLayout></MainLayout>,

    children: [

        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/brand.json'),
           
            
        },

        {
            path: 'add-product',
            element: <AddProduct></AddProduct>

        },

        {
            path: '/my-card',
            element: <PrivetRout><MyCard></MyCard></PrivetRout>,
            loader: () => fetch('http://localhost:5000/user-product')
        },

        {
            path: '/registration',
            element: <Registraition></Registraition>
        },

        {
            path: 'login',
            element: <Login></Login>
        },

        {
            path: 'brand-data',
            element: <BrandCard></BrandCard>,
            loader: () => fetch('http://localhost:5000/products')
        },

        {
            path: 'brand-product/:name',
            element: <BrandProduct></BrandProduct>,
            loader: () => fetch(`http://localhost:5000/products`)
        },

        {
            path: 'brand-product/:name/product-detail/:id',
            element: <ProductDetails></ProductDetails>,
            loader: () => fetch(`http://localhost:5000/products`)
        },

        {
            path: '/usdate-product/:id',
            element: <UpdateProduct></UpdateProduct>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        }

    ]
}


])


export default router;