import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

// Импортируем данные из файла JSON
import habitsData from '../../json/habits.json';

function HabitsInfoPage() {
  const [habits, setHabits] = useState([]);

  // Загружаем привычки при монтировании компонента
  useEffect(() => {
    setHabits(habitsData);
  }, []);

  return (
    <>
    <Header />
    <div className='site-size'>
    <div className='container site__space'>
    <div className='btn__foot'>
        {/* Кнопка назад */}
      <Link to="/habits">
        <button className='site__btn' >Назад</button>
      </Link>
      
      </div>
      <h1 className='site__heading'>Полезные привычки и их польза</h1>
      <p className='site__subtitle site__subtitle-habits'>Эти привычки можно адаптировать под свой график и предпочтения, в зависимости от того, какая периодичность вам подходит. Важно помнить, что поддержание баланса между активностью и отдыхом способствует более устойчивому и гармоничному состоянию здоровья.</p>
      <div className='site__list'>
      {habits.map((habit) => (
        <div key={habit.id} >
          
          <h3 className='site__item habits-info__item'>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#388e3c"><path d="M480-885q49 59 88 109.5t70 96.5l242-181v380q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-380l242 181q31-45 70-96t88-110ZM160-700v220q0 44 11.5 84.5T203-320q-2-10-2.5-19.5T200-360q0-57 18.5-117.5T279-610l-119-90Zm320-60Q370-626 325-526t-45 166q0 83 58.5 141.5T480-160q83 0 141.5-58.5T680-360q0-66-45-167T480-760Zm320 60-119 89q42 72 60.5 132.5T760-360q0 11-.5 20.5T757-320q20-35 31.5-75.5T800-480v-220Z"/></svg>
            {habit.title}</h3>
          <p className="site__text">{habit.description}</p>
        </div>
      ))}
      </div>

      
    </div>
    </div>
    <Footer />
    
    </>
  );
}

export default HabitsInfoPage;
