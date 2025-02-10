import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitsPage from "./pages/HabitsPage";
import HabitsInfoPage from "./components/habits/HabitsInfoPage";
import WaterPage from "./pages/WaterPage";
import SportPage from "./pages/SportPage";
import YogaAtHome from "./components/sport/YogaAtHome";
import Outwork from "./components/sport/Outwork";
import SleepQuality  from "./pages/SleepQuality";
import NutritionPage from "./pages/NutritionPage";

import './App.css';
import './styles/reset.css';



function App() {
  return (
    <Router>
       <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/habits/habits-info" element={<HabitsInfoPage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/sleep" element={<SleepQuality />} />
          <Route path="/sport" element={<SportPage />} />
          <Route path="/sport/yoga" element={<YogaAtHome />} />
          <Route path="/sport/outwork" element={<Outwork />} />
          <Route path="/nutrition" element={<NutritionPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
