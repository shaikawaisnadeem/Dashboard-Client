import React, { use, useState } from 'react'
import './Navbar.css';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar';
import ReactContext from '../context/ReactContext';



const Navbar = () => {
    const {extension} = use(ReactContext)
  return (
    <div className={extension ? 'navbar-sidenavbar-wrapper' : 'navbar-sidenavbar-wrapper-extension'}>
        <div className='sidenavbar-div'>
            <Sidenavbar/>
        </div>
        <div className='navbar'>
        <div className='project-name'>
            <h1>Dashboard</h1>
        </div>
        <div className='navbar-profile'>
            <div className='toggle-theme-button'>
                <MdOutlineLightMode className='light-mode-icon' size={27} />
                <MdOutlineDarkMode className='dark-mode-icon' size={27}/>
            </div>
            <div className='notification'>
                <IoMdNotificationsOutline className='notification-icon'  size={27}/>
                <p>10</p>
            </div>
            <div className='profile-user-icon'>
                <FaUser  className='user-icon' size={30}/>
                <div className='user-active'>
                    <div className='active-status'>Status: Active</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar