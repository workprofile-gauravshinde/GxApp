import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  homeData,
  SectionFourHeadArr,
} from "../../../utils/ConstantPageData/Home";

import MissionImgOne from "../../../assets/Home/Our_mission_image_1.png";
import MissionImgTwo from "../../../assets/Home/Our_mission_image_2.png";
import MissionImgThree from "../../../assets/Home/Our_mission_image_3.png";
import MissionImgOneWebp from "../../../assets/Home/Our_mission_image_1.webp";
import MissionImgTwoWebp from "../../../assets/Home/Our_mission_image_2.webp";
import MissionImgThreeWebp from "../../../assets/Home/Our_mission_image_3.webp";

import ArrowDownImg from "../../../assets/Home/Arrow-down.svg";

const OurMissionVision = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState(1);

  return (
    <div className="relative bg-mainBackgroundTwo py-16 md:py-28 xl:py-[150px]">
      <Row justify={"center"} className="px-8">
        <div className="why_sports_gamex_purpal"></div>
        <Col span={24}>
          <Row justify={"center"} type="flex" className="px-0 md:px-5">
            <Col xs={24} md={16}>
              <p className="mb-10 flex items-center justify-center text-3xl font-bold text-lightPurple md:text-5xl">
                {/* {homeData?.SectionFourHeadOneText} */}
                <span className="text-3xl font-bold text-white md:text-5xl">
                  {/* &nbsp; */}
                  {homeData?.SectionFourHeadOneText + " " + homeData?.SectionFourHeadTwoText}
                </span>
              </p>
              <p
                className="mb-10 text-center font-body text-base font-normal md:mb-[132px] md:text-xl"
                style={{ color: "rgba(253, 253, 253, 0.8)" }}
              >
                {homeData?.SectionFourDesc}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="bg-mainBackgroundTwo px-4 md:px-8 xl:px-16">
        <Col xs={24} md={11} className="block md:hidden">
          <Row 
          // gutter={16}
          >
            <Col xs={24} md={24}>
              <picture>
                <source
                  srcSet={
                    currentActiveTab === 1
                      ? MissionImgOneWebp
                      : currentActiveTab === 2
                      ? MissionImgTwoWebp
                      : MissionImgThreeWebp
                  }
                  type="image/webp"
                  className="mt-4 h-[235px] w-full md:h-[525px] object-contain"
                  // md:w-[333px]
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
                />
                <img
                  src={
                    currentActiveTab === 1
                      ? MissionImgOne
                      : currentActiveTab === 2
                      ? MissionImgTwo
                      : MissionImgThree
                  }
                  className="mt-4 h-[235px] w-full md:h-[525px] object-contain"
                  // md:w-[333px]
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
                />
              </picture>
            </Col>
            {/* <Col xs={12} md={12}>
              <picture>
                <source
                  srcSet={
                    currentActiveTab === 1
                      ? MissionImgTwoWebp
                      : currentActiveTab === 2
                      ? MissionImgFourWebp
                      : MissionImgSixWebp
                  }
                  type="image/webp"
                  className="mt-4 h-[235px] w-full md:h-[525px] md:w-[333px]"
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
                />
                <img
                  src={
                    currentActiveTab === 1
                      ? MissionImgTwo
                      : currentActiveTab === 2
                      ? MissionImgFour
                      : MissionImgSix
                  }
                  className="mt-4 h-[235px] w-full md:h-[525px] md:w-[333px]"
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
                />
              </picture>
            </Col> */}
          </Row>
        </Col>
        <Col
          xs={24}
          md={12}
          className="relative flex items-center justify-center"
        >
          <div>
            {SectionFourHeadArr.map((item, index) => {
              return (
                <React.Fragment key={item?.title + index}>
                  <ReusableButtonBoxText
                    itemId={item}
                    onButtonClickAction={() => setCurrentActiveTab(item.id)}
                    currentActiveTab={currentActiveTab}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </Col>
        <Col xs={24} md={11} offset={1} className="hidden md:block">
          <Row justify={"end"}>
             {/* gutter={16} */}
            <Col xs={24} md={23}>
              <picture>
                <source
                  srcSet={
                    currentActiveTab === 1
                      ? MissionImgOneWebp
                      : currentActiveTab === 2
                      ? MissionImgTwoWebp
                      : MissionImgThreeWebp
                  }
                  type="image/webp"
                  className="mt-4 h-[235px] !w-full md:h-[535px] ourmission-image-right object-contain"
                  // md:w-[333px]
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
                />
                <img
                  src={
                    currentActiveTab === 1
                      ? MissionImgOne
                      : currentActiveTab === 2
                      ? MissionImgTwo
                      : MissionImgThree
                  }
                  className="mt-4 h-[235px] w-full md:h-[550px] ourmission-image-right object-contain"
                  // md:w-[333px]
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
                />
              </picture>
            </Col>
            {/* <Col xs={12} md={12}>
              <picture>
                <source
                  srcSet={
                    currentActiveTab === 1
                      ? MissionImgTwoWebp
                      : currentActiveTab === 2
                      ? MissionImgFourWebp
                      : MissionImgSixWebp
                  }
                  type="image/webp"
                  className="mt-4 h-[235px] w-full md:h-[525px] md:w-[333px]"
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
                />
                <img
                  src={
                    currentActiveTab === 1
                      ? MissionImgTwo
                      : currentActiveTab === 2
                      ? MissionImgFour
                      : MissionImgSix
                  }
                  className="mt-4 h-[235px] w-full md:h-[525px] md:w-[333px]"
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
                />
              </picture>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const ReusableButtonBoxText = (props) => {
  const { onButtonClickAction, currentActiveTab, itemId } = props;
  return (
    <div className="mb-0 mt-10 flex items-start justify-start md:mb-8 md:mt-0 xl:mb-0 xl:mt-10">
      <div>
        <button
          onClick={onButtonClickAction}
          className={`flex h-14 w-14 items-center justify-center rounded-full hover:text-black ${
            currentActiveTab === itemId?.id
              ? "bg-lightPurple"
              : "bg-[#43454F] hover:bg-lightPurple"
          }`}
        >
          <p
            className={`font-secondFont text-base font-bold  md:text-xl ${
              currentActiveTab === itemId?.id
                ? "text-white"
                : "text-[#E0E7E1] hover:bg-lightPurple"
            }`}
          >
            {itemId?.num}
          </p>
        </button>
        <img
          src={ArrowDownImg}
          className={`m-auto -mb-4 ${
            itemId?.id === 2 ? "mt-8" : "mt-4"
          } h-12 w-6 ${+itemId?.id === 3 ? "hidden" : "block"}`}
          alt={"Down Arrow"}
          title={"Down Arrow"}
        />
      </div>

      <div className="px-5 md:px-6 xl:px-11">
        <p
          className={`mb-3 font-body text-lg font-semibold md:text-[26px]  ${
            currentActiveTab === itemId?.id ? "text-white" : "text-[#43454F]"
          }`}
          style={{ lineHeight: "1.929rem" }}
        >
          {itemId?.title}
        </p>
        <p
          className={`w-11/12 font-body text-xs md:text-sm ${
            currentActiveTab === itemId?.id ? "text-white " : "text-[#43454F]"
          }`}
        >
          {itemId?.description}
        </p>
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
