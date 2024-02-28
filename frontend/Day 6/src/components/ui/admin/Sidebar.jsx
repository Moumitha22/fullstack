import icon from "../../../assets/images/degree-cap.png";


function Sidebar() {

  return (
    <div className="flex font-sans min-h-screen">
      <div className="bg-cyan-600 w-64 p-5 text-white">

        <div className="flex space-x-2 mb-8">
          <img className="h-6 w-6" src={icon} alt="icon" />
          <h1 className="text-white font-bold">EduConnect</h1>
        </div>

        <ul className="space-y-4 text-sm">
          <li>
            <a href="/admin/dashboard" className="font-bold hover:text-sky-200 hover:text-lg">Dashboard</a>
          </li>
          <li>
            <a href="/admin/users" className="font-bold hover:text-sky-200 hover:text-lg">Users</a>
          </li>
          <li>
            <a href="/admin/institutes" className="font-bold hover:text-sky-200 hover:text-lg">Institutes</a>
          </li>
          <li>
            <a href="/admin/courses" className="font-bold hover:text-sky-200 hover:text-lg">Courses</a>
          </li>
        </ul>

        <div className="mt-64 pt-48">
        <p className="text-white font-bold mb-2 ">Welcome Admin</p>

        <ul>
          <li>
            <a href="/signin" className="font-bold text-sm hover:text-sky-200 hover:underline hover:underline-offset-8">Logout</a>
          </li>
        </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
