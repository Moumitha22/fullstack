import PropTypes from 'prop-types';
import { useState } from 'react';
import Sidebar from '../../components/ui/admin/Sidebar';
import { SidebarItem } from '../../components/ui/admin/Sidebar';
// import { FaRegUserCircle } from "react-icons/fa";
import { GraduationCap } from 'lucide-react';
import { School } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Users } from 'lucide-react';

function AdminLayout({ children }) {
    const [expanded, setExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState('dashboard');
  
    const handleToggleSidebar = () => {
       setExpanded((curr) => !curr);
    };

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="flex">
            <aside>
                <Sidebar expanded={expanded} onToggle={handleToggleSidebar}>
                    <SidebarItem 
                      icon={<LayoutDashboard size={30} />} 
                      text="Dashboard" 
                      active={activeItem === 'dashboard'} 
                      to="/admin/dashboard" 
                      onItemClick={() => handleItemClick('dashboard')}
                    />
                    <SidebarItem 
                      icon={<School size={30} />} 
                      text="Institutes" 
                      active={activeItem === 'institutes'} 
                      to="/admin/institutes" 
                      onItemClick={() => handleItemClick('institutes')}
                    />
                    <SidebarItem 
                      icon={<GraduationCap size={30} />} 
                      text="Courses" 
                      active={activeItem === 'courses'} 
                      to="/admin/courses" 
                      onItemClick={() => handleItemClick('courses')}
                    />
                    <SidebarItem 
                      icon={<Users size={30} />} 
                      text="Students" 
                      active={activeItem === 'students'} 
                      to="/admin/users" 
                      onItemClick={() => handleItemClick('students')}
                    />
                    <hr className="my-3"/>
                </Sidebar>
            </aside>
            <main className={`${expanded ? 'ml-60' : 'ml-16'} flex-grow transition-all`}>
                {children}
            </main>
        </div>
    );
}


AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminLayout;
