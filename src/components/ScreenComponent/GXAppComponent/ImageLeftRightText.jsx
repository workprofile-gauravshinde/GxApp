import React from "react";
import { Col, Row } from "antd";
import BlurCollapse from "../../BlurCollapse";
import gridImg from "../../../assets/gxAppImg/Mockups/Grid.svg";
import PropTypes from "prop-types";
import { MotionAnimate } from "react-motion-animate";

const ImageLeftRightText = (props) => {
  const {
    mobileTopPadding,
    displayLeft,
    leftImgProp,
    rightImgProp,
    dataArr,
    headerText,
    paragraph,
  } = props;
  return (
    <React.Fragment>
      {displayLeft && (
        <Row
          justify={"center"}
          className={`md:pb20 h-auto w-screen items-center justify-center pb-2 ${
            mobileTopPadding === 1 && "pt-20"
          }`}
        >
          <Col
            xs={24}
            xl={12}
            className={
              "relative flex items-center justify-center pl-0 md:justify-start md:pl-9"
            }
          >
            <div
              className="gxApp-spread-background-purple absolute -z-10"
              style={{ left: "-5rem" }}
            />
            <img
              src={gridImg}
              className="absolute left-[76px] -z-10 h-44 w-44 md:left-0 md:h-52 md:w-52"
            />
            {/* <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            > */}
            <img src={leftImgProp} className="z-10 m-auto h-2/3 w-3/6 md:m-0" />
            {/* </MotionAnimate> */}
          </Col>
          <Col
            xs={24}
            xl={8}
            className={"z-10 items-center justify-center p-5 md:p-0"}
            id={"gxApp-blurCollapse"}
          >
            <div className="w-full text-center md:text-start">
              <MotionAnimate animation="fadeInUp" reset={true}>
                <h5 className="mb-4 font-secondFont text-xl font-bold text-white md:text-4xl">
                  {headerText}
                </h5>
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <p
                  className="mb-4 font-body text-sm font-normal md:text-xl"
                  style={{ color: "#FFFFFF80" }}
                >
                  {paragraph}
                </p>
              </MotionAnimate>
            </div>
            <div className="w-full md:w-5/6">
              {dataArr?.length > 0 &&
                dataArr.map((item, index) => {
                  return (
                    <React.Fragment key={index + item?.label}>
                      <BlurCollapse
                        headerText={item?.label}
                        content={item?.children}
                        icon={item?.icon}
                        keyNumber={1}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </Col>
        </Row>
      )}
      {!displayLeft && (
        <Row
          justify={"center"}
          className={`md-py-20 h-auto w-screen items-center justify-center py-2`}
        >
          <Col
            xs={24}
            xl={8}
            className={
              "z-10 hidden items-center justify-center p-5 md:block md:p-0"
            }
            id={"gxApp-blurCollapse"}
          >
            <div className="w-full text-center md:text-start">
              <MotionAnimate animation="fadeInUp" reset={true}>
                <h5 className="mb-4 font-secondFont text-xl font-bold text-white md:text-4xl">
                  {headerText}
                </h5>
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <p
                  className="mb-4 font-body text-sm font-normal md:text-xl"
                  style={{ color: "#FFFFFF80" }}
                >
                  {paragraph}
                </p>
              </MotionAnimate>
            </div>
            <div className="w-full md:w-5/6">
              {dataArr?.length > 0 &&
                dataArr.map((item, index) => {
                  return (
                    <React.Fragment key={index + item?.label}>
                      <BlurCollapse
                        headerText={item?.label}
                        content={item?.children}
                        icon={item?.icon}
                        keyNumber={1}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </Col>
          <Col
            xs={24}
            xl={12}
            className={
              "relative flex items-center justify-center pr-0 md:justify-end md:pr-9"
            }
          >
            <div
              className="gxApp-spread-background-purple absolute -z-10 hidden md:block"
              style={{ right: "-5rem" }}
            />
            <img
              src={gridImg}
              className="absolute right-[70px] -z-10 h-44 w-44 md:right-0 md:h-52 md:w-52"
            />
            {/* <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            > */}
            <img
              src={rightImgProp}
              className="z-10 m-auto h-2/3 w-3/6 md:mr-0"
            />
            {/* </MotionAnimate> */}
          </Col>
          <Col
            xs={24}
            xl={8}
            className={
              "z-10 block items-center justify-center p-5 md:hidden md:p-0"
            }
            id={"gxApp-blurCollapse"}
          >
            <div className="w-full text-center md:text-start">
              <MotionAnimate animation="fadeInUp" reset={true}>
                <h5 className="mb-4 font-secondFont text-xl font-bold text-white md:text-4xl">
                  {headerText}
                </h5>
              </MotionAnimate>
              <MotionAnimate animation="fadeInUp" reset={true}>
                <p
                  className="mb-4 font-body text-sm font-normal md:text-xl"
                  style={{ color: "#FFFFFF80" }}
                >
                  {paragraph}
                </p>
              </MotionAnimate>
            </div>
            <div className="w-full md:w-5/6">
              {dataArr?.length > 0 &&
                dataArr.map((item, index) => {
                  return (
                    <React.Fragment key={index + item?.label}>
                      <BlurCollapse
                        headerText={item?.label}
                        content={item?.children}
                        icon={item?.icon}
                        keyNumber={1}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

ImageLeftRightText.propTypes = {
  mobileTopPadding: PropTypes.number,
  displayLeft: PropTypes.bool,
  leftImgProp: PropTypes.string,
  rightImgProp: PropTypes.string,
  dataArr: PropTypes.array,
  headerText: PropTypes.string,
  paragraph: PropTypes.string,
};

export default ImageLeftRightText;
