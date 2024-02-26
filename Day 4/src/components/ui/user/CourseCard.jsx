function CourseCard() {
    return (
        <div className="w-full flex flex-row bg-white border border-gray-200 rounded-xl shadow m-5">
            <div className="p-5 font-sans">
                <a href="#">
                    <h3 className="mb-2 text-md font-bold tracking-tighter hover:tracking-normal">B.E. (Computer Science and Engineering)</h3>
                </a>
                <p className="mb-2 font-normal text-gray-700 tracking-tighter">Sri Krishna College of Engineering and Technology</p>
                <p className="mb-5 font-normal text-gray-700 tracking-tighter">8 Semesters / 4 Years</p>
                <a href="/user/course/6" className="inline-flex text-white bg-cyan-600 hover:px-5 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                    View Details 
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>  
            </div>
        </div>
    )
}

export default CourseCard;