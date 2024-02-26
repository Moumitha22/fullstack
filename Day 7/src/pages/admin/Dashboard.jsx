import PieChart from "../../components/ui/admin/PieChart";
import BarGraph from "../../components/ui/admin/BarGraph";

function Dashboard() {
  return (
    <div className="flex-grow bg-gray-100 p-8 pace-y-6">

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          {/* <h2 className="text-gray-600 ml-0.5">We Provide Free resources regarding web design and web development</h2> */}
        </div>
      </div>

      <section className="grid mt-5 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Stat Card 1*/}
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">895623</span>
            <span className="block text-gray-500">Total Applicants</span>
          </div>
        </div>
        {/* Stat Card 2 */}
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            {/*<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
               <School/>
  </svg>*/}
            <svg fill="#ffffff" className="rtl:rotate-180 w-8 h-8" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z" />
              </g>
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">18945</span>
            <span className="block text-gray-500">Total Institutes</span>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">2348</span>
            <span className="block text-gray-500">Total Courses</span>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span className="inline-block text-2xl font-bold">594521</span>
            {/* <span className="inline-block text-xl text-gray-500 font-semibold">(-32%)</span> */}
            <span className="block text-gray-500">Total Enrolled Students</span>
          </div>
        </div>
      </section>

      <section className="grid mt-8 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">

        <PieChart />

        <BarGraph />

        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>

          <div>
            <span className="inline-block text-4xl font-bold">₹ </span>
            <span className="inline-block text-3xl font-semibold">76,58,342</span>
            <span className="block text-gray-500">Total payment made this week</span>
          </div>
        </div>



        <div className="row-span-3 bg-white shadow rounded-lg">
          <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
            <span>Top Preferred Colleges</span>
            <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Applicants
            </button>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '30rem' }}>
            <ul className="p-6 space-y-6">
              <li className="flex items-center">
                <span className="text-gray-600">College Name 1</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 2</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 3</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 4</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 5</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 6</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 7</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 8</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 9</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">College Name 10</span>
                <span className="ml-auto font-semibold">3456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100">WHAT ARE YOUR TOP COURSES?</div>
          <div className="p-4 flex-grow">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">1. Computer Science</span>
                <span className="ml-auto text-gray-600">300</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">2. Business Administration</span>
                <span className="ml-auto text-gray-600">250</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">3. Data Science</span>
                <span className="ml-auto text-gray-600">200</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">4. Psychology</span>
                <span className="ml-auto text-gray-600">180</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">5. Engineering</span>
                <span className="ml-auto text-gray-600">150</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">6. Medicine</span>
                <span className="ml-auto text-gray-600">120</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">7. Graphic Design</span>
                <span className="ml-auto text-gray-600">110</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">8. Economics</span>
                <span className="ml-auto text-gray-600">100</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">9. Environmental Science</span>
                <span className="ml-auto text-gray-600">90</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">10. Civil Engineering</span>
                <span className="ml-auto text-gray-600">80</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;