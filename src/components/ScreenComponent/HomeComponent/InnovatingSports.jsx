import { Col, Row } from "antd";
import React from "react";
import {
  homeData,
  InnovatingSportsObj,
} from "../../../utils/ConstantPageData/Home";

const InnovatingSports = () => {
  return (
    <Row
      type="flex"
      justify={"center"}
      className="relative items-center overflow-hidden bg-mainBackground px-4 py-16 md:px-8 md:py-24 xl:px-20 xl:py-[150px]"
    >
      <div className="home-innovating-sports"></div>
      <div className="home-innovating-sports-top-two"></div>
      <Col
        xs={24}
        md={10}
        className="justify-center pr-0 md:justify-start md:pr-10 xl:pr-20"
      >
        <p className="text-center font-body text-3xl font-bold leading-9 text-white md:text-left md:text-[38px] md:leading-[48px] xl:text-[48px] xl:leading-[58px]">
          {homeData?.SectionFiveHeadOneText}{" "}
          <span className="bg-blurColor px-1">
            {homeData?.SectionFiveHeadTwoText}
          </span>{" "}
          {homeData?.SectionFiveHeadThreeText}
        </p>
        <p className="mt-6 text-center font-body font-normal text-white md:text-left md:text-xl">
          {homeData?.SectionFiveDesc}
        </p>
      </Col>
      <Col xs={24} md={14} className="">
        <div className="round-patch hidden md:block"></div>
        <Row type="flex" justify={"center"}>
          <Col
            xs={24}
            md={12}
            className="flex items-start justify-start border-b-[1px] border-r-0 border-[#DDDDDD] px-5 py-10 text-center md:border-r-[1px] md:py-8 md:text-left md:hover:bg-slate-500 xl:py-20"
          >
            <div>
              <p className="mb-5 font-secondFont text-xl font-extrabold text-white md:text-2xl">
                {InnovatingSportsObj?.box1Head}
              </p>
              <p
                className="w-full font-body text-base font-normal md:w-4/5 md:text-xl"
                style={{ color: "#CCCDCF" }}
              >
                {InnovatingSportsObj?.box1SubDesc}
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            md={12}
            className="flex items-start justify-start border-b-[1px] border-[#DDDDDD] px-9 py-10 text-center md:border-0 md:border-b-[0px] md:py-8 md:text-left md:hover:bg-slate-500 xl:py-20"
          >
            <div>
              <p className="mb-5 font-secondFont text-xl font-extrabold text-white md:text-2xl ">
                {InnovatingSportsObj?.box2Head}
              </p>
              <p
                className="w-full font-body text-base font-normal md:w-4/5 md:text-xl"
                style={{ color: "#CCCDCF" }}
              >
                {InnovatingSportsObj?.box2SubDesc}
              </p>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify={"center"}>
          <Col
            xs={24}
            md={12}
            className="md:order-b-[0px] flex items-start justify-start  border-b-[1px] border-[#DDDDDD] px-5 py-10 text-center md:border-b-[0px] md:border-r-[1px] md:py-8 md:text-left md:hover:bg-slate-500 xl:py-20"
          >
            <div>
              <p className="mb-5 font-secondFont text-xl font-extrabold text-white md:text-2xl">
                {InnovatingSportsObj?.box3Head}
              </p>
              <p
                className="w-full font-body text-base font-normal md:w-4/5 md:text-xl"
                style={{ color: "#CCCDCF" }}
              >
                {InnovatingSportsObj?.box3SubDesc}
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            md={12}
            className="flex items-start justify-start border-b-[1px] border-[#DDDDDD] px-9 py-10 text-center md:border-0 md:border-t-[1px] md:py-8 md:text-left md:hover:bg-slate-500 xl:py-20"
          >
            <div className="">
              <p className="mb-5 font-secondFont text-xl font-extrabold text-white md:text-2xl">
                {InnovatingSportsObj?.box4Head}
              </p>
              <p
                className="w-full font-body text-base font-normal md:w-4/5 md:text-xl"
                style={{ color: "#CCCDCF" }}
              >
                {InnovatingSportsObj?.box4SubDesc}
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default InnovatingSports;
