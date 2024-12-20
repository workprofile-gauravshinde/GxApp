import React from "react";
import { Avatar, Col, Row, Tag, Flex, Button } from "antd";
import avatarOne from "../../../assets/avatarOne.png";
import avatarTwo from "../../../assets/avatarTwo.jpeg";
import BallOne from "../../../assets/gxAppImg/Basketball icon.svg";
import BallTwo from "../../../assets/gxAppImg/Soccer icon.svg";
import BallThree from "../../../assets/gxAppImg/Baseball_icon.svg";
import BallFour from "../../../assets/gxAppImg/Cricket_icon.svg";
import BallFive from "../../../assets/gxAppImg/american-football_icon.svg";
import BallSix from "../../../assets/gxAppImg/Hockey_icon.svg";
import graphImg from "../../../assets/gxAppImg/Mini Graph GX page.svg";
import {
  GxAppConst,
  InvestWithEaseObj,
} from "../../../utils/ConstantPageData/GxAppConstantData";

const InvestWithEase = () => {
  return (
    <React.Fragment>
      <Row
        justify={"center"}
        type="flex"
        className="mt-0 px-5 py-16 md:mt-28 md:py-5"
      >
        <Col xs={24} xl={16}>
          <p className="flex items-center justify-center text-3xl font-bold text-lightPurple md:text-5xl">
            {GxAppConst.sectionFiveHead}
            <span className="text-3xl font-bold text-white md:text-5xl">
              &nbsp;{GxAppConst.sectionFiveHeadTwo}
            </span>
          </p>
          <p
            className="my-8 text-center font-body text-base font-normal md:text-xl"
            style={{ color: "rgba(253, 253, 253, 0.8)" }}
          >
            {GxAppConst.sectionFiveDesc}
          </p>
        </Col>
      </Row>
      <Row justify={"center"} type="flex" className="px-5 md:px-0 xl:px-5">
        <Col xs={24} md={7} xl={7} className="m-2">
          <div className="gxApp-card-box w-full">
            <div className="relative w-full rounded-2xl bg-cardBackgroundTwo p-5">
              <div className="absolute left-0 top-24 flex w-full items-center">
                <div
                  className="absolute left-0 h-4 w-2 rounded-e-lg"
                  style={{ backgroundColor: "rgba(33, 36, 48, 1)" }}
                ></div>
                <div className="w-full border-t-2 border-dashed border-gray-300"></div>
                <div
                  className="absolute right-0 h-4 w-2 rounded-s-lg"
                  style={{ backgroundColor: "rgba(33, 36, 48, 1)" }}
                ></div>
              </div>
              <Row>
                <Col xs={24} className="mb-7 flex items-center">
                  <Avatar size={56} shape="circle" src={avatarOne} />
                  <p className="ml-4 font-body text-base font-bold text-black md:text-xl">
                    Lebron james
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={24}
                  className="mb-4 mt-2 flex items-center justify-between"
                >
                  <p className="font-body text-xs font-semibold text-black md:text-base">
                    Stock quantity
                  </p>
                  <p className="font-body text-xs font-semibold text-black md:text-base">
                    1
                  </p>
                </Col>
                <Col xs={24} className="mb-4 flex items-center justify-between">
                  <p className="font-body text-xs font-semibold text-black md:text-base">
                    Price
                  </p>
                  <p className="font-body text-xs font-semibold text-black md:text-base">
                    $100
                  </p>
                </Col>
                <Col xs={24} className="flex items-center justify-between">
                  <p className="font-body text-xs font-semibold text-black md:text-base">
                    Total
                  </p>
                  <p className="font-body text-xs font-semibold text-black md:text-base">
                    $100
                  </p>
                </Col>
              </Row>
            </div>
            <div className="mt-8 w-full px-3 text-center md:text-left">
              <p className="mb-4 text-xl font-bold text-white md:text-3xl">
                {InvestWithEaseObj.orders.title}
              </p>
              <p className="text-xs font-normal text-white md:text-base">
                {InvestWithEaseObj.orders.desc}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={7} xl={7} className="m-2">
          <div className="gxApp-card-box h-auto w-full">
            <div className="relative w-full rounded-2xl bg-cardBackgroundTwo p-2">
              <Row>
                <Col
                  xs={24}
                  xl={24}
                  className="flex items-center justify-between border"
                >
                  <div className="relative flex items-center">
                    <Avatar size={42} shape="circle" src={avatarTwo} />
                    <Avatar
                      size={18}
                      shape="circle"
                      src={BallOne}
                      className="absolute bottom-0 left-6 border-2 border-white"
                    />
                    <div className="ml-4">
                      <p className="font-body text-xs font-semibold text-black md:text-sm">
                        Jayson Tatum
                      </p>
                      <p className="font-body text-[10px] font-normal text-black md:text-xs">
                        25 Stocks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={graphImg}
                      className="mr:0 h-9 w-24 object-cover md:mr-8"
                    />
                    <div>
                      <p className="text-base font-normal text-black">$750</p>
                      <p
                        className="text-sm font-normal"
                        style={{ color: "rgba(6, 164, 91, 1)" }}
                      >
                        5.21%
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="w-full px-3 text-center md:text-left">
              <p className="mb-4 mt-6 text-xl font-bold text-white md:text-3xl">
                {InvestWithEaseObj.analyze.title}
              </p>
              <p className="text-xs font-normal text-white md:text-base">
                {InvestWithEaseObj.analyze.desc}
              </p>
            </div>
          </div>
          <div className="gxApp-card-box mt-5 h-auto w-full justify-start text-center md:justify-center md:text-left">
            <p className="font-secondFont text-xl uppercase font-bold text-white md:text-2xl xl:text-3xl">
              {InvestWithEaseObj.multiple}
            </p>
            <Flex
              className="mb:0 mt-8 justify-center gap-4 md:mb-1 md:justify-start md:gap-2 xl:mb-0 xl:gap-4"
              // gap="middle"
              wrap
            >
              <img
                src={BallOne}
                className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-9 xl:w-9"
                alt={"Basketball icon"}
                title={"Basketball icon"}
              />
              <img
                src={BallTwo}
                className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-8 xl:w-9"
                alt={"Soccer icon"}
                title={"Soccer icon"}
              />
              <img
                src={BallThree}
                className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-8 xl:w-9"
                alt={"Baseball icon"}
                title={"Baseball icon"}
              />
              <img
                src={BallFour}
                className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-9 xl:w-9"
                alt={"Cricket icon"}
                title={"Cricket icon"}
              />
              <img
                src={BallFive}
                className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-9 xl:w-9"
                alt={"American football icon"}
                title={"American Football icon"}
              />
              <img
                src={BallSix}
                className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-9 xl:w-9"
                alt={"Hockey icon"}
                title={"Hockey icon"}
              />
            </Flex>
          </div>
        </Col>
        <Col xs={24} md={7} xl={7} className="m-2">
          <div className="gxApp-card-box w-full p-0">
            <Row className="p-4 md:p-7">
              <Col xs={24} xl={24} className="flex items-start justify-between">
                <div className="flex w-full justify-center">
                  <div className="w-1/6 md:w-1/5 xl:w-1/6">
                    <Avatar size={42} shape="circle" src={avatarOne} />
                  </div>
                  <div className="w-5/6 md:w-4/5 xl:w-5/6">
                    <div className="flex w-full items-start justify-between md:items-center">
                      <div>
                        <p className="font-body text-sm font-semibold text-white">
                          Lebron James
                        </p>
                        <Flex className="my-3" gap="4px 0" wrap>
                          <Button
                            type="primary"
                            className="mr-4 h-6 rounded-3xl font-body text-[10px] font-semibold"
                            style={{
                              backgroundColor: "#8249E4",
                            }}
                          >
                            Market Buy
                          </Button>
                          <Button
                            type="primary"
                            className="mt-0 h-6 rounded-3xl font-body text-[10px] font-semibold text-black md:mt-2 xl:mt-0"
                            style={{
                              backgroundColor: "#FFCC00",
                            }}
                          >
                            Pending
                          </Button>
                        </Flex>
                      </div>
                      <div>
                        <p className="text-base font-normal text-[#E55541]">
                          -$100
                        </p>
                      </div>
                    </div>
                    <div className="my-2 flex items-center">
                      <div>
                        <p className="font-body text-xs font-normal text-white">
                          Avg Price
                        </p>
                        <p className="mt-2 font-body text-xs font-normal text-white">
                          $100
                        </p>
                      </div>
                      <div className="mx-4 h-9 border-l-[1px] md:mx-6"></div>
                      <div>
                        <p className="font-body text-xs font-normal text-white">
                          Filled Quantity
                        </p>
                        <p className="mt-1 font-body text-xs font-normal text-white">
                          0
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 font-body text-xs font-normal text-white">
                      06/19/2024
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="w-full border-t-[1px]"></div>
            <div className="w-full p-7 text-center md:text-left">
              <p className="mb-4 text-xl font-bold text-white md:text-3xl">
                {InvestWithEaseObj.status.title}
              </p>
              <p className="text-xs font-normal text-white md:text-base">
                {InvestWithEaseObj.status.desc}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default InvestWithEase;
