import { useState, useEffect } from 'react';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/SignIn.jpg'
function Home() {
    const [index, setIndex] = useState(0);
    const images = [
        image1,
        image2,
        image3,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => index + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-1 justify-center">
                <img src={images[index % images.length]} alt="health-insurance" width={600} height={400} className="max-w-full h-auto" />
            </div>
            <div className="flex-1 p-12">
                <h2 className=" text-3xl text-cyan-600 mb-4 p-4 font-bold items-center ml-40 ">College Admission</h2>
                <p className="text-base text-cyan-600 leading-relaxed p-4">
                    Access to college admission services is vital for students seeking higher education opportunities. These services offer essential financial protection and facilitate access to various educational resources.
                    Here are some key advantages of utilizing college admission portals. They assist in covering the expenses related to application fees, admission tests, and other educational necessities. College admission portals streamline the application process, providing guidance and support at every step.
                </p>
                <p className="text-base text-cyan-600 leading-relaxed p-4">
                    Many college admission portals offer resources for exploring different colleges, programs, and scholarships. They provide valuable information about admission requirements, deadlines, and academic prerequisites. By utilizing these portals, students can make informed decisions and plan their academic journey effectively.
                </p>
            </div>
        </div>
    );
}

export default Home;