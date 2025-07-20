import React, { use, useState } from 'react';
import './Sidenavbar.css';
import { SiOpenai } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import { MdOutlineExitToApp } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ReactContext from '../context/ReactContext';


const Sidenavbar = () => {
    const { extension, setExtension } = use(ReactContext)
    return (
        <div className={extension ? 'sidenavbar-extension'  : 'sidenavbar'}>
            {extension ? <MdKeyboardDoubleArrowRight size={20} className='double-arrow-icon' onClick={setExtension} /> :
                <MdKeyboardDoubleArrowLeft size={20} className='double-arrow-icon' onClick={setExtension} />}
            <div className='sidenavbar-icon'>
                <SiOpenai size={extension ? 40 : 60} className={extension ? 'spinner-icon' : 'spinner-extension-icon'} />
            </div>

            {extension ?
                <div className='tasks-icons'>
                    <div className='icon-with-label'>
                        <MdOutlineDashboard size={40} className='dashboard-icon' />
                        {/* <p>Dashboard</p> */}
                    </div>
                    <div className='icon-with-label'>
                        <MdOutlineStickyNote2 size={40} className='notes-icon' />
                        {/* <p>Notes</p> */}
                    </div>
                    <div className='icon-with-label'>
                        <MdOutlineCalendarMonth size={40} className='calendar-icon' />
                        {/* <p>Calendar</p> */}
                    </div>
                </div> : <div className='extension-tasks-icons'>
                    <div className='extension-dash-div'><MdOutlineDashboard size={extension ? 40 : 25} className='dashboard-icon-extension' /> Dashboard</div>
                    <div className='notes-dash-div'><MdOutlineStickyNote2 size={extension ? 40 : 25} className='notes-icon-extension' /> Notes</div>
                    <div className='calendar-dash-div' ><MdOutlineCalendarMonth size={extension ? 40 : 25} className='calendar-icon-extension' /> Calendar</div>
                </div>
            }
            {extension ?
                <div className='efficiency-icons'>
                    <div className='icon-with-label'>
                        <IoMdTimer size={40} className='timer-icon' />
                        {/* <p>Pomodoro</p> */}
                    </div>
                    <div className='icon-with-label'>
                        <MdElectricBolt size={40} className='assistant-icon' />
                        {/* <p>Assistant</p> */}
                    </div>
                </div>
                :
                <div className='efficiency-icon-icons'>
                    <div className='extension-timer-div'><IoMdTimer size={extension ? 40 : 35} className='timer-icon' /> Pomodoro </div>
                    <div className='assistant-dash-div'><MdElectricBolt size={extension ? 40 : 35} className='assistant-icon' /> Assistant</div>
                </div>
            }

            {extension ?
                <div className='logout-div'>
                    <div className='icon-with-label'>
                        <MdOutlineExitToApp size={40} className='logout-icon' />
                        {/* <p>Logout</p>    */}
                    </div>
                </div>
                :
                <div className='logout-div-extension'>
                    <div className='extension-timer-div'><MdOutlineExitToApp size={extension ? 40 : 35} className='logout-icon' /> Logout </div>

                </div>
            }
        </div>
    )
}

export default Sidenavbar

