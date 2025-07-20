import React, { useEffect, useState } from 'react';
import './HomeContent.css';
import { IoMdPause } from "react-icons/io";
import { GrResume } from "react-icons/gr";

const HomeContent = () => {
    const [pause, setPause] = useState(false);
    console.log(pause )
    const togglePause = () => {
        setPause(prev => !prev);
    };
    const [minutes,setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    useEffect(()=>{
        const 
    })
    
   
    return (
        <div className='grid-container'>
            <div className='pomodoro-container'>
                <div className='pomodoro-card'>
                    <h1 className='pomodoro-title'>Color Palette Selection</h1>
                    <p className='pomodoro-subtitle'>Over9k: Gamers App</p>
                    
                    <div className='pomodoro-player' onClick={togglePause}>
                        {pause ? (
                            <GrResume className='resume-icon'/>
                        ) : (
                            <IoMdPause className='pause-icon' />
                        )}
                    </div>

                    <div className='pomodoro-limits'>
                        <div className='limit-item'>
                            <div className='limit-label'>Today</div>
                            <div className='limit-time'>00:59:59</div>
                        </div>
                        <div className='limit-item'>
                            <div className='limit-label'>Limits</div>
                            <div className='limit-time'>01:00:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
