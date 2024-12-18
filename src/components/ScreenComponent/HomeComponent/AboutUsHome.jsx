import { Col, Flex, Row } from "antd";
import React from "react";
import Carousel from "../../Carousel";
import { homeData } from "../../../utils/ConstantPageData/Home";
import { MotionAnimate } from "react-motion-animate";

const AboutUsHome = () => {
  return (
    <Row
      justify={"center"}
      className="relative bg-mainBackgroundTwo py-16 md:py-28 xl:py-[150px]"
    >
      <div className="home-about-us-blur"></div>
      <Col xs={24} md={22} xl={20} className="px-4 text-center md:px-20">
        <MotionAnimate animation="fadeInUp" reset={true}>
          <Flex align="center" className="mb-10 justify-center">
            <p className="text-3xl font-bold text-lightPurple md:text-5xl">
              {homeData?.SectionTwoHeadOneText}&nbsp;
            </p>
            <p className="text-3xl font-bold text-white md:text-5xl">
              {homeData?.SectionTwoHeadTwoText}
            </p>
          </Flex>
        </MotionAnimate>
        <MotionAnimate animation="fadeInUp" reset={true}>
          <p
            className="font-body text-base font-normal md:text-xl"
            style={{ color: "#FDFDFDCC" }}
          >
            {homeData?.SectionTwoDesc}
          </p>
        </MotionAnimate>
      </Col>
      <Row>
        <Col span={24}>
          <Carousel />
        </Col>
      </Row>
    </Row>
  );
};

export default AboutUsHome;
