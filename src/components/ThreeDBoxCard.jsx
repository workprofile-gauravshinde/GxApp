import { Col } from "antd";
import React from "react";
import { MotionAnimate } from "react-motion-animate";

const ThreeDBoxCard = (props) => {
  const { imgSrc, title, desc } = props;
  return (
    <Col xs={24} xl={7} className="m-2">
      <div className="flip-box cardBoxGradient a">
        <div className="flip-box-front gxApp-card-box text-center ">
          <div className="min-h-[150px] w-full text-center md:min-h-[260px] md:text-left">
            <MotionAnimate animation="fadeInUp" reset={true}>
              <img
                src={imgSrc}
                className="m-auto mb-6 h-12 w-12 md:m-0 md:mb-6"
                alt={title}
                title={title}
              />
            </MotionAnimate>
            <MotionAnimate animation="fadeInUp" reset={true}>
              <p className="mb-4 font-secondFont text-xl font-bold text-white md:text-3xl">
                {title}
              </p>
            </MotionAnimate>
            <MotionAnimate animation="fadeInUp" reset={true}>
              <p className="font-body text-sm font-normal text-white md:text-base">
                {desc}
              </p>
            </MotionAnimate>
          </div>
        </div>
        <div className="flip-box-back gxApp-card-box text-center">
          <div className="min-h-[150px] w-full text-center md:min-h-[260px] md:text-left">
            <img
              src={imgSrc}
              className="m-auto mb-6 h-12 w-12 md:m-0 md:mb-6"
              alt={title}
              title={title}
            />
            <p className="mb-4 font-secondFont text-xl font-bold text-white md:text-3xl">
              {title}
            </p>
            <p className="font-body text-sm font-normal text-white md:text-base">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ThreeDBoxCard;
