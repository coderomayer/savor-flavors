const ProductCard = ({ product }) => {

    const handleDelete = () => {
        console.log(product._id);

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                fetch(`http://localhost:5000/user-product/${product._id}`, {
                    method: 'DELETE',
                })
                    .then(res => {
                        if (res.ok) {
                            return res.json();
                        } else {
                            throw new Error('Failed to delete the coffee item');
                        }
                    })
                    .then(data => {
                        console.log(data);
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });

                        
                    })
                    .catch(error => {
                        console.error(error);
                        swal("Failed to delete the coffee item!", {
                            icon: "error",
                        });
                    });

                    // const remenig = product.filter(cof => cof._id !== _id)
                    // setCoffees(remenig)

            });
    }

    return (

        <div >
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
                      
                        <button onClick={() => handleDelete(product._id)} className="bg-white px-4 py-2 my-4 rounded">Dellete</button>
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