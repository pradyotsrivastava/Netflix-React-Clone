import React from "react";
import "./index.css";
import Feature1 from "./Features/Feature1";
import Feature2 from "./Features/Feature2";
import Feature3 from "./Features/Feature3";
import Feature4 from "./Features/Feature4";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero__bg__image__container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="BG hero"
            className="hero__bg__image"
          />
        </div>
        <div className="hero__bg__overlay"></div>

        <div className="hero__card">
          <p>Enjoy big movies, hit series and more from ₹149.</p>
          <h1 className="hero__title">
            Unlimited Movies,
            <br />
            TV Shows and More...
          </h1>

          <p className="hero__subtitle">Join today. Cancel anytime.</p>
          <p className="hero__description">Ready to watch?</p>

          <div className="email__form__container">
            <div className="form__container">
              <input type="email" className="email__input" placeholder="" />
              <label className="email__label">Email Address</label>
            </div>
            <Link to={"/home"} className="primary__button">
              Get Started
            </Link>
          </div>
          <span>*Click "Get Started" to binge watch your Netflix</span>
        </div>
      </section>
      <section className="features__container">
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
      </section>
    </main>
  );
};

export default LandingPage;
