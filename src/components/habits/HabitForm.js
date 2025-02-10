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
        placeholder="Введите привычку"
      />
      <select
        className=" site__input"
        value={periodicity}
        onChange={(e) => setPeriodicity(e.target.value)}
      >
        <option value="1">Каждый день</option>
        <option value="2">Каждые 2 дня</option>
        <option value="3">Каждые 3 дня</option>
        <option value="7">Раз в неделю</option>
      </select>
      <button className="site__btn" type="submit">
        {initialHabit ? "Сохранить изменения" : "Добавить привычку"}
      </button>
    </form>
  );
};

export default HabitForm;
