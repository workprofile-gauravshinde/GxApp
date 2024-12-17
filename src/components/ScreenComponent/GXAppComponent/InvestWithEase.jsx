import React from "react";
import { Avatar, Col, Row, Tag, Flex, Button } from "antd";
import avatarOne from "../../../assets/avatarOne.png";
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
import { MotionAnimate } from "react-motion-animate";

const InvestWithEase = () => {
  return (
    <React.Fragment>
      <MotionAnimate animation="fadeInUp" reset={true}>
        <Row
          justify={"center"}
          type="flex"
          className="mt-0 px-5 py-16 md:mt-28 md:py-5"
        >
          <Col xs={24} xl={16}>
            <MotionAnimate animation="fadeInUp" reset={true}>
              <h3 className="flex items-center justify-center text-3xl font-bold text-lightPurple md:text-5xl">
                {GxAppConst.sectionFiveHead}
                <p className="text-3xl font-bold text-white md:text-5xl">
                  &nbsp;{GxAppConst.sectionFiveHeadTwo}
                </p>
              </h3>
            </MotionAnimate>
            <MotionAnimate animation="fadeInUp" reset={true}>
              <p
                className="my-8 text-center font-body text-base font-normal md:text-xl"
                style={{ color: "rgba(253, 253, 253, 0.8)" }}
              >
                {GxAppConst.sectionFiveDesc}
              </p>
            </MotionAnimate>
          </Col>
        </Row>
      </MotionAnimate>
      <Row justify={"center"} type="flex" className="px-5">
        <Col xs={24} xl={7} className="m-2">
          <MotionAnimate animation="fadeInUp" reset={true}>
            <div className="gxApp-card-box w-full">
              <MotionAnimate animation="fadeInUp" reset={true}>
                <div className="relative w-full rounded-2xl bg-cardBackgroundTwo p-5">
                  <div className="absolute left-0 top-24 flex w-full items-center">
                    <div
                      className="absolute left-0 h-4 w-2 rounded-e-lg"
                      style={{ backgroundColor: "rgba(33, 36, 48, 1)" }}
                    ></div>
                    <div className="w-full border-t-2 border-dashed"></div>
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
                    <Col
                      xs={24}
                      className="mb-4 flex items-center justify-between"
                    >
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
              </MotionAnimate>
              <MotionAnimate
                animation="scrollFadeIn"
                scrollPositions={[0.1, 0.9]}
              >
                <div className="mt-8 w-full px-3 text-center md:text-left">
                  <h5 className="text-xl font-bold text-white md:text-3xl">
                    {InvestWithEaseObj.orders.title}
                  </h5>
                  <p className="text-xs font-normal text-white md:text-base">
                    {InvestWithEaseObj.orders.desc}
                  </p>
                </div>
              </MotionAnimate>
            </div>
          </MotionAnimate>
        </Col>
        <Col xs={24} xl={7} className="m-2">
          <MotionAnimate animation="fadeInUp" reset={true}>
            <div className="gxApp-card-box h-auto w-full">
              <MotionAnimate animation="fadeInUp" reset={true}>
                <div className="relative w-full rounded-2xl bg-cardBackgroundTwo p-2">
                  <Row>
                    <Col
                      xs={24}
                      xl={24}
                      className="flex items-center justify-between border"
                    >
                      <div className="relative flex items-center">
                        <Avatar size={42} shape="circle" src={avatarOne} />
                        <Avatar
                          size={18}
                          shape="circle"
                          src={BallOne}
                          className="absolute bottom-0 left-6 border-2 border-white"
                        />
                        <div className="ml-4">
                          <p className="font-body text-sm font-semibold text-black">
                            Jayson Tatum
                          </p>
                          <p className="font-body text-xs font-normal text-black">
                            25 Stocks
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={graphImg} className="mr-8 h-9 w-24" />
                        <div>
                          <h4 className="text-base font-normal text-black">
                            $750
                          </h4>
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
              </MotionAnimate>
              <div className="w-full px-3 text-center md:text-left">
                <MotionAnimate
                  animation="scrollFadeIn"
                  scrollPositions={[0.1, 0.9]}
                >
                  <h5 className="mb-4 mt-6 text-xl font-bold text-white md:text-3xl">
                    {InvestWithEaseObj.analyze.title}
                  </h5>
                </MotionAnimate>
                <MotionAnimate
                  animation="scrollFadeIn"
                  scrollPositions={[0.1, 0.9]}
                >
                  <p className="text-xs font-normal text-white md:text-base">
                    {InvestWithEaseObj.analyze.desc}
                  </p>
                </MotionAnimate>
              </div>
            </div>
          </MotionAnimate>
          <div className="gxApp-card-box mt-5 h-auto w-full text-center md:text-left">
            <MotionAnimate animation="fadeInUp" reset={true}>
              {" "}
              <h1 className="font-display text-xl uppercase text-white md:text-3xl">
                {InvestWithEaseObj.multiple}
              </h1>
            </MotionAnimate>
            <Flex className="mt-8" gap="middle" wrap>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <img src={BallOne} className="h-9 w-9 rounded" />
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <img src={BallTwo} className="h-9 w-9 rounded" />
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <img src={BallThree} className="h-9 w-9 rounded" />
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <img src={BallFour} className="h-9 w-9 rounded" />
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <img src={BallFive} className="h-9 w-9 rounded" />
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <img src={BallSix} className="h-9 w-9 rounded" />
              </MotionAnimate>
            </Flex>
          </div>
        </Col>
        <Col xs={24} xl={7} className="m-2">
          <div className="gxApp-card-box w-full p-0">
            <MotionAnimate animation="fadeInUp" reset={true}>
              <Row className="p-7">
                <Col
                  xs={24}
                  xl={24}
                  className="flex items-start justify-between"
                >
                  <div className="items-Start flex">
                    <Avatar size={42} shape="circle" src={avatarOne} />
                    <div className="ml-4">
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
                          className="h-6 rounded-3xl font-body text-[10px] font-semibold text-black"
                          style={{
                            backgroundColor: "#FFCC00",
                          }}
                        >
                          Pending
                        </Button>
                      </Flex>
                      <Row className="my-2">
                        <Col>
                          <p className="font-body text-xs font-normal text-white">
                            Avg Price
                          </p>
                          <p className="mt-2 font-body text-xs font-normal text-white">
                            $100
                          </p>
                        </Col>
                        <Col className="mx-6 border-l-2"></Col>
                        <Col>
                          <p className="font-body text-xs font-normal text-white">
                            Filled Quantity
                          </p>
                          <p className="mt-1 font-body text-xs font-normal text-white">
                            0
                          </p>
                        </Col>
                      </Row>
                      <p className="mt-3 font-body text-xs font-normal text-white">
                        06/19/2024
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-normal text-[#E55541]">
                      -$100
                    </p>
                  </div>
                </Col>
              </Row>
            </MotionAnimate>
            <div className="w-full border-t-[1px]"></div>
            <div className="w-full p-7 text-center md:text-left">
              <MotionAnimate
                animation="scrollFadeIn"
                scrollPositions={[0.1, 0.9]}
              >
                <h5 className="mb-4 text-xl font-bold text-white md:text-3xl">
                  {InvestWithEaseObj.status.title}
                </h5>
              </MotionAnimate>
              <MotionAnimate
                animation="scrollFadeIn"
                scrollPositions={[0.1, 0.9]}
              >
                <p className="text-xs font-normal text-white md:text-base">
                  {InvestWithEaseObj.status.desc}
                </p>
              </MotionAnimate>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default InvestWithEase;
