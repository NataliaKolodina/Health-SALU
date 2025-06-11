import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const WaterPage = () => {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(null);
  const [inputWater, setInputWater] = useState('');
  const [message, setMessage] = useState('');
  const [hasInputToday, setHasInputToday] = useState(false);

  useEffect(() => {
    const savedWeight = localStorage.getItem('weight');
    const savedDailyGoal = localStorage.getItem('dailyGoal');
    const savedWaterIntake = localStorage.getItem('waterIntake');
    const lastDate = localStorage.getItem('lastDate');
    const today = new Date().toLocaleDateString();

    if (savedWeight) setWeight(savedWeight);
    if (savedDailyGoal) setDailyGoal(parseInt(savedDailyGoal));

    if (lastDate !== today) {
      localStorage.setItem('waterIntake', 0);
      setWaterIntake(0);

      if (savedWaterIntake && parseInt(savedWaterIntake) < savedDailyGoal) {
        setMessage("You didn't reach your goal yesterday. Try again today – you can do it!");
      } else {
        setMessage('');
      }

      localStorage.setItem('lastDate', today);
    } else {
      if (savedWaterIntake) {
        setWaterIntake(parseInt(savedWaterIntake));
      }
      setMessage('');
    }
  }, []);

  const calculateDailyGoal = () => {
    const goal = weight * 35;
    setDailyGoal(goal);
    localStorage.setItem('dailyGoal', goal);
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    localStorage.setItem('weight', newWeight);
  };

  const handleWaterInputChange = (e) => {
    setInputWater(e.target.value);
  };

  const handleAddWater = () => {
    const newWaterIntake = waterIntake + parseInt(inputWater);
    setWaterIntake(newWaterIntake);
    setInputWater('');
    localStorage.setItem('waterIntake', newWaterIntake);

    if (!hasInputToday) {
      setMessage('');
      setHasInputToday(true);
    }
  };

  const remainingWater = dailyGoal ? dailyGoal - waterIntake : 0;

  return (
    <>
      <Header />
      <div className='site__size'>
        <div className='container site__space'>
          <h1 className='site__heading'>Water Intake Tracker</h1>
          <p className='site__text site__text-center'>
            It's important to drink enough water daily to stay hydrated, boost metabolism, maintain healthy skin, and support kidney and overall body function. A lack of water can lead to fatigue, headaches, poor concentration, and internal imbalances.
          </p>

          <div className='site__form-water'>
            <div className='site__form site__form-mobile'>
              <h2 className='site__subtitle'>Enter your weight (kg):</h2>
              <label>
                <input
                  className='site__input'
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                />
              </label>
              <button className='site__btn' onClick={calculateDailyGoal} disabled={!weight}>
                OK
              </button>
            </div>

            {dailyGoal && (
              <div>
                <h2 className='site__subtitle'>Daily water goal: {dailyGoal} ml</h2>
              </div>
            )}

            <div className=' site__form site__form-mobile'>
              <h2 className='site__subtitle'>How much water did you drink (ml):</h2>
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
                Add
              </button>
            </div>

            {dailyGoal && (
              <div>
                <h3 className='site__subtitle'>You drank: {waterIntake} ml</h3>
                <h3 className='site__subtitle'>Remaining: {remainingWater} ml</h3>
              </div>
            )}

            {remainingWater <= 0 && dailyGoal > 0 && (
              <div>
                <h3 className='site__text site__form-result'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#66bb6a">
                    <path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/>
                  </svg>  
                  Congratulations! You have reached your daily water intake goal!
                </h3>
              </div>
            )}

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
