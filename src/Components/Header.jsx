import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png'


const Header = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className=" flex justify-between items-center border-blue-500 border drop-shadow-md" style={{ width: '100%', height: '70px' }}>
      <div className="flex items-center justify-between">
        {/* Add your logo here */}
        <img src={logo} alt="Logo" className="w-8 h-8 ml-5" />
        {/* Centered text */}
       
      </div>
      <div className="text-center">
          <p className="text-xl font-semibold mb-1">Writing Test 7</p>
          <p className="text-sm">9 July 2023 at 01:47</p>
        </div>
      <button
        onClick={toggleSidebar}
        className="text-white hover:text-gray-200 focus:outline-none"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      
    </div>
    
  );
};

export default Header;
