import { Col, Row } from "antd";
import React, { useState } from "react";
import topLeftImgWebp from "../../../assets/gxAppImg/Mockups/GX_APP_HOME DARK.webp";
import topLeftMobileImgWebp from "../../../assets/gxAppImg/Mockups/App_mobile.webp";
import topRightImgWebp from "../../../assets/gxAppImg/Mockups/GX_APP_HOME LIGHT.webp";
import topLeftImg from "../../../assets/gxAppImg/Mockups/GX_APP_HOME DARK.png";
import topLeftMobileImg from "../../../assets/gxAppImg/Mockups/App_mobile.png";
import topRightImg from "../../../assets/gxAppImg/Mockups/GX_APP_HOME LIGHT.png";
import leftPlayStoreImg from "../../../assets/Home/Play_store CTA SVG.svg";
import rightAppleStoreImg from "../../../assets/Home/App_store CTA SVG.svg";
import ScrollMouse from "../../ScrollMouse";
import { GxAppConst } from "../../../utils/ConstantPageData/GxAppConstantData";
import PlayAppleStoreModal from "../../PlayAppleStoreModal";

const TopSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("play");

  const openModal = (typeAction) => () => {
    setShowModal(true);
    setActionType(typeAction);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

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
          <button
            onClick={openModal("play")}
            aria-label="Play Store"
            className="mr-5 h-[53px] w-[180px]"
          >
            <img
              src={leftPlayStoreImg}
              className="h-auto w-full"
              alt="Play Store"
              title="Play Store"
            />
          </button>
          {/* </Col>
          <Col xs={24} md={10} className="flex justify-center md:justify-start"> */}
          <button
            onClick={openModal("apple")}
            aria-label="Apple Store"
            className="h-[53px] w-[180px]"
          >
            <img
              src={rightAppleStoreImg}
              className="h-auto w-full"
              alt="Apple Store"
              title="Apple Store"
            />
          </button>
          {/* </Col> */}
        </Row>
      </Col>
      <Col
        className="gutter-row relative flex items-end justify-center align-middle md:justify-start"
        xs={24}
        md={12}
        xl={14}
      >
        <picture className="mb-0 hidden h-[354px] w-[333px] md:mb-10 md:block md:h-[430px] xl:h-[675px]">
          <source
            srcSet={topLeftImgWebp}
            type="image/webp"
            className="h-auto w-full"
            // className="mb-0 hidden h-[354px] w-[333px] md:mb-10 md:block md:h-[430px] xl:h-[675px]"
            alt="GX APP"
            title="GX APP"
          />
          <img
            src={topLeftImg}
            className="h-auto w-full"
            // className="mb-0 hidden h-[354px] w-[333px] md:mb-10 md:block md:h-[430px] xl:h-[675px]"
            alt="GX APP"
            title="GX APP"
          />
        </picture>
        <picture className="mb-0 block h-[325px] w-5/6 md:hidden">
          <source
            srcSet={topLeftMobileImgWebp}
            type="image/webp"
            className="h-auto w-full"
            // className="mb-0 block h-[325px] w-5/6 md:hidden"
            alt="GX APP"
            title="GX APP"
          />
          <img
            src={topLeftMobileImg}
            className="h-auto w-full"
            // className="mb-0 block h-[325px] w-5/6 md:hidden"
            alt="GX APP"
            title="GX APP"
          />
        </picture>
        <picture className="ml-0 hidden h-[354px] w-[343px] md:ml-5 md:block md:h-[330px] xl:h-[500px]">
          <source
            srcSet={topRightImgWebp}
            type="image/webp"
            className="h-auto w-full"
            // className="ml-0 hidden h-[354px] w-[343px] md:ml-5 md:block md:h-[330px] xl:h-[500px]"
            alt="GX APP"
            title="GX APP"
          />
          <img
            src={topRightImg}
            className="h-auto w-full"
            // className="ml-0 hidden h-[354px] w-[343px] md:ml-5 md:block md:h-[330px] xl:h-[500px]"
            alt="GX APP"
            title="GX APP"
          />
        </picture>
        {/* <picture>
          <source
            srcSet={topLeftImgWebp}
            type="image/webp"
            className="mb-0 hidden h-[354px] w-[333px] md:mb-10 md:block md:h-[430px] xl:h-[675px]"
            alt="GX APP"
            title="GX APP"
          /> 
        <img
          src={topLeftImg}
          className="mb-0 hidden h-[354px] w-[333px] md:mb-10 md:block md:h-[430px] xl:h-[675px]"
          alt="GX APP"
          title="GX APP"
        />
        </picture>
        <picture>
          <source
            srcSet={topLeftMobileImgWebp}
            type="image/webp"
            className="mb-0 block h-[325px] w-5/6 md:hidden"
            alt="GX APP"
            title="GX APP"
          />
        <img
          src={topLeftMobileImg}
          className="mb-0 block h-[325px] w-5/6 md:hidden"
          alt="GX APP"
          title="GX APP"
        />
         </picture>
        <picture>
          <source
            srcSet={topRightImgWebp}
            type="image/webp"
            className="ml-0 hidden h-[354px] w-[343px] md:ml-5 md:block md:h-[330px] xl:h-[500px]"
            alt="GX APP"
            title="GX APP"
          />
        <img
          src={topRightImg}
          className="ml-0 hidden h-[354px] w-[343px] md:ml-5 md:block md:h-[330px] xl:h-[500px]"
          alt="GX APP"
          title="GX APP"
        />
        </picture> */}
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
            <button
              onClick={openModal("play")}
              aria-label="Play Store"
              className="mr-0 h-[53px] w-[180px] md:mr-5"
            >
              <img
                src={leftPlayStoreImg}
                className="h-auto w-full"
                alt="Play Store"
                title="Play Store"
              />
            </button>
          </Col>
          <Col xs={24} md={10} className="flex justify-center md:justify-start">
            <button
              onClick={openModal("apple")}
              aria-label="Apple Store"
              className="h-[53px] w-[180px]"
            >
              <img
                src={rightAppleStoreImg}
                className="h-auto w-full"
                alt="Apple Store"
                title="Apple Store"
              />
            </button>
          </Col>
          <div className="absolute -right-2 bottom-6 block md:hidden">
            <ScrollMouse />
          </div>
        </Row>
      </Col>
      {showModal && (
        <PlayAppleStoreModal
          show={showModal}
          onClose={closeModal}
          activeType={actionType}
        />
      )}
    </Row>
  );
};

export default TopSection;
