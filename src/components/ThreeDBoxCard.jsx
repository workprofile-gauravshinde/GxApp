import React from "react";

const ThreeDBoxCard = () => {
  return (
    <div className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center">
            <div className="inner color-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <img
                src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                alt=""
                className="flip-box-img"
              />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner color-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDBoxCard;
