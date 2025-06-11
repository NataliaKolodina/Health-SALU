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

    // Check for good sleep quality
    if (bedtimeHour >= 21 && bedtimeHour <= 23 && sleep >= 7 && sleep <= 9) {
      newMessage = 'Your sleep is considered good. This is important because quality sleep of 7-9 hours helps maintain health and restores energy. Make sure to go to bed during this time window for the best rest.';
    } else {
      if (bedtimeHour < 21) {
        newMessage += 'It is recommended to go to bed between 21:00 and 23:59. This time is most beneficial for the body, as important recovery processes take place. Going to bed earlier or later may disrupt the body’s circadian rhythms.';
      } else if (sleep < 7) {
        newMessage += ' Sleeping less than 7 hours is harmful because it doesn’t allow the body to fully recover. It is recommended to sleep 7-9 hours to support proper functioning of the body and nervous system.';
      } else if (sleep > 9) {
        newMessage += ' Sleeping more than 9 hours may also be harmful, as excessive sleep can be a sign of poor sleep quality or health issues. It’s better to stick to the 7-9 hour range for optimal recovery.';
      }
    }

    // General recommendations
    newMessage += `
      \n
      
      General recommendations:      
      1. Create a relaxing environment before bed: avoid bright lights and electronic devices.
      2. Maintain a consistent sleep schedule—go to bed and wake up at the same time each day.
      3. Make sure your mattress and pillow are comfortable.
      4. Avoid caffeine and heavy meals a few hours before sleep.
    `;
    setMessage(newMessage);
  };

  return (
    <>
      <Header />
      <div className='site__size'>
      <div className='container site__space'>
      <h1 className='site__heading'>Sleep Quality Assessment</h1>
      <p className='site__text site__text-habitsinfo'>Monitoring your sleep is important for maintaining health, energy, and overall well-being. Quality sleep helps restore energy, improve memory, focus, and immunity.</p>
      <form className='site__form-sleep' onSubmit={handleSubmit}>
        <div className='site__form-mobile site__form'>
          <label className='site__subtitle'>Number of hours slept:</label>
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
          <label className='site__subtitle'>What time did you go to bed? (format HH:MM):</label>
          <input className='site__input'
            type="time"
            value={bedtime}
            onChange={(e) => setBedtime(e.target.value)}
            required
          />
        </div>
        <button className='site__btn' type="submit">Check</button>
      </form>

      {message && (
        <div className='site__form-result'>
          <h2 className='site__subtitle'>Recommendations:</h2>
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
