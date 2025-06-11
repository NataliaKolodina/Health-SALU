import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function HomePage() {
  return (
    <>
      <Header />
      <div className="site__size">
        <div className='container site__space main'>
          <h1 className='main__heading'>Welcome to the Health Tracking App!</h1>     
          <h3 className='main__subheading'>Track your health and achieve your goals.</h3>

          <img className='main__icon' src=" /Health-SALU/img/cardiogramma.gif" alt='cardiogramma' />

          <h2 className='main__subheading'>Choose a section:</h2>
          <div className='main__nav'>
            <Link to="/habits">
              <button className='main__btn main__btn-habits'>Healthy Habits</button>
            </Link>
            <Link to="/sleep">
              <button className='main__btn main__btn-sleep'>Sleep Tracking</button>
            </Link>
            <Link to="/water">
              <button className='main__btn main__btn-water'>Daily Water Intake</button>
            </Link>
            <Link to="/sport">
              <button className='main__btn main__btn-sport'>Physical Activity</button>
            </Link>
            <Link to="/nutrition">
              <button className='main__btn main__btn-food'>Nutrition</button>
            </Link>
          </div>
        </div>  
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
