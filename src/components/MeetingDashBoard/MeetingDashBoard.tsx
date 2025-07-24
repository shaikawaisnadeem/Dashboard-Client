import React from 'react'
import './MeetingDashBoard.css'
import { SiDiscord } from "react-icons/si";
import { MdOutlineVideocam } from "react-icons/md";
import { SiSlack } from "react-icons/si";

const MeetingDashBoard = () => {
  return (
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
  )
}

export default MeetingDashBoard