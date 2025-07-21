import React, { use, useEffect, useState } from 'react';
import './HomeContent.css';
import { IoMdPause } from "react-icons/io";
import { GrResume } from "react-icons/gr";
import { MdOutlineStarOutline } from "react-icons/md";
import ReactContext from '../context/ReactContext';
import { SiDiscord } from "react-icons/si";
import { MdOutlineVideocam } from "react-icons/md";
import { SiSlack } from "react-icons/si";

const HomeContent = () => {
    const { pause, togglePause, pomodoro, setPomodoroFun, pauseLong, pauseShort, togglePauseLong, togglePauseShort } = use(ReactContext);
    const [minutes, setMinutes] = useState(
        pomodoro === 'pomodoro' ? 24 : pomodoro === 'shortbreak' ? 4 : 15
    ); const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        if (pomodoro === 'pomodoro') {
            setMinutes(25);
            setSeconds(0);
        } else if (pomodoro === 'shortbreak') {
            setMinutes(4);
            setSeconds(0);
        } else if (pomodoro === 'longbreak') {
            setMinutes(15);
            setSeconds(0);
        }
    }, [pomodoro]);
    useEffect(() => {
        if (pause || pauseShort || pauseLong) return;
        if (minutes === 0 && seconds === 0) return;
        const intervalId = setInterval(() => {
            if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(m => m - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(s => s - 1);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [minutes, seconds, pause]);
    const isPaused = pomodoro === 'pomodoro' ? pause
        : pomodoro === 'shortbreak' ? pauseShort
            : pauseLong;

    const toggleCurrentPause = pomodoro === 'pomodoro' ? togglePause
        : pomodoro === 'shortbreak' ? togglePauseShort
            : togglePauseLong;

    return (
        <div className='grid-container'>
            <div className='pomodoro-container'>
                <div className='pomodoro-card'>
                    <div className="break-type">
                        <button
                            className={`pomodoro-button ${pomodoro === 'pomodoro' ? 'pomodoro-bg' : ''}`}
                            onClick={() => { setPomodoroFun('pomodoro'); }}
                        >
                            POMODORO
                        </button>

                        <button
                            className={`pomodoro-button ${pomodoro === 'shortbreak' ? 'shortbreak-bg' : ''}`}
                            onClick={() => { setPomodoroFun('shortbreak'); }}
                        >
                            SHORT BREAK
                        </button>

                        <button
                            className={`pomodoro-button ${pomodoro === 'longbreak' ? 'longbreak-bg' : ''}`}
                            onClick={() => { setPomodoroFun('longbreak'); }}
                        >
                            LONG BREAK
                        </button>
                    </div>

                    <div
                        className={`timer-pomodoro ${pomodoro === 'pomodoro' ? 'pomodoro-bg' :
                                pomodoro === 'shortbreak' ? 'shortbreak-bg' :
                                    'longbreak-bg'
                            }`}
                    >
                        {minutes}: {seconds}
                    </div>

                    <div className='start-button'>
                        <button
                            className={`timer-pomodoro ${pomodoro === 'pomodoro' ? 'pomodoro-color' :
                                    pomodoro === 'shortbreak' ? 'shortbreak-color' :
                                        'longbreak-color'
                                }`}
                            onClick={toggleCurrentPause}
                        >
                            {isPaused ? 'START' : 'PAUSE'}
                        </button>
                    </div>

                    <div className='motivation'>
                        <p>Work hard. Pause smart. Repeat.</p>
                    </div>
                </div>
            </div>
            <div className='tasks-completed'>
                <div className='tasks-header'>
                    <h1>Projects Completed</h1>
                </div>
                <div className='task-loader'>
                    <div className='loaded-div'></div>
                </div>
                <p className="task-progress-text">6 / 10 Projects Done</p>
                <div className='task-list'>
                    <div className='task-1'>
                        <span className='task-name'>Project 1</span>
                        <span className='task-status'>Completed</span>
                    </div>
                    <div className='task-2'>
                        <span className='task-name'>Project 2</span>
                        <span className='task-status'>In Progress</span>
                    </div>
                    <div className='task-3'>
                        <span className='task-name'>Project 3</span>
                        <span className='task-status'>Pending</span>
                    </div>
                </div>
            </div>
            <div className="meetings-dashboard">
                <div className="meetings-header">
                    <span className="meetings-title">Today's meetings</span>
                    <span className="meetings-count">6</span>
                    <a href="#" className="meetings-viewall">View all &gt;</a>
                </div>
                <div className="meetings-grid">
                    <div className="meeting-card meeting-card-red">
                        <div className="meeting-time-row">
                            <span className="meeting-period">AM</span>
                            <span className="meeting-time">10:00</span>
                            <span className="meeting-icon">
                                <SiDiscord size={25} />
                            </span>
                            <span className="meeting-dot"></span>
                        </div>
                        <div className="meeting-desc">
                            Present the project<br />and gather feedbac...
                        </div>
                    </div>
                    <div className="meeting-card">
                        <div className="meeting-time-row">
                            <span className="meeting-period">PM</span>
                            <span className="meeting-time">01:00</span>
                            <span className="meeting-icon">
                                <MdOutlineVideocam size={25} />
                            </span>
                        </div>
                        <div className="meeting-desc">
                            Meeting<br />with UX team
                        </div>
                    </div>
                    <div className="meeting-card">
                        <div className="meeting-time-row">
                            <span className="meeting-period">PM</span>
                            <span className="meeting-time">03:00</span>
                            <span className="meeting-icon">
                                <SiSlack size={25} />
                            </span>
                        </div>
                        <div className="meeting-desc">
                            Onboarding<br />of the project
                        </div>
                    </div>
                    <div className="meeting-card meeting-card-blue">
                        <div className="meeting-schedule-row">
                            <span className="meeting-plus">+</span>
                        </div>
                        <div className="meeting-desc meeting-desc-blue">
                            Schedule meeting
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeContent;
