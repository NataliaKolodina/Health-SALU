import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const WaterPage = () => {
  const [weight, setWeight] = useState(''); // Вес пользователя
  const [waterIntake, setWaterIntake] = useState(0); // Вода, которую выпил пользователь (в миллилитрах)
  const [dailyGoal, setDailyGoal] = useState(null); // Норма воды на день (в миллилитрах)
  const [inputWater, setInputWater] = useState(''); // Вода, которую пользователь вводит
  const [message, setMessage] = useState(''); // Сообщение для отображения
  const [hasInputToday, setHasInputToday] = useState(false); // Флаг, чтобы отслеживать, начал ли пользователь вводить данные сегодня

  // Загружаем данные из localStorage при монтировании компонента
  useEffect(() => {
    const savedWeight = localStorage.getItem('weight');
    const savedDailyGoal = localStorage.getItem('dailyGoal');
    const savedWaterIntake = localStorage.getItem('waterIntake');
    const lastDate = localStorage.getItem('lastDate');
    const today = new Date().toLocaleDateString();

    if (savedWeight) setWeight(savedWeight);
    if (savedDailyGoal) setDailyGoal(parseInt(savedDailyGoal));

    // Если дата из localStorage не совпадает с текущей, обнуляем потребление воды
    if (lastDate !== today) {
      localStorage.setItem('waterIntake', 0); // Обнуляем количество воды
      setWaterIntake(0);

      // Если вчерашнее потребление было ниже нормы, показываем соответствующее сообщение
      if (savedWaterIntake && parseInt(savedWaterIntake) < savedDailyGoal) {
        setMessage('Вчера Вы не выполнили норму. Попробуйте сегодня. У Вас все получится!');
      } else {
        setMessage(''); // Если норма была выполнена вчера, не показываем сообщение
      }

      localStorage.setItem('lastDate', today); // Обновляем дату последнего сохранения
    } else {
      if (savedWaterIntake) {
        setWaterIntake(parseInt(savedWaterIntake));
      }
      setMessage(''); // Сбрасываем сообщение, если данные актуальны на сегодняшний день
    }
  }, []);

  // Функция для расчета нормы воды
  const calculateDailyGoal = () => {
    const goal = weight * 35; // 35 мл воды на 1 кг веса
    setDailyGoal(goal);
    localStorage.setItem('dailyGoal', goal); // Сохраняем норму в localStorage
  };

  // Функция для обработки ввода веса
  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    localStorage.setItem('weight', newWeight); // Сохраняем вес в localStorage
  };

  // Функция для обработки ввода выпитой воды
  const handleWaterInputChange = (e) => {
    setInputWater(e.target.value);
  };

  // Функция для добавления воды
  const handleAddWater = () => {
    const newWaterIntake = waterIntake + parseInt(inputWater);
    setWaterIntake(newWaterIntake);
    setInputWater(''); // Очищаем поле ввода после добавления
    localStorage.setItem('waterIntake', newWaterIntake); // Сохраняем потребление воды в localStorage

    // Когда пользователь вводит первую информацию о потребленной воде, убираем сообщение
    if (!hasInputToday) {
      setMessage(''); // Убираем сообщение о недостаточном потреблении воды вчера
      setHasInputToday(true); // Устанавливаем флаг, что пользователь начал вводить воду
    }
  };

  // Функция для расчета оставшейся воды
  const remainingWater = dailyGoal ? dailyGoal - waterIntake : 0;

  return (
    <>
      <Header />
      <div className='site__size'>
        <div className='container site__space'>
          <h1 className='site__heading'>Отслеживание потребления воды</h1>
          <p className='site__text site__text-center'>
            Важно пить суточную норму воды, чтобы поддерживать гидратацию организма, улучшать обмен веществ, поддерживать здоровье кожи, нормализовать работу почек и других органов. Недостаток воды может привести к усталости, головным болям, снижению концентрации и нарушению работы внутренних систем.
          </p>

          {/* Ввод веса */}
          <div className='site__form-water'>
            <div className='site__form site__form-mobile'>
              <h2 className='site__subtitle'>Введите ваш вес (кг): </h2>
              <label>
                <input
                  className='site__input'
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                />
              </label>
              <button className='site__btn' onClick={calculateDailyGoal} disabled={!weight}>
                ОК
              </button>
            </div>

            {/* Если вес введен, показываем норму воды */}
            {dailyGoal && (
              <div>
                <h2 className='site__subtitle'>Норма воды на день: {dailyGoal} мл</h2>
              </div>
            )}

            {/* Ввод выпитой воды */}
            <div className=' site__form site__form-mobile'>
              <h2 className='site__subtitle'>Сколько воды вы выпили (мл): </h2>
              <label>
                <input
                  className='site__input'
                  type="number"
                  value={inputWater}
                  onChange={handleWaterInputChange}
                  disabled={!dailyGoal}
                />
              </label>
              <button className='site__btn' onClick={handleAddWater} disabled={!inputWater}>
                Добавить
              </button>
            </div>

            {/* Текущий статус потребления воды */}
            {dailyGoal && (
              <div>
                <h3 className='site__subtitle'>Вы выпили: {waterIntake} мл</h3>
                <h3 className='site__subtitle'>Осталось выпить: {remainingWater} мл</h3>
              </div>
            )}

            {/* Сообщение, если цель достигнута */}
            {remainingWater <= 0 && dailyGoal > 0 && (
              <div>
                <h3 className='site__text site__form-result'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#66bb6a">
                    <path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/>
                  </svg>  
                  Поздравляем! Вы выпили достаточное количество воды!
                </h3>
              </div>
            )}

            {/* Сообщение о недостаточном потреблении воды вчера */}
            {message && !hasInputToday && (
              <div>
                <h3 className='site__text site__form-result'>{message}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaterPage;
