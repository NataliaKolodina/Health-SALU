import React, { useState, useEffect } from "react";
const HabitForm = ({
  addHabit,
  initialHabit = "",
  initialPeriodicity = "1",
}) => {
  const [habit, setHabit] = useState(initialHabit);
  const [periodicity, setPeriodicity] = useState(initialPeriodicity);

  // Функция для отправки данных формы
  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habit, periodicity); // Отправка данных в родительский компонент
    setHabit("");
    setPeriodicity("1");
  };

  // Синхронизация данных при редактировании
  useEffect(() => {
    setHabit(initialHabit);
    setPeriodicity(initialPeriodicity);
  }, [initialHabit, initialPeriodicity]);

  return (
    <form className="site__form site__form-mobile" onSubmit={handleSubmit}>
      <input
        className="site__input"
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter habit"
      />
      <select
        className=" site__input"
        value={periodicity}
        onChange={(e) => setPeriodicity(e.target.value)}
      >
        <option value="1">Every day</option>
        <option value="2">Every 2 days</option>
        <option value="3">Every 3 days</option>
        <option value="7">Once a week</option>
      </select>
      <button className="site__btn" type="submit">
        {initialHabit ? "Save changes" : "Add habit"}
      </button>
    </form>
  );
};

export default HabitForm;
