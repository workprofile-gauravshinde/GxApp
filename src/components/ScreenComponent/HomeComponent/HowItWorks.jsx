import { Col, Row, Flex } from "antd";
import React from "react";
import ShadowButtonComp from "../../ShadowButtonComp";
import worksBottomWebp from "../../../assets/Home/Splash_mockup.webp";
import worksBottom from "../../../assets/Home/Splash_mockup.png";
import { homeData } from "../../../utils/ConstantPageData/Home";
import PrimaryButton from "../../PrimaryButton";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <Row
      justify={"center"}
      className="relative bg-mainBackgroundTwo px-5 pt-16 md:pt-28 xl:pt-[150px]"
    >
      <div className="home-spread-background-purple"></div>
      <div className="gxApp-spread-background-lightWhite hidden md:block"></div>
      <Col xs={24} xl={9} id={"gxApp-faq"}>
        <Col xs={24} xl={24} className="text-center">
          <Flex align="center" className="mb-5 justify-center md:mb-10 md:px-0">
            <p className="text-3xl font-bold text-lightPurple md:text-5xl">
              {homeData.SectionSixHeadOneText}&nbsp;
            </p>
            <p className="text-3xl font-bold text-white md:text-5xl">
              {homeData.SectionSixHeadTwoText}
            </p>
          </Flex>
          <p
            className="text-basel mb-10 px-8 font-body font-normal md:px-0 md:text-xl"
            style={{ color: "#FDFDFDCC" }}
          >
            {homeData.SectionSixDesc}
          </p>
          <div className="mb-16 flex justify-center md:mb-20">
            {/* <ShadowButtonComp
              btnTitle={homeData.SectionSixBtnText}
              extraCss={"z-10"}
              borderColor={"#000000"}
              backgroundColor={"#ffffff"}
              onClickBtn={() => {}}
            /> */}
            <PrimaryButton onClick={() => navigate("/gxapp")}>
              {homeData.SectionSixBtnText}
            </PrimaryButton>
          </div>
          <div className="flex justify-center">
            <picture>
              <source
                srcSet={worksBottomWebp}
                type="image/webp"
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
            </picture>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default HowItWorks;
