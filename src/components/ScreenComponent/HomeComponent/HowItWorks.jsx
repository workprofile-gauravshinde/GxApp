import { Col, Row, Flex, Button, Image } from "antd";
import React from "react";
import worksBottomWebp from "../../../assets/Home/Splash_mockup.webp";
import worksBottom from "../../../assets/Home/Splash_mockup.png";
import { homeData, howItWorks } from "../../../utils/ConstantPageData/Home";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

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
            {/* <p className="text-3xl font-bold text-lightPurple md:text-5xl">
              {homeData.SectionSixHeadOneText}&nbsp;
            </p> */}
            <p className="text-3xl font-bold text-white md:text-5xl">
              {homeData.SectionSixHeadOneText + " " + homeData.SectionSixHeadTwoText}
            </p>
          </Flex>
          {/* <p
            className="text-basel mb-10 px-8 font-body font-normal md:px-0 md:text-xl"
            style={{ color: "#FDFDFDCC" }}
          >
            {homeData.SectionSixDesc}
          </p> */}
        </Col>
      </Col>
      <Col xs={24} xl={24} id={"gxApp-faq"}>
        <Row className="mx-auto h-auto w-full justify-center gap-12 mt-24 mb-36">
          {howItWorks.map((item, index) => {
            return (
              <Col
                xs={24}
                sm={24}
                md={6}
                className="text-center text-white"
                key={item?.id + index}
              >
                <div className="gxApp-card-box-opacity h-auto w-full">
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    title={item?.title}
                    className="h-12 w-12 rounded-full shadow-md"
                  />
                  <h5 className="text-lg font-body font-bold my-4 capitalize">{item?.title}</h5>
                  <p className="text-sm font-body font-normal w-2/3 mx-auto">{item?.desc}</p>
                  <Button className="!border-none !bg-transparent !text-sm !font-normal text-white !font-body mt-6 underline" onClick={() => navigate(`/${item?.route}`)}>
                    Learn more <RightOutlined style={{fontSize: 10}}/>
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col xs={24} xl={9} id={"gxApp-faq"}>
        <Col xs={24} xl={24} className="text-center">
          <div className="flex justify-center">
            {/* <div className="h-[225px] w-[225px] md:h-[365px] md:w-[425px]"> */}
            <picture>
              <source
                srcSet={worksBottomWebp}
                type="image/webp"
                width={"425"}
                height={"240"}
                // className="h-[225px] w-[225px] md:h-[365px] md:w-[425px]"
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
                // className="h-[225px] w-[225px] md:h-[365px] md:w-[425px]"
                width={"425"}
                height={"240"}
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
            {/* </div> */}
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default HowItWorks;
