import { Link,  } from "react-router-dom"


const BrandCard = ({brand}) => {
 
const {brandName} = brand;
 

    return (
        <div  className="p-6 bg-white rounded-lg">

            <Link to={`brand-product/${brandName}`}>

            <img className="rounded-lg h-48 w-full object-cover" src={brand.brandPicture} alt="" />
            <h2 className="text-4xl font-bold py-4 text-center">{brand.brandName}</h2>
           


            </Link>
        </div>
    )
}

export default BrandCard;