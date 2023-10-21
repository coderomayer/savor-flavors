const Footer = () => {

    return (

        <div className="bg-gray-900 text-white p-8 sm:p-24">

            <footer className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">About Savor Flavors</h3>
                        <p>
                            Savor Flavors is your premier online destination for the finest food and beverages from around the world. We curate and offer a diverse selection of culinary delights from renowned brands and producers.
                        </p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>
                            Email: info@savorflavors.com<br />
                            Phone: +1-555-123-4567
                        </p>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                        <div className=" flex flex-col  items-start">
                            <a href="#" className="text-xl text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out">Facebook</a>
                            <a href="#" className="text-xl text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out">Twitter</a>
                            <a href="#" className="text-xl text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out">Instagram</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Location</h3>
                        <p>
                            123 Gourmet Avenue<br />
                            Foodlandia, FL 54321<br />
                            United States
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p>
                        &copy; 2023 Savor Flavors. All rights reserved. | <a href="terms.html" className="text-blue-400 hover:underline">Terms and Conditions</a> | <a href="privacy.html" className="text-blue-400 hover:underline">Privacy Policy</a>
                    </p>
                </div>
                
            </footer>

        </div>

    )
}

export default Footer;