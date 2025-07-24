import React, { use } from 'react'
import './Statistics.css'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import Navbar from '../navbar/Navbar'
import ReactContext from '../context/ReactContext'
import LineGraph from '../LineGraph/LineGraph'
import PieChart from '../PieChart/PieChart'
import BarChart from '../BarChart/BarChart'


const Statistics = () => {
    const { extension } = use(ReactContext)
  return (
     <div className={extension ? 'home-page-extension' : 'home-page'}>
      <div className={extension ? 'sidenavbar-home-page-extension' : 'sidenavbar-home-page'}>
        <Sidenavbar />
      </div>
      <div className="main-content-area">
        <Navbar />
            <div className='main-top-div-statistics'>
                <h1>Analytics Dashboard</h1>
                <p>Track your productivity and performance</p>
            </div>
        <div className='statistics-container'>
            <div className='line-chart'>
                <LineGraph/>
            </div>
             <div className='pie-chart'>
                <PieChart/>
            </div>
            <div className='bar-chart'>
                <BarChart/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics