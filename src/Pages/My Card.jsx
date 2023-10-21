import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/product Card";

const MyCard = () => {

    const userProduct = useLoaderData();
    console.log(userProduct);
    // const product = userProduct.map(product )

return (
    <div>
        {
            userProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
    </div>
)
    
}

export default MyCard;