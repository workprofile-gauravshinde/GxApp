import React from "react";
import logo from "../../assets/logo.svg";

const MainLoader = () => {
  return (
    <div className="loading-container">
      <div>
        <img src={logo} className="h-48 w-48" />
        <div className="loading-line mt-14">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
