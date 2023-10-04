import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faComments,
  faClipboard,
  faChalkboardTeacher,
  faChartBar,
  faCog,
  faFile,
  faGraduationCap,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className=" h-80px w-[507px] bg-white border border-r-2 border-gray-300 rounded-r-lg flex flex-col justify-between items-center">
      <div className="p-4">
        <ul>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <a href="/dashboard" className="text-600">Dashboard</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <a href="/mentor" className="text-600">1 on 1 mentor</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
            <a href="/interviews" className="text-">Mock Interviews</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faClipboard} className="mr-2" />
            <a href="/practice" className="text-600">Practice Test</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            <a href="/communication" className="text-600">Communication</a>
          </li>
          <li className="mb-2 -ml-2 flex items-center bg-blue-400 rounded-xl">
            <FontAwesomeIcon icon={faChartBar} className="mr-2 ml-3" />
            <a href="/reports" className="text-60 ">Reports</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            <a href="/communication" className="text-600">Setting</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            <a href="/communication" className="text-600">Premium</a>
          </li>
          <br />
          <hr />
          <br />
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faFile} className="mr-2" />
            <a href="/resume" className="text-blue-600 hover:underline">Resume</a>
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            <a href="/course" className="text-blue-600 hover:underline">Course</a>
          </li>
        </ul>
      </div>
      <div className="p-4 border-t">
        <ul>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
