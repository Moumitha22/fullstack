import { useState } from "react";

import icon from "../../../assets/images/degree-cap.png";
import dropdown from "../../../assets/images/user.png";

const name = "Raj Narayanan";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-cyan-600 min-w-screen border-1 border-sky-200 p-5 shadow-md shadow-sky-800 flex justify-between items-center text-lg font-sans relative z-10">
      <div className="flex space-x-2">
        <img className="h-6 w-6" src={icon} alt="icon" />
        <h1 className="text-white font-bold">EduConnect ✨</h1>
      </div>

      <ul className="flex space-x-8 text-sm">
        <li>
          <a href="/user/home" className="text-white font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Home</a>
        </li>
        <li>
          <a href="/user/institutes" className="text-white font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Institutes</a>
        </li>
        <li>
          <a href="/user/courses" className="text-white font-bold hover:text-sky-200 hover:underline hover:underline-offset-8">Courses</a>
        </li>
      </ul>

      <div className="flex space-x-2 relative">
        <p className="text-white font-bold">Welcome 🙏 {name}</p>
        <img className="h-6 w-6 cursor-pointer" src={dropdown} onClick={() => setMenuOpen(!menuOpen)} />
        
        {menuOpen && (
          <div className="absolute right-0 mt-8 bg-sky-100 border border-gray-300 rounded shadow-md text-sm">
            <ul className="">
              <li className="px-7 py-3 hover:bg-sky-300 cursor-pointer"><a href="/user/profile">Profile</a></li>
              <li className="px-7 py-3 hover:bg-sky-300 cursor-pointer"><a href="/signin">Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
