import React from 'react'
import './CompletedTasks.css'

const CompletedTasks = () => {
  return (
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
  )
}

export default CompletedTasks