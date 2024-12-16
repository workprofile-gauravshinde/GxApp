import { Col, Row, Flex } from "antd";
import React from "react";
import ShadowButtonComp from "../../ShadowButtonComp";
import worksBottom from "../../../assets/Home/Splash_mockup.png";
import { homeData } from "../../../utils/ConstantPageData/Home";
import { MotionAnimate } from "react-motion-animate";

const HowItWorks = () => {
  return (
    <Row
      justify={"center"}
      className="relative bg-mainBackgroundTwo px-5 pt-16 md:pt-[150px]"
    >
      <div className="home-spread-background-purple"></div>
      <Col xs={24} xl={9} id={"gxApp-faq"}>
        <Col xs={24} xl={24} className="text-center">
          <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
            <Flex
              align="center"
              className="mb-5 justify-center md:mb-10 md:px-0"
            >
              <h3 className="text-3xl font-bold text-lightPurple md:text-5xl">
                {homeData.SectionSixHeadOneText}&nbsp;
              </h3>
              <h3 className="text-3xl font-bold text-white md:text-5xl">
                {homeData.SectionSixHeadTwoText}
              </h3>
            </Flex>
          </MotionAnimate>
          <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
            <p
              className="text-basel mb-10 px-8 font-body font-normal md:px-0 md:text-xl"
              style={{ color: "#FDFDFDCC" }}
            >
              {homeData.SectionSixDesc}
            </p>
          </MotionAnimate>
          <div className="mb-16 flex justify-center md:mb-20">
            <ShadowButtonComp
              btnTitle={homeData.SectionSixBtnText}
              extraCss={"z-10"}
              borderColor={"#000000"}
              backgroundColor={"#ffffff"}
              onClickBtn={() => {}}
            />
          </div>
          <div className="flex justify-center">
            <img
              src={worksBottom}
              className="h-[225px] w-[225px] md:h-[365px] md:w-[425px]"
              alt={
                homeData.SectionSixHeadOneText +
                " " +
                homeData.SectionSixHeadTwoText
              }
              title={
                homeData.SectionSixHeadOneText +
                " " +
                homeData.SectionSixHeadTwoText
              }
            />
          </div>
        </Col>
      </Col>
      <div className="gxApp-spread-background-lightWhite"></div>
    </Row>
  );
};

export default HowItWorks;
