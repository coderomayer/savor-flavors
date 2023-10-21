import { Carousel } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({product}) => {
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
            <Carousel>

                <div className="h-screen relative">

                    <div className="absolute inset-0" style={backgroundImageStyle}></div>
                    <div class="absolute inset-0 bg-slate-800 opacity-90"></div>


                    <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                        <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">{product.name}</h2>
                        <h2 className="text-xl mt-4">Brand: {product.brand}</h2>
                        <h2 className="text-xl mt-4">Type: {product.type}</h2>
                        <h2 className="text-xl mt-4">Price: ${product.price}</h2>
                        <h2 className="text-xl mt-4">Rating: {product.rating}</h2>
                        <p className="my-4">{product.description}</p>

                        <div className="flex gap-4">

                        <Link to={`product-detail/${product._id}`}><button className="bg-white text-black px-4 py-2 rounded">Details</button></Link>

                        <button className="bg-white text-black px-4 py-2 rounded">Update</button>
                        </div>
                    </div>
                </div>
                <div className="h-screen relative">

                    <div className="absolute inset-0" style={backgroundImageStyle}></div>
                    <div class="absolute inset-0 bg-slate-800 opacity-90"></div>


                    <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                        <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">{product.name}</h2>
                        <h2 className="text-xl mt-4">Brand: {product.brand}</h2>
                        <h2 className="text-xl mt-4">Type: {product.type}</h2>
                        <h2 className="text-xl mt-4">Price: ${product.price}</h2>
                        <h2 className="text-xl mt-4">Rating: {product.rating}</h2>
                        <p className="my-4">{product.description}</p>

                        <div className="flex gap-4">
                        <button className="bg-white text-black px-4 py-2 rounded">Details</button>
                        <button className="bg-white text-black px-4 py-2 rounded">Update</button>
                        </div>
                    </div>
                </div>
                <div className="h-screen relative">

                    <div className="absolute inset-0" style={backgroundImageStyle}></div>
                    <div class="absolute inset-0 bg-slate-800 opacity-90"></div>


                    <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                        <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">{product.name}</h2>
                        <h2 className="text-xl mt-4">Brand: {product.brand}</h2>
                        <h2 className="text-xl mt-4">Type: {product.type}</h2>
                        <h2 className="text-xl mt-4">Price: ${product.price}</h2>
                        <h2 className="text-xl mt-4">Rating: {product.rating}</h2>
                        <p className="my-4">{product.description}</p>

                        <div className="flex gap-4">
                        <button className="bg-white text-black px-4 py-2 rounded">Details</button>
                        <button className="bg-white text-black px-4 py-2 rounded">Update</button>
                        </div>
                    </div>
                </div>

              

            </Carousel>

            
        </div>
    )
}

export default Slider;