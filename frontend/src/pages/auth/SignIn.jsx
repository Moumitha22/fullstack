import Students from "../../assets/images/cap.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { setAuthentication, setToken, setRole, setEmail } from '../../redux/authSlice';
import { jwtDecode } from 'jwt-decode';
import ForgotPasswordModal from "./ForgotPassword";


const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });

    const [errors, setErrors] = useState({});

    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    const toggleForgotPasswordModal = () => {
      setShowForgotPasswordModal(!showForgotPasswordModal);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();      
      
      if (!formData.email || !formData.password) {
        setErrors({
          email: formData.email ? "" : "Email is required",
          password: formData.password ? "" : "Password is required"
        });
        return;
      }

      await login(formData).then((res) => {
        console.log(jwtDecode(res?.data?.accessToken));
        if (res?.data?.accessToken) {
            dispatch(setAuthentication(true))
            dispatch(setToken(res?.data?.accessToken));
            dispatch(setRole(jwtDecode(res?.data?.accessToken)));
            dispatch(setEmail(jwtDecode(res?.data?.accessToken).sub));
            const role = jwtDecode(res?.data?.accessToken).role ;
            switch (role) {
              case 'STUDENT':
                  navigate('/user/home');
                  break;
              case 'INSTITUTE':
                  navigate('/spoc/dashboard');
                  break;
              case 'ADMIN':
                  navigate('/admin/dashboard');
                  break;
              default:
                  break;
          }
        }
      }).catch((err) => console.log(err));
    }

    return (
      <div className="relative">
      {showForgotPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <ForgotPasswordModal onClose={toggleForgotPasswordModal} />
        </div>
      )}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full lg:max-w-4xl mx-8">
          <div className="md:flex">
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${Students})`, padding: '2rem'}}>
            </div>
            <div className="w-full lg:w-1/2 px-6 py-8">
              <div className="text-center">
                <img className="h-10 w-52 mx-auto" src="/src/assets/images/Applogo.png" alt="Logo" />
                <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account!</h2>
              </div>
              <div className="mt-8 font-[Poppins]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" onChange={handleChange} required className={`appearance-none block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`} />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <span className="font-semibold leading-6 text-sm cursor-pointer  text-violet-500 hover:text-violet-600" onClick={toggleForgotPasswordModal}>
                        Forgot Password?
                      </span>
                    </div>
                    <div className="mt-1">
                      <input id="password" name="password" type="password" onChange={handleChange} required autoComplete="new-password" className={`appearance-none block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`} />
                      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 ">
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
      </div>
    );
}

export default SignIn;
