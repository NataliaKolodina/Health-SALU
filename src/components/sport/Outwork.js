import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import OutworkVideo from "./OutworkVideo";

const Outwork = () => {
  return (
    <>
      <Header />
      <div className="site__size">
        <div className="container site__space">
          <div className="btn__foot">
            {/* Кнопка назад */}
            <Link to="/sport">
              <button className="site__btn">Назад</button>
            </Link>
          </div>

          <h1 className="site__heading">Спорт на свежем воздухе</h1>
          <h2 className="site__subtitle site__text-center">
            Как организовать занятие спортом на свежем воздухе без инвентаря?
          </h2>
          <p className="site__text">
            Занятия спортом на свежем воздухе — это отличная возможность
            укрепить тело и зарядиться энергией. Не нужно много оборудования,
            чтобы тренироваться на улице. Вот несколько советов, как
            организовать тренировку:
          </p>
          <ul>
            <li className="site__text">
              <strong>Выберите подходящее место</strong>: Найдите удобную
              площадку на свежем воздухе, которая будет безопасной и достаточно
              просторной для упражнений (парк, спортплощадка, пляж или просто
              сквер).
            </li>
            <li className="site__text">
              <strong>Тренируйтесь в комфортной одежде</strong>: Одевайте
              удобную одежду, подходящую для физической активности на улице, и
              не забудьте о подходящей обуви.
            </li>
            <li className="site__text">
              <strong>Начинайте с разминки</strong>: Разминка необходима, чтобы
              разогреть мышцы и избежать травм. Можно делать легкие
              кардио-упражнения, такие как прыжки или бег на месте.
            </li>
            <li className="site__text">
              <strong>Используйте собственный вес</strong>: Для тренировки можно
              использовать упражнения с собственным весом тела, такие как
              отжимания, приседания, планка и т.д.
            </li>
            <li className="site__text">
              <strong>Не забывайте о растяжке</strong>: После тренировки
              обязательно сделайте растяжку, чтобы мышцы расслабились и
              восстановились.
            </li>
            <li className="site__text">
              <strong>Слушайте свое тело</strong>: Важно тренироваться в своем
              темпе, не перегружать себя и отдыхать между подходами, если нужно.
            </li>
            <li className="site__text">
              <strong>Тренируйтесь регулярно</strong>: Для достижения
              результатов важно заниматься спортом на свежем воздухе хотя бы 3-4
              раза в неделю.
            </li>
          </ul>
          <h2 className="tablet-center site__subtitle site__subtitle-sport site__text-center">
            6 лучших видеоуроков по спорту на свежем воздухе
          </h2>
          <OutworkVideo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Outwork;
