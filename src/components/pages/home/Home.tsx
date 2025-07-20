import React, { use } from 'react'
import './Home.css'
import Navbar from '../../navbar/Navbar'
import Sidenavbar from '../../sidenavbar/Sidenavbar';
import ReactContext from '../../context/ReactContext';
import HomeContent from '../../HomeContentGrid/HomeContent';

const Home = () => {
  const {extension} = use(ReactContext)
  return (
    <div className='home-page'>
      <div className={'sidenavbar-home-page'}>
        <Sidenavbar/>
      </div>
      <div className={extension ? 'navbar-extension-home-page' : 'navbar-home-page'}>
        <Navbar/>
        <HomeContent/>
        </div>
     </div>
  )
}

export default Home
