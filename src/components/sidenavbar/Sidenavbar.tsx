import React, { use } from 'react';
import './Sidenavbar.css';
import { SiOpenai } from "react-icons/si";
import { MdOutlineDashboard, MdOutlineStickyNote2, MdOutlineCalendarMonth, MdElectricBolt, MdOutlineExitToApp, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import ReactContext from '../context/ReactContext';
import { NavLink } from 'react-router-dom';
import { PiGraphDuotone } from "react-icons/pi";


const Sidenavbar = () => {
    const { extension, setExtension } = use(ReactContext);

    return (
        <div className={extension ? 'sidenavbar-extension' : 'sidenavbar'}>
            {extension ? 
                <MdKeyboardDoubleArrowRight size={20} className='double-arrow-icon' onClick={setExtension} /> :
                <MdKeyboardDoubleArrowLeft size={20} className='double-arrow-icon' onClick={setExtension} />
            }

            <div className='sidenavbar-icon'>
                <SiOpenai size={extension ? 40 : 60} className={extension ? 'spinner-icon' : 'spinner-extension-icon'} />
            </div>

            {extension ? (
                <div className='tasks-icons'>
                    <NavLink to="/" className='icon-with-label'>
                        <MdOutlineDashboard size={40} className='dashboard-icon' />
                    </NavLink>
                    <NavLink to="/notes" className='icon-with-label'>
                        <MdOutlineStickyNote2 size={40} className='notes-icon' />
                    </NavLink>
                    <NavLink to="/calendar" className='icon-with-label'>
                        <MdOutlineCalendarMonth size={40} className='calendar-icon' />
                    </NavLink>
                </div>
            ) : (
                <div className='extension-tasks-icons'>
                    <NavLink to="/" className='extension-dash-div'>
                        <MdOutlineDashboard size={extension ? 40 : 25} className='dashboard-icon-extension' /> Dashboard
                    </NavLink>
                    <NavLink to="/notes" className='notes-dash-div'>
                        <MdOutlineStickyNote2 size={extension ? 40 : 25} className='notes-icon-extension' /> Notes
                    </NavLink>
                    <NavLink to="/calendar" className='calendar-dash-div'>
                        <MdOutlineCalendarMonth size={extension ? 40 : 25} className='calendar-icon-extension' /> Calendar
                    </NavLink>
                </div>
            )}

            {extension ? (
                <div className='efficiency-icons'>
                    <NavLink to="/pomodoro" className='icon-with-label'>
                        <IoMdTimer size={40} className='timer-icon' />
                    </NavLink>
                    <NavLink to="/statistics" className='icon-with-label'>
                        <PiGraphDuotone size={40} className='timer-icon' />
                    </NavLink>
                    <NavLink to="/assistant" className='icon-with-label'>
                        <MdElectricBolt size={40} className='assistant-icon' />
                    </NavLink>
                </div>
            ) : (
                <div className='efficiency-icon-icons'>
                    <NavLink to="/pomodoro" className='extension-timer-div'>
                        <IoMdTimer size={extension ? 40 : 35} className='timer-icon' /> Pomodoro
                    </NavLink>
                    <NavLink to="/statistics" className='extension-timer-div'>
                        <PiGraphDuotone  size={extension ? 40 : 35} className='timer-icon' /> Statistics
                    </NavLink>
                    <NavLink to="/assistant" className='assistant-dash-div'>
                        <MdElectricBolt size={extension ? 40 : 35} className='assistant-icon' /> Assistant
                    </NavLink>
                </div>
            )}

            {extension ? (
                <div className='logout-div'>
                    <NavLink to="/logout" className='icon-with-label'>
                        <MdOutlineExitToApp size={40} className='logout-icon' />
                    </NavLink>
                </div>
            ) : (
                <div className='logout-div-extension'>
                    <NavLink to="/logout" className='extension-timer-div'>
                        <MdOutlineExitToApp size={extension ? 40 : 35} className='logout-icon' /> Logout
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Sidenavbar;
