
import User from "../../assets/images/User.jpg"
import ProfileCourses from "../../components/ui/user/ProfileCourses"

function Profile() {

  return (
    <div className="bg-violet-200 min-h-screen p-12 font-mono">
      <div className="max-w-xl mx-auto"> 
      <div className="text-2xl font-bold flex justify-center mb-5 tracking-tight">
        <p>Profile</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-12">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={User}
              className="rounded-full w-48 h-48 mb-4"
              alt="User"
            />

            
          </div>
        </div>

        <div className="mt-10 flex  flex-col space-y-8">
          <div className="border border-gray-300 p-8 rounded-lg">
            <div className="mb-6">
              <div className="flex flex-row justify-between items-center  mb-2">
                <p className="font-bold text-2xl">Personal Information:</p>
              </div>
              <hr></hr>
            </div>
            <div>
            <div className="grid grid-cols-2">
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">Name</p>
                      <p className="">Moumitha R</p>
                    </div>
                    <div>
                      <p className="font-bold">DOB</p>
                      <p className="">21/10/2003</p>
                    </div>
                    <div>
                      <p className="font-bold">Gender</p>
                      <p className="">Female</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="">moumi22@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-bold">Mobile</p>
                      <p className="">9876543210</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg">
            <div className="mb-6">
              <div className="flex flex-row justify-between items-center  mb-2">
                <p className="font-bold text-2xl">Personal Information:</p>
              </div>
              <hr></hr>
            </div>
            <div>
            <div className="grid grid-cols-2">
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">10th Percentage</p>
                      <p className="">95%</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">12th/Diploma Percentage</p>
                      <p className="">94%</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center mb-10">
          <button className="bg-red-600 hover:bg-red-800 border border-gray-200 rounded-lg p-1 px-3 text-white mt-8">
            Revoke Access
          </button>
        </div> */}
        <div>
          {/* <hr className="bg-black border border-black mb-8"></hr> */}

          <div className="flex justify-center mb-8 font-bold text-lg mt-12">
            <h1>Course Status</h1>
          </div>

          <div className="flex flex-col space-y-5">
            <ProfileCourses />
            <ProfileCourses />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

// const PencilSVG = () => {
//   return (
//     <svg
//       className="rtl:rotate-180 w-4 h-4"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       stroke="#ffffff"
//     >
//       <g id="SVGRepo_bgCarrier" strokeWidth="0" />

//       <g
//         id="SVGRepo_tracerCarrier"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       <g id="SVGRepo_iconCarrier">
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
//           fill="#ffffff"
//         />
//       </g>
//     </svg>
//   );
// };


export default Profile;