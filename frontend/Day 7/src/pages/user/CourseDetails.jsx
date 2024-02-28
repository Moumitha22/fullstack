import { useState } from 'react';

function CourseDetail() {
    const [formVisibility, setFormVisibility] = useState(false);

    const openForm = () => {
      setFormVisibility(true);
    }

    const closeForm = () => {
      setFormVisibility(false);
    }

    return (
        <div className="bg-sky-200 p-12 min-h-fit">
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

                            <div className="grid grid-cols-7">
                                <p className="font-normal tracking-tighter">Degree level</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-6 tracking-tighter">Undergraduate</p>
                            </div>

                            <div className="grid grid-cols-7">
                                <p className="font-normal tracking-tighter">Duration (years)</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-6 tracking-tighter">4</p>
                            </div>

                            <div className="grid grid-cols-7">
                                <p className="font-normal tracking-tighter">No of Semesters</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-6 tracking-tighter">8</p>
                            </div>

                            <div className="grid grid-cols-7">
                                <p className="font-normal tracking-tighter">Fee per year</p>
                                <p className="font-normal grid grid-cols-subgrid col-span-6 tracking-tighter">Rs.1,30,000</p>
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

                            <button onClick={openForm} className="inline-flex text-white bg-green-600 hover:bg-green-800 hover:px-5 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                                Apply Now
                                <svg className="rtl:rotate-180 w-4 h-4 ms-2 mt-1" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <title/> <g fill="none" fillRule="evenodd" id="页面-1" stroke="none" strokeLinecap="round" strokeWidth="1"> <g id="导航图标" stroke="#ffffff" strokeWidth="1.5" transform="translate(-103.000000, -334.000000)"> <g id="申请" transform="translate(103.000000, 334.000000)"> <g id="路径" transform="translate(4.000000, 2.000000)"> <path d="M16,14.5 L16,19 C16,19.5523 15.5523,20 15,20 L11.75,20" strokeLinejoin="round"/> <path d="M16,6 L16,1 C16,0.447715 15.5523,0 15,0 L1,0 C0.447715,0 0,0.447715 0,1 L0,19 C0,19.5523 0.447715,20 1,20 L4,20" strokeLinejoin="round"/> <line x1="4" x2="11" y1="6" y2="6"/> <line x1="7.5" x2="16" y1="20" y2="9.5"/> <line x1="4" x2="8" y1="10" y2="10"/> </g> </g> </g> </g> </g>
                                </svg>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>

            {
                formVisibility && (
                <form className="fixed top-0 left-0 w-full h-full bg-opacity-0 bg-black backdrop-blur-md py-20 pb-36 mt-20 flex justify-center font-normal overflow-auto">
                    <div className="bg-sky-200 border-2 border-black w-[90%] h-fit p-5 rounded-xl flex flex-col items-center">
                        
                        <h1 className="text-2xl font-bold mb-3">Apply</h1>
                        
                        <div className="bg-white w-full p-5 mb-2 rounded-xl flex flex-col space-y-3">
                        

                        <div className="flex flex-col">
                            <label htmlFor="crsLevel" className="tracking-tighter text-sm mb-1 pl-0.5">Admission type</label>
                            <select type="text" id="crsLevel" className="b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1.5 border-2 border-gray-600 ">
                            <option value="UG">Regular</option>
                            <option value="PG">Lateral</option>
                            <option value="DIP">Transfer</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="crsSyllabus" className="tracking-tighter text-sm mb-1 pl-0.5">ID proof as PDF</label>
                            <input type="file" id="crsSyllabus" accept=".pdf" className="b-2 text-sm bg-sky-200 text-gray-900 rounded-md p-1.5 border-2 border-gray-600 "></input>
                        </div>
                        
                        </div>

                        <button type="submit" className="bg-green-600 hover:bg-green-800 hover:px-3 text-white p-2 tracking-tighter rounded-lg mt-3">
                            Apply
                        </button>
                    
                    </div>

                    <button className="absolute top-2 right-2" onClick={closeForm}>
                        <svg width="25" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon> </g></svg>              
                    </button>

                </form>
                )
            }
        </div>
    )
}

const description = "The B.E. in Computer Science and Engineering program provides a comprehensive understanding of computer science principles and engineering concepts. Students will gain hands-on experience in designing and developing software and hardware systems."

export default CourseDetail;