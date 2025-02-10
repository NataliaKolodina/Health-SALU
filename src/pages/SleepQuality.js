import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const SleepQuality = () => {
  const [sleepHours, setSleepHours] = useState('');
  const [bedtime, setBedtime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bedtimeHour = parseInt(bedtime.split(':')[0], 10);
    const sleep = parseInt(sleepHours, 10);

    let newMessage = '';

    // Проверка на хорошее качество сна
    if (bedtimeHour >= 21 && bedtimeHour <= 23  && sleep >= 7 && sleep <= 9) {
      newMessage = 'Ваш сон считается хорошим. Это важно, потому что качественный сон с 7-9 часами помогает поддерживать здоровье и восстанавливает силы. Убедитесь, что вы ложитесь спать в этом временном окне для наилучшего отдыха.';
    } else {
      if (bedtimeHour < 21) {
        newMessage += 'Рекомендуется ложиться спать в период с 21:00 до 23:59. Это время наиболее благоприятно для организма, так как в этот период происходят важные процессы восстановления. Ложась спать позже или раньше, вы рискуете нарушить циркадные ритмы организма.';
      } else if (sleep < 7) {
        newMessage += ' Сон менее 7 часов вреден, так как это не позволяет организму полностью восстановиться. Рекомендуется спать 7-9 часов, чтобы поддерживать нормальное функционирование организма и нервной системы.';
      } else if (sleep > 9) {
        newMessage += ' Сон более 9 часов также может быть вредным, так как слишком долгий сон может свидетельствовать о проблемах с качеством отдыха или заболеваниях. Лучше придерживаться диапазона 7-9 часов для оптимального восстановления.';
      }
    }

    // Общие рекомендации
    newMessage += `
      \n
      
      Общие рекомендации:      
      1. Создайте расслабляющую обстановку перед сном: избегайте яркого света и электронных устройств.
      2. Поддерживайте регулярный график сна, ложитесь и вставайте в одно и то же время.
      3. Убедитесь, что ваш матрас и подушка комфортные.
      4. Избегайте кофеина и тяжелой пищи за несколько часов до сна.
    `;
    setMessage(newMessage);
  };

  return (
    <>
      <Header />
      <div className='site__size'>
      <div className='container site__space'>
      <h1 className='site__heading'>Оценка качества сна</h1>
      <p className='site__text site__text-habitsinfo'>Контроль за сном важен для поддержания здоровья, энергии и общего благополучия. Качественный сон помогает восстанавливать силы, улучшает память, концентрацию и иммунитет.</p>
      <form className=' site__form-sleep'  onSubmit={handleSubmit}>
        <div className=' site__form-mobile site__form'>
          <label className='site__subtitle'>Количество часов сна:</label>
          <input className='site__input'
            type="number"
            value={sleepHours}
            onChange={(e) => setSleepHours(e.target.value)}
            min="0"
            max="23"
            required
          />
        </div>
        <div className='site__form-mobile site__form'>
          <label className='site__subtitle'>Во сколько вы легли спать? (время в формате HH:MM):</label>
          <input className='site__input'
            type="time"
            value={bedtime}
            onChange={(e) => setBedtime(e.target.value)}
            required
          />
        </div>
        <button className='site__btn' type="submit">Проверить</button>
      </form>

      {message && (
        <div className='site__form-result'>
          <h2 className='site__subtitle'>Рекомендации:</h2>
          <p className="site__text">{message}</p>
        </div>
      )}
   </div>
   </div>
      <Footer />
    
</>

    
  );
};

export default SleepQuality;
