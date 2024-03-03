import Students from "../../assets/images/cap.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async () => {

        navigate("/user/home");
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full lg:max-w-4xl mx-8">
        <div className="md:flex">
          <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${Students})`, padding: '2rem'}}>
          </div>
          <div className="w-full lg:w-1/2 px-6 py-8">
            <div className="text-center">
              <img className="h-10 w-40 mx-auto" src="/src/assets/images/Applogo.png" alt="Logo" />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account!</h2>
            </div>
            <div className="mt-8 font-Poppins">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" onChange={handleChange} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input id="password" name="password" type="password" onChange={handleChange} required autoComplete="new-password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm" />
                  </div>
                </div>
                <div>
                  <button type="submit" onClick={handleSubmit} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                    href="/signup"
                    className="font-semibold leading-6 text-violet-500 hover:text-violet-600"
                >
                    Sign Up
                </a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
