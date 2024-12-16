import React from "react";
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

const Footer = () => {
  return (
    <React.Fragment>
      <Row
        justify={"center"}
        className="relative bg-footerBackgroundTwo px-5 pb-16 pt-8 md:px-3 md:py-16"
      >
        <Col xs={24} md={22} lg={20} xl={20}>
          <Row className="pb-4" style={{ borderBottom: "2px solid #C7C7D7" }}>
            <Col xs={24} md={12} lg={12} xl={12}>
              <img
                src={logo}
                className="mx-auto mb-6 mt-14 h-16 w-16 md:mx-0 md:mb-0 md:mt-0"
                title={"GameX logo"}
                alt={"GameX logo"}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              lg={12}
              xl={12}
              className="mt-6 flex justify-center md:mt-0 md:justify-end"
            >
              <Flex gap="middle">
                <Link
                  to={"https://facebook.com"}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="fas faFacebookF pt-1"
                    style={{ color: "#ffffff", fontSize: "1.5rem" }}
                  />
                </Link>
                <Link
                  to={"https://twitter.com"}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fas faTwitter pt-1"
                    style={{ color: "#ffffff", fontSize: "1.5rem" }}
                  />
                </Link>
                <Link
                  to={"https://instagram.com"}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fas faInstagram pt-1"
                    style={{ color: "#ffffff", fontSize: "1.5rem" }}
                  />
                </Link>
              </Flex>
            </Col>
          </Row>
          <Row className="mt-8">
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
                className="mt-4 px-12 text-center font-spaceGrotesk text-base font-normal md:p-0 md:text-left"
                style={{ color: "#C7C7D7" }}
              >
                {footerConst.organizationAddress}
              </p>
              <div className="my-4 flex items-center justify-center md:justify-start">
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
              md={{ span: 8, offset: 3 }}
              lg={{ span: 8, offset: 3 }}
              xl={{ span: 8, offset: 3 }}
            >
              <p className="mt-9 text-center font-body text-lg font-semibold text-white md:mt-0 md:text-left">
                Download App
              </p>
              <Row justify={"start"} className="mt-0 md:mt-7">
                <Col
                  xs={24}
                  md={10}
                  className="my-6 mr-0 flex justify-center md:my-0 md:mr-8 md:justify-start"
                >
                  <ApplePlayIcon
                    mainStyle="bg-ApplePlayBg"
                    toUrl={footerConst.appleAppLink}
                    smText={"Download on the"}
                    mdText={"App Store"}
                    smTextExtra="text-xs"
                    mdTextExtra="text-md"
                    icon={faApple}
                    iconSize={"1.7rem"}
                  />
                </Col>
                <Col
                  xs={24}
                  md={10}
                  className="flex justify-center md:justify-start"
                >
                  <ApplePlayIcon
                    mainStyle="bg-ApplePlayBg"
                    toUrl={footerConst.playStoreLink}
                    smText={"GET IT ON"}
                    mdText={"Google Play"}
                    smTextExtra="text-xs"
                    mdTextExtra="text-md"
                    icon={faGooglePlay}
                    iconSize={"1.7rem"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="w-full bg-white text-black">
        <div className="mx-auto w-fit py-4 font-spaceGrotesk md:py-6">
          <p className="text-base font-medium">{footerConst.copyRights}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
