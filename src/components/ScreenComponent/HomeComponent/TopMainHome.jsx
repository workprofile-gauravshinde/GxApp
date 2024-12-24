import { Col, Row } from "antd";
import ShadowButtonComp from "../../ShadowButtonComp";
import LandingImageWebp from "../../../assets/Home/Landing_image.webp";
import LandingImage from "../../../assets/Home/Landing_image.png";
import ScrollMouse from "../../ScrollMouse";
import { homeData } from "../../../utils/ConstantPageData/Home";
import PrimaryButton from "../../PrimaryButton";

const TopMainHome = (props) => {
  const { onAboutClick } = props;
  return (
    <>
      <Row
        justify={"center"}
        className="boxSquare relative h-auto items-start overflow-hidden bg-mainBackground px-4 md:h-[60vh] md:items-center md:px-12 xl:h-[85vh] xl:px-32"
        // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div className="gxApp-spread-background-pink"></div>
        <Col
          className="gutter-row hidden items-start md:block xl:block"
          xs={24}
          md={12}
        >
          <p className="font-secondFont text-[64px] font-bold text-white">
            {homeData?.SectionOneHead}
          </p>
          <p
            className="mb-5 font-body text-xl font-normal"
            style={{ color: "#FDFDFD80" }}
          >
            {homeData?.SectionOneDesc}
          </p>
          <p
            className="font-body text-xl font-normal"
            style={{ color: "#FDFDFD80" }}
          >
            {homeData?.SectionOneDescTwo}
          </p>
          <div className="mt-9 flex justify-start">
            {/* <ShadowButtonComp
              btnTitle={homeData?.SectionOneBtnText}
              extraCss={"z-10"}
              borderColor={"#000000"}
              backgroundColor={"#ffffff"}
              onClickBtn={() => {}}
            /> */}
            <PrimaryButton onClick={onAboutClick}>
              {homeData?.SectionOneBtnText}
            </PrimaryButton>
          </div>
        </Col>
        <Col
          className="gutter-row flex justify-center md:justify-end"
          xs={24}
          md={12}
        >
          {/* <img
            src={LandingImage}
            className="mb-0 h-[325px] w-[90%] md:h-auto md:w-[85%] xl:mb-10 xl:h-[460px] xl:w-[486px]"
            alt="SportsGameX"
            title="SportsGameX"
          /> */}
          <picture className="mb-0 h-[325px] w-[90%] md:h-auto md:w-[85%] xl:mb-10 xl:h-[460px] xl:w-[486px]">
            <source
              srcSet={LandingImageWebp}
              type="image/webp"
              className="h-auto w-full"
              alt="SportsGameX"
              title="SportsGameX"
            />
            <img
              src={LandingImage}
              className="h-auto w-full"
              alt="SportsGameX"
              title="SportsGameX"
            />
          </picture>
        </Col>
        <Col
          className="gutter-row mb-24 mt-12 block items-start px-0 text-center md:hidden md:px-10"
          xs={24}
          md={12}
        >
          <p className="mb-10 font-secondFont text-3xl font-bold text-white md:text-5xl">
            {homeData?.SectionOneHead}
          </p>
          <p
            className="mb-5 font-body text-base font-normal md:text-xl"
            style={{ color: "#FDFDFD80" }}
          >
            {homeData?.SectionOneDesc}
          </p>
          <p
            className="font-body text-base font-normal md:text-xl"
            style={{ color: "#FDFDFD80" }}
          >
            {homeData?.SectionOneDescTwo}
          </p>
          <div className="mt-9 flex justify-center">
            {/* <ShadowButtonComp
              btnTitle={homeData?.SectionOneBtnText}
              extraCss={"z-10"}
              borderColor={"#000000"}
              backgroundColor={"#ffffff"}
              onClickBtn={() => {}}
            /> */}
            <PrimaryButton onClick={onAboutClick}>
              {homeData?.SectionOneBtnText}
            </PrimaryButton>
          </div>
        </Col>
        <div className="absolute bottom-5 right-0">
          <ScrollMouse />
        </div>
      </Row>
      {/* <Row className="boxSqure h-screen bg-mainBackground"></Row> */}
    </>
  );
};

export default TopMainHome;
