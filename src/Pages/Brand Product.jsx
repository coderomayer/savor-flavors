import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { Carousel } from "flowbite-react";

const BrandProduct = () => {

    const brandPro = useLoaderData();
    const { name } = useParams()

    const myProduct = brandPro.filter(product => product.brand == name)
    console.log(myProduct);

    // const {description, image, rating, price, type, brand, } = myProduct;


    return (

        <div>


            <div className=" bg-slate-100 p-8 sm:p-18 grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {
                    myProduct.map(product => <Slider key={product._id} product={product}></Slider>)


                }

            </div>
        </div>
    )
}

export default BrandProduct;