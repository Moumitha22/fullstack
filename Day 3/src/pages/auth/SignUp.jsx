import { useState } from "react";

import SignUpPic from "../../assets/images/SignIn.jpg";

function SignUp() {

    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async () => {
        // e.preventDefault();

        if (data.password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

        if (!regex.test(data.password)) {
            alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
            return;
        }

        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    }

    return (
        <>
            <div className="grid grid-cols-3 overflow-clip">
                <div className="col-span-2">
                    <img
                        className="p-20 ml-40 sm:rounded-lg"
                        src={SignUpPic} width={800} height={800} 
                    />
                </div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8 mr-20">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-4 text-gray-900"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-4 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-4 text-gray-900"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-sm font-medium leading-4 text-gray-900"
                                    >
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="confirmPassword"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm font-medium leading-4 text-gray-900"
                                >
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="phone"
                                        autoComplete="mobile"
                                        pattern="[0-9]{10}"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-4 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Already a member?{" "}
                            <a
                                href="/signin"
                                className="font-semibold leading-4 text-cyan-600 hover:text-cyan-500"
                            >
                                Log In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp