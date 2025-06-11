import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HabitForm from "../components/habits/HabitForm";
import "../App.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import {
  loadHabits,
  loadEvents,
  saveHabits,
  saveEvents,
  clearStorage,
} from "../components/habits/HabitsStorage";

const HabitsPage = () => {
  const [habits, setHabits] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);

  useEffect(() => {
    const savedHabits = loadHabits();
    const savedEvents = loadEvents();
    setHabits(savedHabits);
    setEvents(savedEvents);
  }, []);

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

  const updateCalendar = (habitsList) => {
    let newEvents = [];
    habitsList.forEach((habit) => {
      for (let i = 0; i < 30; i += habit.periodicity) {
        let eventDate = new Date(selectedDate);
        eventDate.setDate(selectedDate.getDate() + i);
        newEvents.push({
          date: eventDate.toDateString(),
          habit: habit.habit,
          id: habit.id,
        });
      }
    });
    setEvents(newEvents);
  };

  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitId);
    setHabits(updatedHabits);
    setEvents(events.filter((event) => event.id !== habitId));
  };

  const editHabit = (habit) => {
    setIsEditing(true);
    setEditingHabit(habit);
  };

  const clearHabits = () => {
    setHabits([]);
    setEvents([]);
    clearStorage();
  };

  const renderHabitsForSelectedDate = () => {
    const selectedDateString = selectedDate.toDateString();
    const habitsForSelectedDate = events.filter(
      (event) => new Date(event.date).toDateString() === selectedDateString
    );

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
          <h1 className="site__heading">Habit Calendar</h1>
          <h2 className="site__subtitle">Why build good habits?</h2>
          <p className="site__text">
            Healthy habits are the key to improving quality of life, achieving goals, and maintaining wellness.
            They impact our productivity, emotional well-being, and physical health.
          </p>

          <h2 className="site__subtitle">Enter a habit</h2>
          <HabitForm
            addHabit={addHabit}
            initialHabit={isEditing ? editingHabit.habit : ""}
            initialPeriodicity={isEditing ? editingHabit.periodicity : "1"}
          />

          <div className="site__list  site__list-habits">
            <h3 className="site__subtitle">Your habits:</h3>
            <ul className="site__list site__list-habits site__list-item site__list-padding">
              {habits.map((habit) => (
                <li className="site__form-mobile site__form site__form-item" key={habit.id}>
                  <p className="site__form-mobile site__text site__text-habits">
                    {habit.habit} (Frequency: every {habit.periodicity} day{habit.periodicity > 1 ? "s" : ""})
                  </p>
                  <div className="site__form">
                    <button className="site__btn site__btn-habits" onClick={() => editHabit(habit)}>
                      Edit
                    </button>
                    <button className="site__btn site__btn-habits" onClick={() => deleteHabit(habit.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {habits.length > 0 && (
              <button className="site__btn site__btn-habits" onClick={clearHabits}>
                Clear all
              </button>
            )}
          </div>

          <div className="site__list site__list-habits site__form-result">
            <h3 className="site__subtitle">Tasks for today:</h3>
            <ul className="site__list-habits">{renderHabitsForSelectedDate()}</ul>
          </div>

          <div className="site__list site__list-habits site__list-center">
            <h4 className="site__text site__text-center">
              Here's a list of good habits that can greatly improve your quality of life, health, and productivity.
              Use this list for motivation and to build a healthier routine.
            </h4>
            <Link to="habits-info">
              <button className="site__btn">List of Good Habits</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HabitsPage;
