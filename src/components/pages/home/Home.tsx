import React from 'react'
import './Home.css'
import Navbar from '../../navbar/Navbar'
import { IoMdPause } from "react-icons/io";

const Home = () => {
  return (
    <div className='home-page'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      {/* <div className='grid-container'>
        <div className='pomodoro-container'>
          <div className='pomodoro-card'>
            <h1 className='pomodoro-title'>Color Palette Selection</h1>
            <p className='pomodoro-subtitle'>Over9k: Gamers App</p>
            <div className='pomodoro-player'>
              <IoMdPause className='pause-icon' />
            </div>
            <div className='pomodoro-timer'>
                00:57:56
            </div>
            <div className='pomodoro-limits'>
              <div className='limit-item'>
                <div className='limit-label'>Today</div>
                <div className='limit-time'>00:57:56</div>
              </div>
              <div className='limit-item'>
                <div className='limit-label'>Limits</div>
                <div className='limit-time'>06:00:00</div>
              </div>
            </div>
          </div>
      </div>
      </div> */}
    </div>
  )
}

export default Home
