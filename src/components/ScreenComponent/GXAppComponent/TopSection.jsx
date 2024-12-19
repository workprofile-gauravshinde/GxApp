import { Col, Row } from "antd";
import React from "react";
import topLeftImg from "../../../assets/gxAppImg/Mockups/GX_APP_HOME DARK.png";
import topLeftMobileImg from "../../../assets/Home/App_mobile.png";
import topRightImg from "../../../assets/gxAppImg/Mockups/GX_APP_HOME LIGHT.png";
import leftPlayStoreImg from "../../../assets/Home/Play_store CTA SVG.svg";
import rightAppleStoreImg from "../../../assets/Home/App_store CTA SVG.svg";
import { footerConst } from "../../../utils/ConstantPageData/FooterConstantData";
import ScrollMouse from "../../ScrollMouse";
import { GxAppConst } from "../../../utils/ConstantPageData/GxAppConstantData";
import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <Row
      justify={"center"}
      className="relative items-start overflow-hidden px-4 md:px-16"
      // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <div className="gxApp-spread-background-pink"></div>
      <Col
        className="gutter-row hidden items-start md:block"
        xs={24}
        md={12}
        xl={10}
      >
        <p className="mt-28 font-secondFont text-[64px] font-bold text-white">
          {GxAppConst.sectionOneHead}
        </p>
        <p
          className="mt-3 pr-36 font-body text-xl font-normal"
          style={{ color: "#FDFDFD80" }}
        >
          {GxAppConst.sectionOneDesc}
        </p>
        <Row justify={"start"} className="mt-0 md:mt-16">
          {/* <Col
            xs={24}
            md={10}
            className="my-6 mr-0 flex justify-center text-base md:my-0 md:mr-8 md:justify-start"
          > */}
          <Link
            to={footerConst.playStoreLink}
            target="_blank"
            aria-label="Play Store"
            className="mr-5 h-[53px] w-[180px]"
          >
            <img
              src={leftPlayStoreImg}
              className="h-auto w-full"
              alt="Play Store"
              title="Play Store"
            />
          </Link>
          {/* </Col>
          <Col xs={24} md={10} className="flex justify-center md:justify-start"> */}
          <Link
            to={footerConst.appleAppLink}
            target="_blank"
            aria-label="Apple Store"
            className="h-[53px] w-[180px]"
          >
            <img
              src={rightAppleStoreImg}
              className="h-auto w-full"
              alt="Apple Store"
              title="Apple Store"
            />
          </Link>
          {/* </Col> */}
        </Row>
      </Col>
      <Col
        className="gutter-row relative flex items-end justify-center align-middle md:justify-start"
        xs={24}
        md={12}
        xl={14}
      >
        <img
          src={topLeftImg}
          className="mb-0 hidden h-[354px] w-[333px] md:mb-10 md:block md:h-[430px] xl:h-[675px]"
          alt="GX APP"
          title="GX APP"
        />
        <img
          src={topLeftMobileImg}
          className="mb-0 block h-[325px] w-5/6 md:hidden"
          alt="GX APP"
          title="GX APP"
        />
        <img
          src={topRightImg}
          className="ml-0 hidden h-[354px] w-[343px] md:ml-5 md:block md:h-[330px] xl:h-[500px]"
          alt="GX APP"
          title="GX APP"
        />
        <div className="absolute -right-8 bottom-20 hidden md:block">
          <ScrollMouse />
        </div>
      </Col>
      <Col
        className="gutter-row block items-start text-center md:hidden"
        xs={24}
        md={10}
      >
        <p className="mb-6 mt-10 font-secondFont text-3xl font-bold text-white md:mb-0 md:text-[64px]">
          {GxAppConst.sectionOneHead}
        </p>
        <p
          className="mb-6 px-8 font-body text-base font-normal md:text-xl"
          style={{ color: "#FDFDFD80" }}
        >
          {GxAppConst.sectionOneDesc}
        </p>
        <Row justify={"start"} className="mb-14">
          <Col
            xs={24}
            md={10}
            className="my-6 mr-0 flex justify-center text-base md:my-0 md:mr-8 md:justify-start"
          >
            <Link
              to={footerConst.playStoreLink}
              target="_blank"
              aria-label="Play Store"
            >
              <img
                src={leftPlayStoreImg}
                className="h-[53px] w-[180px]"
                alt="Play Store"
                title="Play Store"
              />
            </Link>
          </Col>
          <Col xs={24} md={10} className="flex justify-center md:justify-start">
            <Link
              to={footerConst.appleAppLink}
              target="_blank"
              aria-label="Apple Store"
            >
              <img
                src={rightAppleStoreImg}
                className="h-[53px] w-[180px]"
                alt="Apple Store"
                title="Apple Store"
              />
            </Link>
          </Col>
          <div className="absolute -right-2 bottom-6 block md:hidden">
            <ScrollMouse />
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default TopSection;
