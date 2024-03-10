import college from "../../assets/images/College.jpg";
import { useState, useEffect } from "react";
import { useSelector} from 'react-redux';
import {getInstitute }from '../../services/institute'
import { useNavigate } from 'react-router-dom';

function InstituteDetails() {
    const navigate = useNavigate();
    const email = useSelector(state => state.auth.institute);
    const [institute,setInstitute] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getInstitute(email);
            console.log(response.data);
            setInstitute(response.data);
          } catch (error) {
            console.error("Error fetching institutes:", error);
          }
        };    
        fetchData();
    }, []);

    const handleViewCourses = () => {
        navigate(`/admin/institute/courses`);
      };

    return (
        <div className="bg-violet-200 p-12 min-h-screen flex items-center">
            <div className="bg-white rounded-xl border border-gray-200 min-w-screen min-h-fit p-16 font-mono">
                <div className="grid grid-cols-3 space-x-20">
                    <div className="col-span-1 p-5 flex justify-center items-center">
                        <img src={college} className="rounded-xl" alt="Institute" />
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                        {institute && (
                            <div>                       
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tighter mb-1">{institute.instituteName}</h1>
                                    <p className="font-normal tracking-tighter mb-10">{institute.location}</p>
                                </div>

                                <div>
                                    <p className="font-normal tracking-tighter mb-10">{institute.about}</p>
                                </div>
                                
                                <div className="leading-7 mb-10">

                                    <div className="grid grid-cols-4">
                                        <p className="font-normal tracking-tighter">Website</p>
                                        <a href={institute.website} target="blank" className="font-normal grid grid-cols-subgrid col-span-3 underline underline-offset-2 tracking-tighter">{institute.website}</a>
                                    </div>  

                                    <div className="grid grid-cols-4">
                                        <p className="font-normal tracking-tighter">Email address</p>
                                        <a href="mailto:principal.skcet.ac.in" className="font-normal grid grid-cols-subgrid col-span-3 underline underline-offset-2 tracking-tighter">{institute.email}</a>
                                    </div>
                                    
                                    <div className="grid grid-cols-4">
                                        <p className="font-normal tracking-tighter">Contact Number</p>
                                        <a href="tel:9025760240" className="font-normal grid grid-cols-subgrid col-span-3 underline underline-offset-2 tracking-tighter">{institute.mobile}</a>
                                    </div>

                                </div>

                                <button onClick={handleViewCourses} className="inline-flex text-white bg-violet-600 hover:bg-violet-800 hover:px-5 px-3 py-2 rounded-lg font-medium text-center focus:ring-4 focus:outline-none">
                                    View Courses Offered
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button> 
                            
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstituteDetails;
