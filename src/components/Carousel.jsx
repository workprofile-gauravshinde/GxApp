import React from "react";
import Slider from "react-slick";
import "./../styles/Carousel.css"; // Import custom styles
import { homeSliderContentArr } from "../utils/ConstantPageData/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { MotionAnimate } from "react-motion-animate";

const CustomCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0", // Removes padding for a clean center view
    slidesToShow: 3, // Show 3 slides at a time
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    arrows: true, // Enable navigation arrows
    prevArrow: <CustomPrevArrow />, // Use custom prev arrow
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600, // For small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="carousel-container" id="home_about_slider">
      <div className="with-blur-backdrop-left -left-[3rem] hidden md:block"></div>
      <div className="with-blur-backdrop-left -right-[3rem] hidden md:block"></div>
      <Slider {...settings}>
        {homeSliderContentArr.map((items, index) => {
          return (
            <React.Fragment key={items?.id + index}>
              <ReuseableComponent title={items.title} desc={items.desc} />
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomCarousel;

const ReuseableComponent = ({ title, desc }) => {
  return (
    <div className="slide shadow-lg">
      <div className="px-3 text-center">
        {/* <MotionAnimate animation="fadeInUp" reset={true}> */}
        <p className="mb-8 font-secondFont text-xl font-bold leading-6 text-white md:text-[28px] md:leading-[39.01px]">
          {title}
        </p>
        {/* </MotionAnimate> */}
        <p className="font-body text-sm font-normal text-[#FDFDFDCC] md:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props; // onClick will be used to trigger the slide change
  return (
    <button
      aria-label="Previous Btn"
      className="custom-prev h-[60px] w-[60px] border border-white bg-transparent"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="fas faArrowLeft"
        style={{ color: "#ffffff", fontSize: "1.813rem" }}
      />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props; // onClick will be used to trigger the slide change
  return (
    <button
      aria-label="Next Btn"
      className="custom-next h-[60px] w-[60px] border border-lightPurple bg-lightPurple"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className="fas faArrowRight"
        style={{ color: "#ffffff", fontSize: "1.813rem" }}
      />
    </button>
  );
};
