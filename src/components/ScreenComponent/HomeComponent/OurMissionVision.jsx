import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  homeData,
  SectionFourHeadArr,
} from "../../../utils/ConstantPageData/Home";
import { MotionAnimate } from "react-motion-animate";

import MissionImgOne from "../../../assets/Home/Our_mission_image_1.png";
import MissionImgTwo from "../../../assets/Home/Our_mission_image_2.png";
import MissionImgThree from "../../../assets/Home/Our_mission_image_3.png";
import MissionImgFour from "../../../assets/Home/Our_mission_image_4.png";
import MissionImgFive from "../../../assets/Home/Our_mission_image_5.png";
import MissionImgSix from "../../../assets/Home/Our_mission_image_6.png";

const OurMissionVision = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState(1);

  return (
    <div className="relative bg-mainBackgroundTwo py-16 md:py-[150px]">
      <Row justify={"center"} className="px-8">
        <div className="why_sports_gamex_purpal"></div>
        <Col span={24}>
          <Row justify={"center"} type="flex" className="px-0 md:px-5">
            <Col xs={24} md={16}>
              <MotionAnimate
                animation="scrollFadeIn"
                scrollPositions={[0.1, 0.9]}
              >
                <h3 className="mb-10 flex items-center justify-center text-3xl font-bold text-lightPurple md:text-5xl">
                  {homeData?.SectionFourHeadOneText}
                  <p className="text-3xl font-bold text-white md:text-5xl">
                    &nbsp;{homeData?.SectionFourHeadTwoText}
                  </p>
                </h3>
              </MotionAnimate>
              <MotionAnimate
                animation="scrollFadeIn"
                scrollPositions={[0.1, 0.9]}
              >
                <p
                  className="mb-10 text-center font-body text-base font-normal md:mb-[132px] md:text-xl"
                  style={{ color: "rgba(253, 253, 253, 0.8)" }}
                >
                  {homeData?.SectionFourDesc}
                </p>
              </MotionAnimate>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="bg-mainBackgroundTwo px-4 md:px-8">
        <Col xs={24} md={11} className="block md:hidden">
          <Row gutter={16}>
            <Col xs={12} md={12}>
              <img
                src={
                  currentActiveTab === 1
                    ? MissionImgOne
                    : currentActiveTab === 2
                    ? MissionImgThree
                    : MissionImgFive
                }
                alt={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                title={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                className="box a mt-4 h-[235px] w-full md:h-[525px] md:w-[333px]"
              />
            </Col>
            <Col xs={12} md={12}>
              <img
                src={
                  currentActiveTab === 1
                    ? MissionImgTwo
                    : currentActiveTab === 2
                    ? MissionImgFour
                    : MissionImgSix
                }
                alt={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                title={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                className="box a mt-4 h-[235px] w-full md:h-[525px] md:w-[333px]"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={10}>
          <div className="mt-20">
            {SectionFourHeadArr.map((item, index) => {
              return (
                <React.Fragment key={item?.title + index}>
                  <ReusableButtonBoxText
                    itemId={item}
                    onButtonClickAction={() => {
                      handleButtonClick();
                      setCurrentActiveTab(item.id);
                    }}
                    currentActiveTab={currentActiveTab}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </Col>
        <Col xs={24} md={11} offset={3} className="hidden md:block">
          <Row gutter={16}>
            <Col xs={12} md={12}>
              <img
                src={
                  currentActiveTab === 1
                    ? MissionImgOne
                    : currentActiveTab === 2
                    ? MissionImgThree
                    : MissionImgFive
                }
                alt={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                title={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                className="box a mt-4 h-[525px] w-[333px]"
              />
            </Col>
            <Col xs={12} md={12}>
              <img
                src={
                  currentActiveTab === 1
                    ? MissionImgTwo
                    : currentActiveTab === 2
                    ? MissionImgFour
                    : MissionImgSix
                }
                alt={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                title={
                  currentActiveTab === 1
                    ? "Redefine Sports Engagement"
                    : currentActiveTab === 2
                    ? "Promote Financial Literacy Through Sports"
                    : "Encourage Strategic Thinking"
                }
                className="box a mt-4 h-[525px] w-[333px]"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const ReusableButtonBoxText = (props) => {
  const { onButtonClickAction, currentActiveTab, itemId } = props;
  return (
    <div className="mt-10 flex items-start justify-start">
      <MotionAnimate animation="fadeInUp" reset={true}>
        <Button
          onClick={onButtonClickAction}
          className={`flex h-14 w-14 items-center justify-center rounded-full ${
            currentActiveTab === itemId?.id ? "bg-lightPurple" : "bg-[#43454F]"
          }`}
        >
          <p
            className={`font-secondFont text-base font-bold md:text-xl  ${
              currentActiveTab === itemId?.id ? "text-white" : "text-[#E0E7E1]"
            }`}
          >
            {itemId?.num}
          </p>
        </Button>
      </MotionAnimate>
      <div className="px-5 md:px-11">
        <MotionAnimate animation="fadeInUp" reset={true}>
          <h4
            className={`mb-3 font-body text-lg font-semibold md:text-[26px]  ${
              currentActiveTab === itemId?.id ? "text-white" : "text-[#43454F]"
            }`}
            style={{ lineHeight: "1.929rem" }}
          >
            {itemId?.title}
          </h4>
        </MotionAnimate>
        <MotionAnimate animation="fadeInUp" reset={true}>
          <p
            className={`w-11/12 font-body text-xs md:text-sm ${
              currentActiveTab === itemId?.id ? "text-white " : "text-[#43454F]"
            }`}
          >
            {itemId?.description}
          </p>
        </MotionAnimate>
      </div>
    </div>
  );
};

ReusableButtonBoxText.propTypes = {
  onButtonClickAction: PropTypes.func,
  currentActiveTab: PropTypes.number,
  itemId: PropTypes.object,
};

export default OurMissionVision;
