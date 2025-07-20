import React, { use } from 'react';
import './Home.css';
import Navbar from '../../navbar/Navbar';
import Sidenavbar from '../../sidenavbar/Sidenavbar';
import ReactContext from '../../context/ReactContext';
import HomeContent from '../../HomeContentGrid/HomeContent';

const Home = () => {
  const { extension } = use(ReactContext);

  return (
    <div className={extension ? 'home-page-extension' : 'home-page'}>
      <div className={extension ? 'sidenavbar-home-page-extension' : 'sidenavbar-home-page'}>
        <Sidenavbar />
      </div>
      <div className="main-content-area">
        <Navbar />
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
