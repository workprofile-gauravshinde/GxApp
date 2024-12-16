import React, { useState, useEffect } from "react";

const ScrollProgressBar = (props) => {
  const { children } = props;
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll position and progress
  useEffect(() => {
    const handleScroll = () => {
      // Get the scrollable height of the document
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Get the current scroll position
      const scrollTop = window.scrollY;

      // Calculate scroll progress percentage
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "5px",
          backgroundColor: "transparent",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${scrollProgress}%`, // Set the width based on the scroll progress
            backgroundColor: "#8249E4", // Neon purple color
            boxShadow: "0 0 20px 5px rgba(130, 73, 228, 0.8)", // Neon glowing effect
            transition: "width 0.25s ease-out", // Smooth transition for width
          }}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default ScrollProgressBar;
