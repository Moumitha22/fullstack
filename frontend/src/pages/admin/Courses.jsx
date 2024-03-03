import { useState } from "react";

import CourseCard from "../../components/ui/admin/CourseCard";

function Courses() {
  const [formVisibility, setFormVisibility] = useState(false);

  const openForm = () => {
    setFormVisibility(true);
  }

  const closeForm = () => {
    setFormVisibility(false);
  }

  return (
    <div className="bg-violet-200 min-h-screen p-12">
      <div className="mb-5 mx-5 flex justify-center">
          <button  onClick={openForm} className="bg-violet-600 hover:bg-violet-800 hover:px-3 text-white p-2 tracking-tighter rounded-lg flex flex-row space-x-2">
            <div className="h-4 w-4 mt-1">
              <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 45.402 45.402" xmlSpace="preserve">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                  <g id="SVGRepo_iconCarrier"> <g> <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/> </g> </g>
              </svg>
            </div>
            <p>
              Add Course
            </p>
          </button>
      </div>
      <div className="items-center">
        <div className="mb-5 mx-5 flex items-center">
          <div className="relative w-full">
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-8 p-2.5" placeholder="Search course name..." required />
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-violet-700 rounded-lg border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300">
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
      </div>
      </div>

      {
        formVisibility && (
          <form className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black backdrop-blur-md py-12 flex justify-center font-mono overflow-auto">
  <div className="bg-violet-200 border-2 border-black w-[90%] h-fit p-5 rounded-xl flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-3">Add Course</h1>

    <div className="bg-white w-full p-5 mb-2 rounded-xl flex flex-col space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="insName" className="tracking-tighter text-sm mb-1 pl-0.5">Institute Name</label>
          <input type="text" id="insName" className="input-field" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="crsName" className="tracking-tighter text-sm mb-1 pl-0.5">Course Name</label>
          <input type="text" id="crsName" className="input-field" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="crsLevel" className="tracking-tighter text-sm mb-1 pl-0.5">Degree Level</label>
          <select id="crsLevel" className="input-field">
            <option value="UG">Undergraduate</option>
            <option value="PG">Postgraduate</option>
            <option value="DIP">Diploma</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="crsDuration" className="tracking-tighter text-sm mb-1 pl-0.5">Duration (Years)</label>
          <input type="number" id="crsDuration" min="1" className="input-field" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="crsSemesters" className="tracking-tighter text-sm mb-1 pl-0.5">No of Semesters</label>
          <input type="number" id="crsSemesters" min="2" step="2" className="input-field" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="crsFees" className="tracking-tighter text-sm mb-1 pl-0.5">Fees (per year)</label>
          <input type="number" id="crsFees" min="0" step="1000" className="input-field" />
        </div>

        <div className="col-span-2 flex flex-col">
          <label htmlFor="crsDescription" className="tracking-tighter text-sm mb-1 pl-0.5">Description</label>
          <textarea id="crsDescription" className="input-field" rows="4"></textarea>
        </div>

        <div className="col-span-2 flex flex-col">
          <label htmlFor="crsSyllabus" className="tracking-tighter text-sm mb-1 pl-0.5">Syllabus PDF</label>
          <input type="file" id="crsSyllabus" accept=".pdf" className="input-field" />
        </div>
      </div>
    </div>

    <button type="submit" className="bg-violet-600 hover:bg-violet-800 hover:px-3 text-white p-2 tracking-tighter rounded-lg mt-3">
      Add Course
    </button>
  </div>

  <button className="absolute top-2 right-2" onClick={closeForm}>
    <svg width="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8"></polygon>
    </svg>
  </button>
</form>

        )
      }
    </div>
  );
}

export default Courses;