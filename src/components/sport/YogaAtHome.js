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
      <h1 className='site__heading'>Йога дома</h1>
      <div className='btn__foot'>
              {/* Кнопка назад */}
            <Link to="/sport">
              <button className='site__btn' >Назад</button>
            </Link>
            
            </div>
    
      <h2 className='site__subtitle site__text-center'>Как организовать занятие йогой дома?</h2>
      <p className="site__text">
        Занятия йогой дома могут быть такими же эффективными, как и в студии, если вы создадите комфортную атмосферу и будете следовать нескольким простым рекомендациям:
      </p>
      <ul>
        <li className="site__text"><strong>Создайте пространство</strong>: Найдите тихое место, где вас не будут отвлекать. Расстелите коврик и уберите лишние предметы.</li>
        <li className="site__text"><strong>Используйте комфортную одежду</strong>: Одевайте удобную одежду, которая не будет стеснять движений.</li>
        <li className="site__text"><strong>Установите время</strong>: Найдите время в своем расписании для регулярных занятий йогой. Это может быть утром перед работой или вечером после рабочего дня.</li>
        <li className="site__text"><strong>Не спешите</strong>: Не торопитесь выполнять асаны. Практикуйте медленно, внимательно, слушая свое тело.</li>
        <li className="site__text"><strong>Используйте онлайн-ресурсы</strong>: Вы можете найти множество видеоуроков для различных уровней подготовки на YouTube.</li>
        <li className="site__text"><strong>Завершайте практику расслаблением</strong>: Заканчивайте каждое занятие медитацией или шавасаной для восстановления.</li>
      </ul>

      <h2 className='tablet-center site__subtitle site__subtitle-sport site__text-center'>6 лучших видеоуроков по йоге для дома</h2>
      <YogaVideo />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default YogaAtHome;



