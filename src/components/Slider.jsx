import { Carousel } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ product }) => {
    const [message, setMessage] = useState(null)

    const backgroundImageStyle = {
        backgroundImage: `url(${product.image})`,
        backgroundSize: 'cover',
    };

    if (!product) {
        setMessage('No product data available.');

    }

    const handleProductDetail = () => {

    }

    return (

        <div>
           

            <div className="">

                <div className=" p-8  bg-slate-400 max-w-[350px] rounded">

                    <div className>
                        <img className=" h-56 w-full object-cover rounded" src={product.image} alt="" />
                    </div>

                    <div >

                        <h2 className="text-4xl font-extrabold uppercase py-4  ">{product.name}</h2>
                        <h2 className="text-xl mt-2">Brand: {product.brand}</h2>
                        <h2 className="text-xl mt-2">Type: {product.type}</h2>
                        <h2 className="text-xl mt-2">Price: ${product.price}</h2>
                        <h2 className="text-xl mt-2">Rating: {product.rating}</h2>

                        <Link to={`product-detail/${product._id}`}><button className="bg-white text-black px-4 py-2 my-2 rounded">Details</button></Link>

                        <Link to={`/usdate-product/${product._id}`}><button className="bg-white text-black px-4 py-2 my-2 rounded">Update</button></Link>


                    </div>


                </div>

            </div>


        </div>
    )
}

export default Slider;