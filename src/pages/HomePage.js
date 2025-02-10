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
      <h1 className='main__heading'>Добро пожаловать в приложение для контроля здоровья!</h1>     
      <h3 className='main__subheading'>Следите за своим здоровьем и достигайте поставленных целей.</h3>
     
      <img className='main__icon' src="img/cardiogramma.gif" alt='cardiogramma' />

      

      <h2 className='main__subheading'>Выберите раздел:</h2>
      <div className='main__nav'>
        <Link to="/habits">
          <button className='main__btn main__btn-habits'>Полезные привычки</button>
        </Link>
        <Link to="/sleep">
          <button className='main__btn main__btn-sleep'>Контроль сна</button>
        </Link>
        <Link to="/water">
          <button className='main__btn main__btn-water'>Количество воды в день</button>
        </Link>
        <Link to="/sport">
          <button className='main__btn main__btn-sport'>Спортивные нагрузки</button>
        </Link>
        <Link to="/nutrition">
          <button className='main__btn main__btn-food'>Продукты</button>
        </Link>
      </div>
      
    </div>  
    </div>
    <Footer />
    </>
    
  );
}

export default HomePage;


