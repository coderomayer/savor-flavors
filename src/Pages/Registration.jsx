import { useContext, useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../Layout/Auth Provider";

const Registraition = () => {

    const navigate = useNavigate()
    const { createUser } = useContext(userAuth)
    const [error, setError] = useState('');


    const handleRegister = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const newUser = { name, email, password }
        console.log(newUser);


        setError('')


        if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return;

        } else if (!/[A-Z]/.test(password)) {
            setError('Password must include at least one uppercase letter.');
            return;

        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError('Password must include at least one special character.');
            return;
        }


        createUser(email, password)
            .then((user) => {
                swal("Thank You!", "Your registration is complete. Welcome to our event.!", "success");
                navigate('/')
            })
            .catch((error => {
                setError(error.message)
            }))


        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // if (data.insertedId) {
                //     setAddProduct('Product aded succesfully')
                // }
            })


    }


        return (

            <div>

                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create and account
                                </h1>

                                <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">



                                    <div>
                                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>

                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>

                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>


                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>

                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                        </div>

                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>

                                    <p className="text-sm font-light text-blue-900 dark:text-gray-400">
                                        Already have an account? <Link className="text-orange-800 font-bold" to='/login'>Login</Link>

                                    </p>
                                </form>

                                {
                                    error && <p className="bg-red-900 text-white p-4 rounded">{error}</p>
                                }

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }


export default Registraition;