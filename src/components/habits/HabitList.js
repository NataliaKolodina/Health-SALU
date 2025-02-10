import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div className="site__list site__list-habits">
      <h2 className='site__subtitle'>Мои привычки</h2>
      <ul>
        {habits.map((habit) => (
          <li className="site__text" key={habit.id}>
            {habit.habit} — Периодичность: {habit.periodicity} дней
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
