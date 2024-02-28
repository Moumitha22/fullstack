function CourseDetail() {

    return (
        <div className="bg-sky-200 p-12 min-h-screen flex items-center">
            <div className="bg-white rounded-xl border border-gray-200 min-w-screen min-h-fit px-32 p-20 font-normal">
                <div className="col-span-2 flex justify-center items-center">
                    <div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tighter mb-1">Bachelor of Engineering (B.E.) in Computer Science and Engineering</h1>
                            <p className="font-normal tracking-tighter mb-10">Sri Krishna College of Engineering and Technology</p>
                        </div>

                        <div>
                            <p className="font-normal tracking-tighter mb-10">{description}</p>
                        </div>

                        <div className="leading-7 mb-10">

                            <div className="grid grid-cols-6">
                                <p className="font-normal tracking-tighter">Degree level</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-5 tracking-tighter">Undergraduate</p>
                            </div>

                            <div className="grid grid-cols-6">
                                <p className="font-normal tracking-tighter">Duration (years)</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-5 tracking-tighter">4</p>
                            </div>

                            <div className="grid grid-cols-6">
                                <p className="font-normal tracking-tighter">No of Semesters</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-5 tracking-tighter">8</p>
                            </div>

                            <div className="grid grid-cols-6">
                                <p className="font-normal tracking-tighter">Fee per year</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-5 tracking-tighter">Rs.1,30,000</p>
                            </div>

                        </div>

                        <div className="space-x-2">
                            <button className="inline-flex text-white bg-sky-600 hover:bg-sky-800 hover:px-5 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                                Download Syllabus
                                <svg className="rtl:rotate-180 w-4 h-4 ms-2 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                </svg>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const description = "The B.E. in Computer Science and Engineering program provides a comprehensive understanding of computer science principles and engineering concepts. Students will gain hands-on experience in designing and developing software and hardware systems."

export default CourseDetail;