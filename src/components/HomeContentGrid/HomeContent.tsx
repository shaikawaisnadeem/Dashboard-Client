import React from 'react';
import './HomeContent.css';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import MeetingDashBoard from '../MeetingDashBoard/MeetingDashBoard';
import Pomodoro from '../Pomodoro/Pomodoro';

const HomeContent = () => {
    
    return (
        <div className='grid-container'>
            <Pomodoro/>
            <CompletedTasks/>
             <MeetingDashBoard/>                       
        </div>
    );
};

export default HomeContent;
