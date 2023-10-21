import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const brandPro = useLoaderData();
    const { id, name } = useParams();

    const myProduct = brandPro.find(product => product._id == id && product.brand == name);

    const handdleAddProduct = () => {

        console.log(myProduct);

        fetch('http://localhost:5000/user-product', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },

            body: JSON.stringify(myProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.insertedId) {
                setAddProduct('Product aded succesfully')
            }
        })

    }

    return (
        <div>
            {myProduct ? (

                <div className="flex p-8 md:p-24 bg-slate-400 items-center justify-center">


                    <div className="w-1/2">
                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">{myProduct.name}</h2>
                    <h2 className="text-xl mt-4">Brand: {myProduct.brand}</h2>
                    <h2 className="text-xl mt-4">Type: {myProduct.type}</h2>
                    <h2 className="text-xl mt-4">Price: ${myProduct.price}</h2>
                    <h2 className="text-xl mt-4">Rating: {myProduct.rating}</h2>
                    <p className="my-4">{myProduct.description}</p>
                    <button onClick={handdleAddProduct} className="bg-white px-4 py-2 rounded">Add Product</button>
                    </div>

                    <div className="w-1/2">
                        <img className="max-h-96 w-full object-cover rounded" src={myProduct.image} alt="" />
                    </div>



                </div>



            ) : (
                <div>
                    <p>Product not found</p>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;
