import college from "../../../assets/images/College.jpg";
import PropTypes from 'prop-types';

function InstituteCard({ institute }) {
  const { instituteName, location, about , mobile } = institute;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg m-5 overflow-hidden">
      <a href="#">
        <img className="w-full h-64 object-cover object-center" src={college} alt="College" />
      </a>
      <div className="p-5 font-[Poppins]">
        <a href="#">
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-violet-600 text-center">{instituteName}</h3>
        </a>
        <p className="text-sm text-gray-600 ">Location: {location}</p>
        <p className="text-sm text-gray-600 ">Mobile: {mobile}</p>
        <p className="text-sm text-gray-600 mb-4">{about}</p>
        <div className="flex justify-center">
          <a href="/user/institute/6" className="inline-block bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200">
            <span className="flex items-center">
              Explore 
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

InstituteCard.propTypes = {
  institute:PropTypes.object.isRequired
}

export default InstituteCard;
