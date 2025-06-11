import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div className="site__list site__list-habits">
      <h2 className='site__subtitle'>My Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li className="site__text" key={habit.id}>
            {habit.habit} — Frequency: {habit.periodicity} days
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
