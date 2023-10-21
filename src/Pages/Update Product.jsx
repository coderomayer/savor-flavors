import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {

    const newProduct = useLoaderData()
    const [AddProduct, setAddProduct] = useState()
   

    console.log('my new', newProduct);
    const {_id, name, brand, type, price, rating, image, description} = newProduct

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const updatedProduct = {name, brand, type, price, rating, image, description}
        console.log(updatedProduct);

        setAddProduct('')

        // Send Data to server

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

      

    }

    return (

        <div className="bg-stone-500 p-8 sm:p-24">

        <form onSubmit={handleAddProduct} className="bg-slate-400 p-8 sm:p-24 md:w-1/2 mx-auto rounded flex flex-col gap-4 items-center justify-center">

            <input type="text" name="name" placeholder="Product Name" defaultValue={name} className=" px-6 py-2 rounded w-full " />
            <input type="text" name="brand" placeholder="Brand Name" defaultValue={brand} className=" px-6 py-2 rounded w-full " />
            <input type="text" name="type" placeholder="Product Type" className=" px-6 py-2 rounded w-full " />
            <input type="text" name="price" placeholder="Price" className=" px-6 py-2 rounded w-full " />
           
            <input type="text" name="rating" placeholder="Rating" className=" px-6 py-2 rounded w-full " />
            <input type="text" name="image" placeholder="IMG URL" className=" px-6 py-2 rounded w-full " />
            <input type="message" name="description" placeholder="Description" className=" px-6 py-2 rounded w-full " />

            <button className="bg-black w-full rounded text-white p-2">Add Product</button>

            <div className=" w-full">
                {
                    AddProduct && <h2 className="bg-lime-700 p-4 rounded text-white  ">{AddProduct}</h2>
                }
            </div>

        </form>
    </div>
    )
}

export default UpdateProduct;