import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../components/Slider";

const BrandProduct = () => {

    const brandPro = useLoaderData();
    const {name} = useParams()
  
    const myProduct = brandPro.filter(product => product.brand == name )
    console.log(myProduct);

    // const {description, image, rating, price, type, brand, } = myProduct;
    

    return (

        <div>
            

            <div className="mb-4">

                {
                    myProduct.map(product => <Slider key={product._id} product={product}></Slider>)

                   
                }

            

                

            </div>
        </div>
    )
}

export default BrandProduct;