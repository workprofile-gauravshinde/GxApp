import React from "react";
import logo from "../../assets/logo.svg";

const MainLoader = () => {
  return (
    <div className="loading-container">
      <div className="h-48 w-48">
        <img
          src={logo}
          width={"192"}
          height={"108"}
          alt="SportsGameX"
          title="SportsGameX"
        />
        <div className="loading-line mt-14">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
