import React, { use, useEffect, useState } from 'react';
import './Pomodoro.css';
import { IoMdPause } from "react-icons/io";
import { GrResume } from "react-icons/gr";
import { MdOutlineStarOutline } from "react-icons/md";
import ReactContext from '../context/ReactContext';

const Pomodoro = () => {
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
  )
}

export default Pomodoro