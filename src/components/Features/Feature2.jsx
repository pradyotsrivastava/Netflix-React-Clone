import React from "react";

const Feature2 = () => {
  return (
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">
          Download your shows to watch offline.
        </h3>
        <h5 className="feature__sub__title">
          Save your favourites easily and always have something to watch.
        </h5>
      </div>
      <div className="feature__image__container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Feature 2"
          className="feature__image"
        />
        <div className="feature__2__poster__container">
          <div className="poster__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="poster"
              className="poster"
            />
          </div>
          <div className="poster__details">
            <h4>Stranger Things</h4>
            <h6>Downloading...</h6>
          </div>
          <div className="download__gif__container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="downloading gif"
              className="gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
