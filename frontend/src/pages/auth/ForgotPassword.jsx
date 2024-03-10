import { useState } from "react";
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { forgotPassword} from '../../services/auth';


const ForgotPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(formData);
      if (response && response.data && response.data.message === "Password updated successfully") {
        alert(response.data.message);
      } else {
        alert("Password updated successfully");
      }
      onClose();
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <AiOutlineClose className="h-6 w-8 mt-1" />
        </button>
        <h2 className="text-2xl font-bold mt-3 mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              required
            />
          </div>
          <div>
            <label htmlFor="currentPassword" className="block font-semibold">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className=" border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block font-semibold">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-md"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgotPasswordModal.propTypes = {
    onClose: PropTypes.func
}

export default ForgotPasswordModal;
