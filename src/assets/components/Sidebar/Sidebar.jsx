import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../../assets/images/logo.png';
import {sidebarData} from '../../../data/data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [active, setActive] = useState(0);

  return (
    <div className={`Sidebar ${sidebarOpen ? 'sidebar-mobile' : ''}`}>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" className="w-[3rem] h-[3rem]" />
        <span>sh<span>o</span>p</span>
      </div>

      {/* menu */}
      <div className="menu">
        {sidebarData.map((item, index) => (
          <div
            key={index}
            className={active === index ? 'menuItem active' : 'menuItem'}
            onClick={() => {
              setActive(index);
              setSidebarOpen(false); // close sidebar on mobile after selection
            }}
          >
            <item.icon />
            <span>{item.name}</span>
          </div>
        ))}

        <div className="menuItem">
          <UilSignOutAlt />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
}

