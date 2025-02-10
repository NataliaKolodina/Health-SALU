import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HabitForm from "../components/habits/HabitForm";
import "../App.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { loadHabits, loadEvents, saveHabits, saveEvents, clearStorage } from "../components/habits/HabitsStorage";

const HabitsPage = () => {
  const [habits, setHabits] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);

  // Загружаем привычки и события из localStorage при монтировании
  useEffect(() => {
    const savedHabits = loadHabits();
    const savedEvents = loadEvents();
    setHabits(savedHabits);
    setEvents(savedEvents);
  }, []);

  // Сохраняем привычки и события в localStorage каждый раз, когда они обновляются
  useEffect(() => {
    if (habits.length > 0) {
      saveHabits(habits);
    }
  }, [habits]);

  useEffect(() => {
    if (events.length > 0) {
      saveEvents(events);
    }
  }, [events]);

  // Функция для добавления или редактирования привычки
  const addHabit = (habit, periodicity) => {
    if (isEditing) {
      const updatedHabits = habits.map((h) =>
        h.id === editingHabit.id ? { ...h, habit, periodicity } : h
      );
      setHabits(updatedHabits);
      setIsEditing(false);
      setEditingHabit(null);
      updateCalendar(updatedHabits);
    } else {
      const newHabit = {
        habit,
        periodicity,
        id: Date.now(),
      };
      setHabits([...habits, newHabit]);
      updateCalendar([...habits, newHabit]);
    }
  };

  // Обновление календаря для привычек
  const updateCalendar = (habitsList) => {
    let newEvents = [];
    habitsList.forEach((habit) => {
      for (let i = 0; i < 30; i += habit.periodicity) {
        let eventDate = new Date(selectedDate);
        eventDate.setDate(selectedDate.getDate() + i);
        newEvents.push({ date: eventDate.toDateString(), habit: habit.habit, id: habit.id });
      }
    });
    setEvents(newEvents);
  };

  // Функция для удаления привычки
  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    setHabits(updatedHabits);
    setEvents(events.filter(event => event.id !== habitId)); // Удаляем все события для этой привычки
  };

  // Функция для редактирования привычки
  const editHabit = (habit) => {
    setIsEditing(true);
    setEditingHabit(habit);
  };

  // Очистка всех привычек
  const clearHabits = () => {
    setHabits([]);
    setEvents([]);
    clearStorage(); // Удаляем все данные из localStorage
  };

  // Получаем привычки на выбранную дату
  const renderHabitsForSelectedDate = () => {
    // Преобразуем selectedDate в строку, чтобы сделать корректное сравнение
    const selectedDateString = selectedDate.toDateString();
  
    // Фильтруем события, чтобы показать только те, которые соответствуют выбранной дате
    const habitsForSelectedDate = events.filter(
      (event) => new Date(event.date).toDateString() === selectedDateString
    );
  
    // Отображаем список привычек для выбранной даты
    return habitsForSelectedDate.map((event, index) => (
      <li className="site__text" key={index}>
        {event.habit}
      </li>
    ));
  };

  return (
    <>
      <Header />
      <div className="site__size">
        <div className="container site__space">
          <h1 className="site__heading">Календарь привычек</h1>
          <h2 className="site__subtitle">А для чего вообще нужны полезные привычки?</h2>
          <p className="site__text">
            Полезные привычки — это ключ к улучшению качества жизни, достижению целей и поддержанию здоровья. Они влияют на нашу продуктивность, эмоциональное состояние и физическое благополучие.
          </p>

          <h2 className="site__subtitle">Введите привычку</h2>
          <HabitForm
            addHabit={addHabit}
            initialHabit={isEditing ? editingHabit.habit : ""}
            initialPeriodicity={isEditing ? editingHabit.periodicity : "1"}
          />

          <div className="site__list  site__list-habits">
            <h3 className="site__subtitle">Ваши привычки:</h3>
            <ul className="site__list site__list-habits site__list-item site__list-padding">
              {habits.map((habit) => (
                <li className=" site__form-mobile site__form site__form-item" key={habit.id}>
                  <p className="site__form-mobile site__text site__text-habits ">{habit.habit} (Периодичность: {habit.periodicity} дня)</p>
                  <div className="site__form">
                  <button className="site__btn site__btn-habits" onClick={() => editHabit(habit)}>Редактировать</button>
                  <button className="site__btn site__btn-habits" onClick={() => deleteHabit(habit.id)}>Удалить</button>
                  </div>
                </li>
              ))}
            </ul>


            {/* Кнопка для очистки списка привычек */}
            {habits.length > 0 && (
              <button className="site__btn site__btn-habits" onClick={clearHabits}>Очистить список</button>
            )}
          </div>

          <div className="site__list site__list-habits site__form-result">
            <h3 className="site__subtitle">Нужно сделать сегодня:</h3>
            <ul className="site__list-habits ">{renderHabitsForSelectedDate()}</ul>
          </div>

          <div className="site__list site__list-habits site__list-center">
          <h4 className="site__text site__text-center">Вот список полезных привычек, которые могут значительно улучшить качество жизни, здоровье и продуктивность. Этот список можно использовать для мотивации и создания здоровых рутин.</h4>
            <Link to="habits-info">

            
            <button className="site__btn ">Список полезных привычек</button>

            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HabitsPage;
