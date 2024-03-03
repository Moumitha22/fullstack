import college from "../../../assets/images/College.jpg";

function InstituteCard() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg m-5 overflow-hidden">
      <a href="#">
        <img className="w-full h-64 object-cover object-center" src={college} alt="College" />
      </a>
      <div className="p-5 font-[Poppins]">
        <a href="#">
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-violet-600 text-center">Sri Krishna College of Engineering and Technology</h3>
        </a>
        <p className="text-sm text-gray-600 mb-4">Technology Education for a Better Future. Sri Krishna College of Engineering and Technology is the most sought after Institution among the premier technical Institutions in South India.</p>
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

export default InstituteCard;
