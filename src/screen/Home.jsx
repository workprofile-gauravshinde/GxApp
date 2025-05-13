import React, { useRef } from "react";
import HowItWorks from "../components/ScreenComponent/HomeComponent/HowItWorks";
import InnovatingSports from "../components/ScreenComponent/HomeComponent/InnovatingSports";
import WhySportsGameX from "../components/ScreenComponent/HomeComponent/WhySportsGameX";
import OurMissionVision from "../components/ScreenComponent/HomeComponent/OurMissionVision";
import AboutUsHome from "../components/ScreenComponent/HomeComponent/AboutUsHome";
import TopMainHome from "../components/ScreenComponent/HomeComponent/TopMainHome";
import Faqs from "../components/ScreenComponent/GXAppComponent/Faqs";

const Home = () => {
  const aboutRef = useRef(null);
  const handleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <TopMainHome onAboutClick={handleClick} />
      {/* <div ref={aboutRef}> */}
      <AboutUsHome aboutRef={aboutRef} />
      {/* </div> */}
      <WhySportsGameX />
      <OurMissionVision />
      <InnovatingSports />
      <Faqs />
      <HowItWorks />
    </div>
  );
};

export default Home;
