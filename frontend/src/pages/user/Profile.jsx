import { useState } from "react";

import User from "../../assets/images/User.jpg"
import ProfileCourses from "../../components/ui/user/ProfileCourses"

function Profile() {
  const [personalState, setPersonalState] = useState(true);
  const [eduState, setEduState] = useState(true);

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

            <div className="absolute bottom-0 right-0 p-2 flex flex-row">
              <label
                htmlFor="fileInput"
                className="cursor-pointer text-white bg-violet-500 rounded-full p-2"
              >
                <PencilSVG />
              </label>
              <input id="fileInput" type="file" className="hidden" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex  flex-col space-y-8">
          <div className="border border-gray-300 p-8 rounded-lg">
            <div className="mb-6">
              <div className="flex flex-row justify-between items-center  mb-2">
                <p className="font-bold text-2xl">Personal Information:</p>
                {personalState ? (
                  <button
                    className="bg-violet-600 hover:bg-violet-800 border border-gray-200 rounded-lg p-1 px-3 text-white"
                    onClick={() => setPersonalState(!personalState)}
                  >
                    <div className="flex flex-row space-x-2">
                      <div className="mt-1">
                        <PencilSVG />
                      </div>
                      <p>Edit</p>
                    </div>
                  </button>
                ) : (
                  <button
                    className="bg-green-600 hover:bg-green-800 border border-gray-200 rounded-lg p-1 px-3 text-white"
                    onClick={() => setPersonalState(!personalState)}
                  >
                    <div className="flex flex-row space-x-2">
                      <div className="mt-1">
                        <SaveSVG />
                      </div>
                      <p>Save</p>
                    </div>
                  </button>
                )}
              </div>
              <hr></hr>
            </div>
            <div>
              {personalState ? (
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
              ) : (
                <div className="grid grid-cols-2">
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">Name</p>
                      <input
                        type="text"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                        placeholder="Moumitha R"
                      />
                    </div>
                    <div>
                      <p className="font-bold">DOB</p>
                      <input
                        type="text"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                        placeholder="21/10/2003"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Gender</p>
                      <select
                        type="text"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                      >
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                        <option value="O">Prefer not to say</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">Email</p>
                      <input
                        type="email"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                        placeholder="moumi22@gmail.com"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Mobile</p>
                      <input
                        type="text"
                        pattern="[0-9]{10}"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg">
            <div className="mb-6">
              <div className="flex flex-row justify-between items-center  mb-2">
                <p className="font-bold text-2xl">Educational Information:</p>
                {eduState ? (
                  <button
                    className="bg-violet-600 hover:bg-violet-700 border border-gray-200 rounded-lg p-1 px-3 text-white"
                    onClick={() => setEduState(!eduState)}
                  >
                    <div className="flex flex-row space-x-2">
                      <div className="mt-1">
                        <PencilSVG />
                      </div>
                      <p>Edit</p>
                    </div>
                  </button>
                ) : (
                  <button
                    className="bg-green-600 hover:bg-green-800 border border-gray-200 rounded-lg p-1 px-3 text-white"
                    onClick={() => setEduState(!eduState)}
                  >
                    <div className="flex flex-row space-x-2">
                      <div className="mt-1">
                        <SaveSVG />
                      </div>
                      <p>Save</p>
                    </div>
                  </button>
                )}
              </div>
              <hr></hr>
            </div>
            <div>
              {eduState ? (
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
              ) : (
                <div className="grid grid-cols-2">
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">10th Percentage</p>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                        placeholder="95"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div>
                      <p className="font-bold">12th/Diploma Percentage</p>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="b-2 text-sm text-gray-900 rounded-md p-1 border-2 border-gray-600"
                        placeholder="94"
                      />
                    </div>
                  </div>
                </div>
              )}
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

const PencilSVG = () => {
  return (
    <svg
      className="rtl:rotate-180 w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
};

const SaveSVG = () => {
  return (
    <svg
      className="rtl:rotate-180 w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
          fill="#ffffff"
        />{" "}
      </g>
    </svg>
  );
};

export default Profile;