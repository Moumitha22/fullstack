import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/auth';
import { useDispatch } from 'react-redux';
import { setAuthentication, setToken, setRole } from '../../../redux/authSlice';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    await logout();
    dispatch(setAuthentication(false))
    dispatch(setToken(''));
    dispatch(setRole({}));
    navigate('/signin');
  };

  return (
      <nav className="bg-white font-[Poppins] p-2 flex justify-between items-center w-[100%] mx-auto shadow-md shadow-violet-400 ">
        <div>
         <img className="pl-5 w-40 cursor-pointer" src="/src/assets/images/Applogo.png" alt="Logo" />
        </div>
        <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[7%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a href="/user/home" className="font-semibold text-black hover:text-violet-400 hover:underline hover:underline-offset-8">Home</a>
          </li>
          <li>
            <a href="/user/institutes" className="font-semibold text-black hover:text-violet-400 hover:underline hover:underline-offset-8">Institutes</a>
          </li>
          <li>
            <a href="/user/courses" className="font-semibold text-black hover:text-violet-400 hover:underline hover:underline-offset-8">Courses</a>
          </li>
          <li>
            <a href="/user/profile" className="font-semibold text-black hover:text-violet-400 hover:underline hover:underline-offset-8">Profile</a>
          </li>
        </ul>
        </div>
       <div className="flex items-center gap-6">
          <button className="bg-violet-400 text-white px-5 py-2 rounded-full hover:bg-[#ddd6fe]" onClick={handleLogout}>Sign Out</button>
          <ion-icon onClick={toggleMenu} name={menuOpen ? 'close' : 'menu'} class="text-3xl cursor-pointer md:hidden"></ion-icon> 
        </div> 
      </nav>
  );
};

export default Navbar;
