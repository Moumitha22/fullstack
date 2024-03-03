// import {FaUser, FaLock,FaMobileAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

import { useState } from "react";
import Students from "../../assets/images/cap.jpg";
// import Students from "../../assets/images/Students2.jpg";
import AppLogo from "../../assets/images/AppLogo.png"

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async() => {
    // e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.mobile.trim()) {
        errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.password.trim()) {
    errors.password = "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(formData.password)) {
    errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full lg:max-w-4xl mx-8">
      <div className="md:flex">
        <div className="hidden md:block md:w-1/2 lg:w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${Students})`, minHeight: '400px'}}>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-10 py-7">
            <div className="text-center">
              <img className="h-10 w-40 mx-auto" src={AppLogo} alt="Logo" />
              <h2 className="mt-6 text-3xl font-Poppins font-bold text-violet-450">Create your account!</h2>
            </div>
            <div className="mt-8 font-Poppins">
              <form onSubmit={handleSubmit} className="space-y-6 ">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={handleChange}
                      value={formData.name}
                      className={`appearance-none block w-full px-3 py-2 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={handleChange}
                      value={formData.email}
                      className={`appearance-none block w-full px-3 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile number
                  </label>
                  <div className="mt-1">
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      required
                      onChange={handleChange}
                      value={formData.mobile}
                      className={`appearance-none block w-full px-3 py-2 border ${
                        errors.mobile ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      onChange={handleChange}
                      value={formData.password}
                      className={`appearance-none block w-full px-3 py-2 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      className={`appearance-none block w-full px-3 py-2 border ${
                        errors.confirmPassword ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="mt-8 text-center text-sm text-gray-500">
                Already a member?{" "}
                <a href="/signin" className="font-semibold leading-4 text-violet-500 hover:text-violet-600">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

