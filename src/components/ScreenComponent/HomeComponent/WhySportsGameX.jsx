import React from "react";
import { Col, Row } from "antd";
import {
  homeData,
  homeWhySportsGameXArr,
} from "../../../utils/ConstantPageData/Home";
import { MotionAnimate } from "react-motion-animate";
import ThreeDBoxCard from "../../ThreeDBoxCard";

const WhySportsGameX = () => {
  return (
    <div className="relative w-full overflow-hidden bg-mainBackground py-16 md:py-28 xl:py-[150px]">
      <div className="why_sports_gamex_purpal"></div>
      {/* <MotionAnimate animation="fadeInUp" reset={true}> */}
      <Row justify={"center"} type="flex" className="px-5">
        <Col xs={24} xl={16}>
          <MotionAnimate animation="fadeInUp" reset={true}>
            <p className="mb-10 flex items-center justify-center text-3xl font-bold text-lightPurple md:text-5xl">
              {homeData?.SectionThreeHeadOneText}
              <span className="text-3xl font-bold text-white md:text-5xl">
                &nbsp;{homeData?.SectionThreeHeadTwoText}
              </span>
            </p>
          </MotionAnimate>
          <MotionAnimate animation="fadeInUp" reset={true}>
            <p
              className="mb-10 text-center font-body text-base font-normal md:mb-20 md:text-xl"
              style={{ color: "rgba(253, 253, 253, 0.8)" }}
            >
              {homeData?.SectionThreeDesc}
            </p>
          </MotionAnimate>
        </Col>
      </Row>
      {/* </MotionAnimate>
      <MotionAnimate animation="fadeInUp" reset={true}> */}
      <Row
        type="flex"
        className="justify-center px-5 md:justify-between xl:justify-center"
      >
        {homeWhySportsGameXArr.map((item, index) => {
          return (
            <React.Fragment key={item?.title + index}>
              {/* <ThreeDBoxCard
                  title={item.title}
                  desc={item.desc}
                  imgSrc={item?.imgSrc}
                /> */}
              <ReuseBoxComp
                title={item.title}
                desc={item.desc}
                imgSrc={item?.imgSrc}
              />
            </React.Fragment>
          );
        })}
      </Row>
      {/* </MotionAnimate> */}
    </div>
  );
};

export default WhySportsGameX;

const ReuseBoxComp = ({ imgSrc, title, desc }) => {
  return (
    <Col xs={24} md={7} xl={7} className="m-2 md:m-0 xl:m-2">
      <div className="gxApp-card-box-opacity w-full">
        <div className="min-h-[280px] w-full px-3 text-center md:px-0 md:text-center xl:px-3 xl:text-left">
          <MotionAnimate animation="fadeInUp" reset={true}>
            <img
              src={imgSrc}
              className="m-auto mb-6 h-12 w-12 md:m-auto md:mb-6 xl:m-0 xl:mb-6"
              alt={title}
              title={title}
            />
          </MotionAnimate>
          <MotionAnimate animation="fadeInUp" reset={true}>
            <p className="mb-4 font-secondFont text-xl font-bold text-white md:text-xl xl:text-3xl">
              {title}
            </p>
          </MotionAnimate>
          <MotionAnimate animation="fadeInUp" reset={true}>
            <p className="font-body text-sm font-normal text-white md:text-sm xl:text-base">
              {desc}
            </p>
          </MotionAnimate>
        </div>
      </div>
    </Col>
  );
};
