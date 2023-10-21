import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/product Card";

const MyCard = () => {

    const userProduct = useLoaderData();
    console.log(userProduct);
    // const product = userProduct.map(product )

return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 sm:p-20">
        {
            userProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
    </div>
)
    
}

export default MyCard;