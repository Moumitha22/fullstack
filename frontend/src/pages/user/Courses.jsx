import CourseCard from "../../components/ui/user/CourseCard";

function Courses() {
  return (
    <div className="bg-violet-200 min-h-screen p-12">
      <div className="items-center">
        <div className="mb-5 mx-5 flex items-center">
          <div className="relative w-full">
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2.5" placeholder="Search course name..." required />
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white  bg-violet-600 rounded-lg border border-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default Courses;
