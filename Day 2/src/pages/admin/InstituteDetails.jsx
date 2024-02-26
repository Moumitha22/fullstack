import college from "../../assets/images/College.jpg";

function InstituteDetails() {
    return (
        <div className="bg-sky-200 p-12 min-h-screen flex items-center">
            <div className="bg-white rounded-xl border border-gray-200 min-w-screen min-h-fit p-16 font-normal">
                <div className="grid grid-cols-3 space-x-20">
                    <div className="col-span-1 p-5 flex justify-center items-center">
                        <img src={college} className="rounded-xl" alt="Institute" />
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                        <div>

                            <div>
                                <h1 className="text-3xl font-bold tracking-tighter mb-1">Sri Krishna College of Engineering and Technology</h1>
                                <p className="font-normal tracking-tighter mb-10">BK Pudur, Sugunapuram East, Kuniyamuthur, Coimbatore, Tamil Nadu 641008</p>
                            </div>

                            <div>
                                <p className="font-normal tracking-tighter mb-10">{about}</p>
                            </div>

                            <div className="leading-7 mb-10">

                                <div className="grid grid-cols-4">
                                    <p className="font-normal tracking-tighter">Website</p>
                                    <a href="//www.skcet.ac.in" target="blank" className="font-normal grid grid-cols-subgrid col-span-3 underline underline-offset-2 tracking-tighter">www.skcet.ac.in</a>
                                </div>  

                                <div className="grid grid-cols-4">
                                    <p className="font-normal tracking-tighter">Email address</p>
                                    <a href="mailto:principal.skcet.ac.in" className="font-normal grid grid-cols-subgrid col-span-3 underline underline-offset-2 tracking-tighter">principal@skcet.ac.in</a>
                                </div>

                                <div className="grid grid-cols-4">
                                    <p className="font-normal tracking-tighter">Contact Number</p>
                                    <a href="tel:9025760240" className="font-normal grid grid-cols-subgrid col-span-3 underline underline-offset-2 tracking-tighter">9345049320</a>
                                </div>

                            </div>

                            <a href="/admin/courses/skcet" className="inline-flex text-white bg-sky-600 hover:bg-sky-800 hover:px-5 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                                View Courses Offered
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const about = "Sri Krishna College of Engineering and Technology is the most sought after Institution among the premier technical Institutions in South India. Since its establishment in the year 1998, the Institution has marched towards the pinnacle of glory through its remarkable achievements in the field of Engineering Education. It is an Autonomous Institution, Affiliated to Anna University with 7 programmes being accredited by NBA and it offers 11 UG programmes, 4 PG programmes, 1 integrated programme and 8 research programmes."
export default InstituteDetails;