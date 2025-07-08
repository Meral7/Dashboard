import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../../assets/images/logo.png';
import {sidebarData} from '../../../data/data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
export default function Sidebar() {
    const [active, setActive] = useState(0);
    return (
        <div className='Sidebar flex flex-col relative p-t-[4rem] transition-all duration-300 ease-in'>
            {/* logo */}
            <div className='logo flex h-[5rem] font-bold text-xl g-[1rem] items-center justify-center h-[4%]' >
                <img src={logo} alt='logo' className='w-[3rem] h-[3rem]' />
                <span>sh<span className=''>o</span>p</span>
            </div>
            {/* menu */}
            <div className='menu m-t-[4rem] flex flex-col gap-[2rem] '>
                {sidebarData.map((item, index)=>{return(<div key={index} className={active===index?'menuItem active ' :'menuItem'} onClick={()=>setActive(index)}  >
                    <item.icon/>  
                    <span> {item.name}</span>
                </div>)})}
                
                <div className="menuItem ">
                    <div> <UilSignOutAlt />  </div>
                    <div> sign out</div>
                </div>
            </div>
        </div>
    )
}
