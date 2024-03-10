import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Students from "../../assets/images/cap.jpg";
import AppLogo from "../../assets/images/AppLogo.png";
import { register } from '../../services/auth';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    role: "" 
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  
    let newErrors = { ...errors };
  
    switch (name) {
      case 'name':
        newErrors.name = validateName(value); 
        break;
      case 'email':
        newErrors.email = validateEmail(value); 
        break;
      case 'mobile':
        newErrors.mobile = validateMobile(value); 
        break;
      case 'password':
        newErrors.password = validatePassword(value);
        break;
      case 'role':
        newErrors.role = validateRole(value); 
        break;
      default:
        break;
    }
  
    setErrors(newErrors); 
  };
  

  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }
    return "";
  };

  const validateMobile = (mobile) => {
    if (!mobile.trim()) {
        return "Mobile number is required";
    } else if (!/^[1-9]{1}[0-9]{9}$/.test(mobile)) {
      return "Enter a valid Mobile number";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(password)) {
      return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter,one special character and one number";
    }
    return "";
  };

  const validateRole = (role) => {
    if (!role) {
      return "Role is required";
    }
    return "";
  };

  const handleSubmit = async(e) => {
      e.preventDefault();
      // eslint-disable-next-line no-unused-vars
      // const emptyFields = Object.entries(formData).filter(([_key, value]) => value.trim() === "");
      // if (emptyFields.length > 0) {
      //   const newErrors = {};
      //   emptyFields.forEach(([key]) => {
      //     newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      //   });
      //   setErrors(newErrors);
      //   return;
      // }   
      console.log(formData);  
      register(formData);
      navigate('/signin');     
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full lg:max-w-4xl mx-8">
      <div className="md:flex">
        <div className="hidden md:block md:w-1/2 lg:w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${Students})`, minHeight: '400px'}}>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-10 py-7">
            <div className="text-center">
              <img className="h-10 w-52 mx-auto" src={AppLogo} alt="Logo" />
              <h2 className="mt-6 text-3xl font-bold text-violet-450">Create your account!</h2>
            </div>
            <div className="mt-8 font-[Poppins]">
              <form className="space-y-4 " onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
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
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <div className="mt-1">
                    <select
                      id="role"
                      name="role"
                      required
                      onChange={handleChange}
                      value={formData.role}
                      className={`appearance-none block w-full px-3 py-2 border ${
                        errors.role ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
                    >
                      <option value="">Select Role</option>
                      <option value="STUDENT">Student</option>
                      <option value="INSTITUTE">Institute</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                  </div>
                </div>
                
                <div className="">
                  <button
                    type="submit"
                    className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 "
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
