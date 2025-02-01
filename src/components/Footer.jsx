import React, { useState } from "react";
import { Col, Row, Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import { footerConst } from "../utils/ConstantPageData/FooterConstantData";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import ApplePlayIcon from "./Apple&PlayIcon";
import twitterIcon from "../assets/twitter-icon.svg";
import fbIcon from "../assets/fb-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import instagramIcon from "../assets/instagram.svg";
import PlayAppleStoreModal from "./PlayAppleStoreModal";

const Footer = () => {
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
    <React.Fragment>
      <Row
        justify={"center"}
        className="relative bg-footerBackgroundTwo px-5 pb-16 pt-8 md:px-3 md:py-16"
      >
        <Col xs={24} md={22} lg={20} xl={20}>
          <Row className="pb-0 md:pb-4">
            <Col xs={24} md={12} lg={12} xl={12}>
              <img
                src={logo}
                className="mx-auto mb-6 mt-6 h-16 w-16 md:mx-0 md:mb-0 md:mt-0"
                title={"GameX logo"}
                alt={"GameX logo"}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              lg={12}
              xl={12}
              className="mt-3 flex items-center justify-center md:mt-0 md:justify-end"
            >
              <Flex gap="middle">
                <Link
                  to={"https://www.facebook.com/SportsGamex?mibextid=LQQJ4d"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mx-auto w-fit cursor-pointer md:mx-0"
                >
                  <img
                    src={fbIcon}
                    alt="facebook icon"
                    width="48"
                    height="27"
                  />
                </Link>
                <Link
                  to={"https://twitter.com/SportsGameX"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto w-fit cursor-pointer md:mx-0"
                >
                  <img
                    src={twitterIcon}
                    alt="twitter icon"
                    width="48"
                    height="27"
                  />
                </Link>
                <Link
                  to={"https://www.linkedin.com/company/94191108"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto w-fit cursor-pointer md:mx-0"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon"
                    width="48"
                    height="27"
                  />
                </Link>
                <Link
                  to={"https://www.instagram.com/sportsgamex/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-white bg-white p-2 md:mx-0"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram icon"
                    width="48"
                    height="27"
                  />
                </Link>
              </Flex>
            </Col>
          </Row>
          <div
            className="my-8 md:my-0"
            style={{ borderBottom: "2px solid #C7C7D7" }}
          ></div>
          <Row className="mt-0 md:mt-8">
            <Col xs={24} md={6} lg={6} xl={6}>
              <div className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faHome}
                  className="fas faHome"
                  style={{ color: "#ffffff", fontSize: "1.125rem" }}
                />
                <p className="ml-3 font-spaceGrotesk text-lg font-bold text-white">
                  Philadelphia Office
                </p>
              </div>
              <p
                className="mt-5 px-12 text-center font-spaceGrotesk text-base font-normal md:p-0 md:text-left"
                style={{ color: "#C7C7D7" }}
              >
                {footerConst.organizationAddress}
              </p>
              <div className="my-5 flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fas faPhone"
                  style={{ color: "#ffffff", fontSize: "1.125rem" }}
                />
                <p
                  className="ml-3 font-spaceGrotesk text-base font-normal"
                  style={{ color: "#C7C7D7" }}
                >
                  {footerConst.organizationNumber}
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fas faEnvelope"
                  style={{ color: "#ffffff", fontSize: "1.125rem" }}
                />
                <p
                  className="ml-3 font-spaceGrotesk text-base font-normal"
                  style={{ color: "#C7C7D7" }}
                >
                  {footerConst.organizationEmail}
                </p>
              </div>
            </Col>
            <Col
              xs={24}
              md={{ span: 12, offset: 3 }}
              lg={{ span: 12, offset: 3 }}
              xl={{ span: 12, offset: 3 }}
            >
              <p className="mb-6 mt-9 text-center font-body text-lg font-semibold text-white md:mb-0 md:mt-0 md:text-left">
                Download App
              </p>
              <Row
                justify={"start"}
                className="mt-0 flex-col items-center md:mt-7 md:flex-row md:items-start"
              >
                <div className="h-[42px] w-[158px]">
                  <ApplePlayIcon
                    mainStyle="bg-ApplePlayBg"
                    toUrl={openModal("apple")}
                    smText={"Download on the"}
                    mdText={"App Store"}
                    smTextExtra="text-[9px]"
                    mdTextExtra="text-[15px]"
                    icon={faApple}
                    iconSize={"1.7rem"}
                  />
                </div>
                <div className="ml-0 mt-8 h-[42px] w-[158px] md:ml-5 md:mt-0">
                  <ApplePlayIcon
                    mainStyle="bg-ApplePlayBg"
                    toUrl={openModal("play")}
                    smText={"GET IT ON"}
                    mdText={"Google Play"}
                    smTextExtra="text-[9px]"
                    mdTextExtra="text-[15px]"
                    icon={faGooglePlay}
                    iconSize={"1.7rem"}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="w-full bg-white text-black">
        <div className="mx-auto w-fit py-4 font-spaceGrotesk md:py-6">
          <p className="text-base font-medium">
            © <span>{new Date().getFullYear()}</span> {footerConst.copyRights}
          </p>
        </div>
      </div>
      {showModal && (
        <PlayAppleStoreModal
          show={showModal}
          onClose={closeModal}
          activeType={actionType}
        />
      )}
    </React.Fragment>
  );
};

export default Footer;
