import college from "../../../assets/images/College.jpg";

function InstituteCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow m-5">
            <a href="#">
                <img className="rounded-t-lg" src={college} alt="" />
            </a>
            <div className="p-5 font-sans">
                <a href="#">
                    <h3 className="mb-2 text-md font-bold tracking-tighter hover:tracking-normal">Sri Krishna College of Engineering and Technology</h3>
                </a>
                <p className="mb-5 font-normal text-gray-700 tracking-tighter">Sri Krishna College of Engineering & Technology is an autonomous technical institution affiliated to Anna University based on Coimbatore. It is located in a twenty-acre campus at Sugunapuram along the Palakkad-Coimbatore Highway, near Kuniyamuthur, Coimbatore in Indian state of Tamil Nadu. </p>
                <a href="/user/institute/1" className="inline-flex text-white bg-cyan-600 hover:px-5 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                    Explore College
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>  
            </div>
        </div>
    )
}

export default InstituteCard;