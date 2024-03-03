import PropTypes from 'prop-types';
import { ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, } from "react"
import { TbLetterMSmall } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const SidebarContext = createContext()

export default function Sidebar({ children,expanded,onToggle }) {
 

  return (
    <nav className={`sidebar font-[Poppins] fixed h-full flex flex-col overflow-y-auto bg-white border-r shadow-lg ${expanded ? 'w-60' : 'w-16'}`}>
      <div className="p-4 pb-2 flex justify-between items-center mt-2 mb-2">
          <img className={`overflow-hidden transition-all ${
              expanded ? "w-40" : "w-0" 
            }`}src="/src/assets/images/Applogo.png" alt="Logo" />
       
          <button
            onClick={onToggle}
            className={`p-1.5 rounded-lg bg-gray-100 hover:bg-gray-300`}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-2">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <TbLetterMSmall className="w-10 h-10 rounded-md border text-violet-700 border-violet-500 border-md"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold">Moumitha</h4>
              <span className="text-xs text-gray-600">moumi@gmail.com</span>
            </div>            
          </div>
        </div>
      </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

export function SidebarItem({ icon, text, active, alert, to, onItemClick }) {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  
  const handleClick = () => {
    onItemClick();
    navigate(to); 
  };
  
  return (
    <li 
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
      onClick={handleClick} 
    >
      <div className="flex items-center">
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "ml-3" : "ml-1 w-0"
          }`}
        >
          {text}
        </span>
      </div>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {/* {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )} */}
    </li>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  alert: PropTypes.bool,
  to: PropTypes.string.isRequired,
  onItemClick: PropTypes.func
};