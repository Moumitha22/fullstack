import college from "../../../assets/images/College.jpg";
import PropTypes from 'prop-types';

function InstituteCard({ institute, onViewInstitute }) {
  const { instituteName, location, about , mobile } = institute;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg m-5">
      <a href="#">
        <img className="rounded-t-lg" src={college} alt="" />
      </a>
      <div className="p-5 font-[Poppins]">
        <a href="#">
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-violet-600 text-center">{instituteName}</h3>
        </a>
        <p className="text-sm text-gray-600 mb-4">{mobile}</p>
        <p className="text-sm text-gray-600 mb-4">{location}</p>
        <p className="text-sm text-gray-600 mb-4">{about}</p>
        <div className="flex justify-center space-x-8">
          <button onClick={onViewInstitute} className="inline-block bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200">
            <span className="flex items-center">
              View 
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <a href="/user/institute/6" className="inline-block bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200">
            <span className="flex items-center">
              Delete 
              <svg className="rtl:rotate-180 w-4 h-4 ms-2 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
              <path d="M10 11V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

InstituteCard.propTypes = {
  institute:PropTypes.object.isRequired,
  onViewInstitute: PropTypes.func.isRequired
}

export default InstituteCard;
