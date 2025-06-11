import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import OutworkVideo from "./OutworkVideo";

const Outwork = () => {
  return (
    <>
      <Header />
      <div className="site__size">
        <div className="container site__space">
          <div className="btn__foot">
            {/* Back button */}
            <Link to="/sport">
              <button className="site__btn">Back</button>
            </Link>
          </div>

          <h1 className="site__heading">Outdoor Sports</h1>
          <h2 className="site__subtitle site__text-center">
            How to organize outdoor workouts without equipment?
          </h2>
          <p className="site__text">
            Outdoor workouts are a great opportunity to strengthen your body and recharge your energy. You don’t need much equipment to train outside. Here are some tips on how to organize your workout:
          </p>
          <ul>
            <li className="site__text">
              <strong>Choose a suitable location</strong>: Find a convenient outdoor area that is safe and spacious enough for exercises (park, sports ground, beach, or just a square).
            </li>
            <li className="site__text">
              <strong>Wear comfortable clothing</strong>: Dress in comfortable clothes suitable for physical activity outside, and don’t forget proper footwear.
            </li>
            <li className="site__text">
              <strong>Start with a warm-up</strong>: Warming up is necessary to prepare your muscles and prevent injuries. You can do light cardio exercises such as jumping or running in place.
            </li>
            <li className="site__text">
              <strong>Use your body weight</strong>: For training, you can use bodyweight exercises like push-ups, squats, planks, etc.
            </li>
            <li className="site__text">
              <strong>Don’t forget to stretch</strong>: After your workout, be sure to stretch to relax and recover your muscles.
            </li>
            <li className="site__text">
              <strong>Listen to your body</strong>: It’s important to train at your own pace, not overload yourself, and rest between sets if needed.
            </li>
            <li className="site__text">
              <strong>Train regularly</strong>: To achieve results, it’s important to do outdoor sports at least 3-4 times a week.
            </li>
          </ul>
          <h2 className="tablet-center site__subtitle site__subtitle-sport site__text-center">
            6 best video lessons for outdoor sports
          </h2>
          <OutworkVideo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Outwork;
