const ProductCard = ({ product }) => {

    return (

        <div className="p-8 sm:p-24 bg-slate-200  ">
            {product ? (

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
                      
                        <button className="bg-white px-4 py-2 my-4 rounded">Dellete</button>
                    </div>


                </div>



            ) : (
                <div>
                    <p>Product not found</p>
                </div>
            )}
        </div>

    )
}

export default ProductCard;