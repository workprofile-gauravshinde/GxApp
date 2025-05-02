import React, { useState } from "react";
import {
  Col,
  Row,
  Flex,
  Progress,
  Tooltip,
  Avatar,
  Divider,
  Button,
} from "antd";
import { AntDesignOutlined, UserOutlined, FlagOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  FantasyConst,
  GX_FANTASY_WORKS,
} from "../../../utils/ConstantPageData/FantasyConstantData";
import NormalCollapse from "../../NormalCollapse";

import BallOne from "../../../assets/gxAppImg/Basketball icon.svg";
import avatarOne from "../../../assets/avatarOne.png";
import avatarTwo from "../../../assets/avatarTwo.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const GxFantasyWorks = () => {
  const navigate = useNavigate();

  const [activeIcon, setActiveIcon] = useState(true);

  return (
    <React.Fragment>
      <Row
        justify={"center"}
        className="relative bg-mainBackgroundTwo px-5 pt-16 md:pt-28 xl:pt-[150px]"
      >
        {/* <div className="home-spread-background-purple"></div> */}
        <div className="gxApp-spread-background-lightWhite hidden md:block"></div>
        <Col xs={24} id={"gxApp-faq"}>
          <Flex align="center" className="mb-5 justify-center md:mb-10 md:px-0">
            <p className="text-3xl font-bold text-white md:text-5xl">
              {FantasyConst.sectionFiveHead}
            </p>
          </Flex>
        </Col>
        <Row className="w-full px-32 py-32 items-center">
          <Col xs={24} xl={10} className="w-full">
            <div className="h-auto w-full">
              {GX_FANTASY_WORKS?.length > 0 &&
                GX_FANTASY_WORKS.map((item, index) => {
                  return (
                    <div key={index + item?.label}>
                      <NormalCollapse
                        count={item?.key}
                        headerText={item?.label}
                        content={item?.children}
                        keyNumber={1}
                      />
                      <div className="mx-auto mb-5 w-[95%] border-b border-b-white" />
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col xs={24} xl={2} className="hidden w-full md:block"></Col>
          <Col xs={24} xl={12} className="w-full border shadow-md bg-mainBackgroundTwo py-16 px-24">
            <div className="min-h-28 w-full">
              <Flex className="mb:0 mt-8 items-center justify-start gap-3" wrap>
                <img
                  src={BallOne}
                  className="h-8 w-8 rounded md:h-8 md:w-8 xl:h-9 xl:w-9"
                  alt={"Basketball icon"}
                  title={"Basketball icon"}
                />
                <p className="font-secondFont text-base font-bold text-white ">
                  5:00 PM ET (ATL vs BKN)
                </p>
              </Flex>
              <Flex className="items-end justify-between">
                <div className="w-[85%]">
                  <Avatar.Group
                    className="w-full"
                    size="large"
                    max={{
                      count: 4,
                      style: { color: "#FFFFFF", backgroundColor: "#8A66C5" },
                    }}
                  >
                    <Avatar src={avatarOne} />
                    <Avatar src={avatarTwo} />
                    <Avatar src={avatarOne} />
                    <Avatar src={avatarTwo} />
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#8A66C5" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#8A66C5" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                  <p className="mt-3 font-secondFont text-sm font-normal text-white">
                    Jalen, Ben, Trae, Clint, and 2 more
                  </p>
                </div>
                <div className="w-[15%]">
                  <p className="text-right font-secondFont text-xl font-semibold text-white">
                    5.1
                  </p>
                  <Tooltip className="text-right" title="240 mins left">
                    <Progress
                      percent={25}
                      status="active"
                      strokeColor="#686565"
                      trailColor="#87d068"
                      showInfo={false}
                    />
                  </Tooltip>
                  <p className="mb-6 mt-1 text-right font-spaceGrotesk text-sm font-medium text-white">
                    240 mins left
                  </p>
                </div>
              </Flex>
              <button
                className="mt-2 flex h-auto w-full items-center justify-between border-none bg-transparent px-0 py-3 text-white"
                onClick={() => setActiveIcon(!activeIcon)}
              >
                <p className="font-secondFont text-base font-medium">
                  Show Contest
                </p>
                <span>
                  {activeIcon ? (
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      className="fas fa-solid faArrowDown pt-1"
                      style={{ color: "#ffffff", fontSize: "1.5rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="fas fa-solid faArrowRight pt-1"
                      style={{ color: "#ffffff", fontSize: "1.5rem" }}
                    />
                  )}
                </span>
              </button>
              {activeIcon && (
                <div className="w-full pt-3 text-white ">
                  <p className="font-dmSans text-xl font-normal">
                    Full NBA Roster
                  </p>
                  <Flex className="items-center justify-start font-dmSans text-base font-light mt-3">
                    <div className="w-[15%]">
                      <p>Entry</p>
                      <p>1</p>
                    </div>
                    <div className="w-[60%]">
                      <p>Position</p>
                      <p>30th of 98</p>
                    </div>
                    <div className="w-[25%] text-right">
                      <p>Prizes</p>
                      <p>Macbook Pro</p>
                    </div>
                  </Flex>
                  <div className="w-full relative pt-12">
                  <FlagOutlined style={{fontSize: 30, position: 'absolute', left: 55, top: 25 }}/>
                    <Tooltip className="text-right"title="flag 30.2">
                      <Progress
                        percent={93}
                        status="active"
                        strokeColor="#686565"
                        trailColor="#87d068"
                        showInfo={false}
                      />
                    </Tooltip>
                    <p className="mb-6 mt-1 text-right font-spaceGrotesk text-sm font-medium text-white">
                      30.2
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default GxFantasyWorks;
