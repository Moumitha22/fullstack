function CourseCard() {
    return (
        <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-lg m-5 overflow-hidden font-[Poppins]">
            <div className="p-5">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-violet-600">B.E. (Computer Science and Engineering)</h3>
                    <p className="text-sm font-medium text-gray-600">Sri Krishna College of Engineering and Technology</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm font-normal text-gray-600">8 Semesters / 4 Years</p>
                </div>
                <div className="mt-4 flex justify-center"> {/* Changed to justify-center */}
                    <a href="/user/course/6" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-violet-500 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Explore Course
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>                        
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;
