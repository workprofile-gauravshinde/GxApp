import React, { useState } from "react";

const ImageHover = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="Hover Image" className="mt-4 h-[525px] w-[333px]" />
      <div className={`shine ${isHovered ? "active" : ""}`}></div>
    </div>
  );
};

export default ImageHover;
