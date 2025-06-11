import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import YogaVideo from './YogaVideo';

const YogaAtHome = () => {
  return (
    <>
      <Header />
      <div className='site__size'>
        <div className='container site__space'>
          <h1 className='site__heading'>Yoga at Home</h1>
          <div className='btn__foot'>
            {/* Back button */}
            <Link to="/sport">
              <button className='site__btn'>Back</button>
            </Link>
          </div>

          <h2 className='site__subtitle site__text-center'>How to organize yoga practice at home?</h2>
          <p className="site__text">
            Practicing yoga at home can be just as effective as in a studio if you create a comfortable atmosphere and follow a few simple recommendations:
          </p>
          <ul>
            <li className="site__text"><strong>Create a space</strong>: Find a quiet place where you won't be disturbed. Lay out a mat and remove unnecessary items.</li>
            <li className="site__text"><strong>Wear comfortable clothes</strong>: Wear clothing that doesn't restrict your movements.</li>
            <li className="site__text"><strong>Set a time</strong>: Find time in your schedule for regular yoga practice. It could be in the morning before work or in the evening after your workday.</li>
            <li className="site__text"><strong>Don't rush</strong>: Don't hurry through the asanas. Practice slowly and mindfully, listening to your body.</li>
            <li className="site__text"><strong>Use online resources</strong>: You can find plenty of video lessons for different skill levels on YouTube.</li>
            <li className="site__text"><strong>End with relaxation</strong>: Finish each session with meditation or savasana to restore yourself.</li>
          </ul>

          <h2 className='tablet-center site__subtitle site__subtitle-sport site__text-center'>6 best yoga video lessons for home practice</h2>
          <YogaVideo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default YogaAtHome;
