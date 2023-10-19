import { useLoaderData } from "react-router-dom";

const Home = () => {

    const brandData = useLoaderData()
    console.log(brandData);

    return (

        <div>

            {/* Header */}

            <div className="h-screen relative">

                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"></div>
                <div class="absolute inset-0 bg-slate-800 opacity-90"></div>


                <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">Explore a World of Culinary Excellence</h2>

                    <p className="my-4">Welcome to Savor Flavors, your ultimate destination for exploring a world of culinary excellence. We're your trusted source for a delectable assortment of food and beverages curated from renowned brands and producers. Delve into a diverse selection of gourmet products and savor the quality and taste that our partner companies have to offer. Join us on a flavorful journey where every dish and drink tells a unique story of craftsmanship and taste.</p>

                    <button className="bg-white text-black px-4 py-2 rounded">Register Now</button>
                </div>
            </div>

            {/* Brand Nams section */}

            <div className="bg-amber-700 p-6 sm:p-24 grid md:grid-cols-3 gap-4">

                {
                    brandData.map(brand => {
                        return (
                            <div className="p-6 bg-white rounded-lg">
                                <img className="rounded-lg h-48 w-full object-cover" src={brand.brandPicture} alt="" />
                                <h2 className="text-4xl font-bold py-4 text-center">{brand.brandName}</h2>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Home;