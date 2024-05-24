import React from "react";

const Feature1 = () => {
  return (
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Enjoy on your TV.</h3>
        <h5 className="feature__sub__title">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="Feature 1"
          className="feature__image"
        />
        <div className="feature__backgroud__video__container">
          <video autoPlay loop muted className="feature__backgroud__video">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
