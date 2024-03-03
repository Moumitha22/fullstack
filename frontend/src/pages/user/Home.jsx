// import Home from "../../assets/images/Students2.jpg"
// import Home from "../../assets/images/home1.png"
import Testimonials from './Testimonials';
import Home from "../../assets/images/home4.webp";

const HomePage = () => {
  return (
    <div>
      <div className="bg-violet-200 font-[Poppins] h-screen flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-bold mb-4 text-center md:text-left">EduConnect</h1>
          <h2 className="text-2xl md:text-3xl  text-violet-600 font-semibold mb-4 text-center md:text-left">Linking Ambitions to Achievements </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-8 text-center md:text-left">Your Central Hub for Seamless University Admissions, where Education Meets Connectivity, and Futures Flourish</p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full mr-5">
              <a href="/user/institutes">Institutes</a>
            </button>
            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full ">
              <a href="/user/courses">Courses</a>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={Home}
            alt="university"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Display the BoxFunction component */}
      <BoxWithSections />
      <Testimonials/>
    </div>
  );
};



import { RiBuilding4Line, RiBook2Line, RiUserLine } from 'react-icons/ri';

const BoxWithSections = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg mt-10 mb-10 p-10 max-w-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <RiBuilding4Line className="h-12 w-12 text-blue-500 mb-2" />
          <span className="text-2xl font-bold text-gray-700">5</span>
          <span className="text-lg text-gray-500">Number of Institutes</span>
        </div>
        <div className="border-r border-gray-300 h-16 mx-4"></div> {/* Vertical line separator */}
        <div className="flex flex-col items-center">
          <RiBook2Line className="h-12 w-12 text-green-500 mb-2" />
          <span className="text-2xl font-bold text-gray-700">20</span>
          <span className="text-lg text-gray-500">Courses</span>
        </div>
        <div className="border-r border-gray-300 h-16 mx-4"></div> {/* Vertical line separator */}
        <div className="flex flex-col items-center">
          <RiUserLine className="h-12 w-12 text-red-500 mb-2" />
          <span className="text-2xl font-bold text-gray-700">100</span>
          <span className="text-lg text-gray-500">Students</span>
        </div>
      </div>
    </div>
  );
};
 

export default HomePage;
