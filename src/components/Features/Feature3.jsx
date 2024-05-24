import React from "react";

const Feature3 = () => {
  return (
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Watch everywhere.</h3>
        <h5 className="feature__sub__title">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h5>
      </div>
      <div className="feature__image__container feature__3__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt="Feature 3"
          className="feature__image feature__3__image"
        />
        <div className="feature__backgroud__video__container feature__3__backgroud__video__container">
          <video
            autoPlay
            loop
            muted
            className="feature__backgroud__video feature__3__backgroud__video"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
