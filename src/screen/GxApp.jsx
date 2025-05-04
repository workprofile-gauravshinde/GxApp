import { useEffect } from "react";
import {
  ANALYTICS_ARR,
  GxAppConst,
  PLAY_PROFILE,
  TRANSACTION_ARR,
} from "../utils/ConstantPageData/GxAppConstantData";
import TopSection from "../components/ScreenComponent/GXAppComponent/TopSection";
import Faqs from "../components/ScreenComponent/GXAppComponent/Faqs";
import ImageLeftRightText from "../components/ScreenComponent/GXAppComponent/ImageLeftRightText";
import InvestWithEase from "../components/ScreenComponent/GXAppComponent/InvestWithEase";

/* ALL IMAGES */
import PlayerLeftImgWebp from "../assets/gxAppImg/Mockups/GX_APP_Profile.webp";
import TransactionRightImgWebp from "../assets/gxAppImg/Mockups/GX_APP_Transaction.webp";
import AnalyticsLeftImgWebp from "../assets/gxAppImg/Mockups/GX_APP_Analytics.webp";
import PlayerLeftImg from "../assets/gxAppImg/Mockups/GX_APP_Profile.png";
import TransactionRightImg from "../assets/gxAppImg/Mockups/GX_APP_Transaction.png";
import AnalyticsLeftImg from "../assets/gxAppImg/Mockups/GX_APP_Analytics.png";
import topLeftImgWebp from "../assets/gxAppImg/Mockups/GX_APP_HOME DARK.webp";
import topLeftMobileImgWebp from "../assets/gxAppImg/Mockups/App_mobile.webp";
import topRightImgWebp from "../assets/gxAppImg/Mockups/GX_APP_HOME LIGHT.webp";
import topLeftImg from "../assets/gxAppImg/Mockups/GX_APP_HOME DARK.png";
import topLeftMobileImg from "../assets/gxAppImg/Mockups/App_mobile.png";
import topRightImg from "../assets/gxAppImg/Mockups/GX_APP_HOME LIGHT.png";

const GxApp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TopSection
        mainHead={GxAppConst?.sectionOneHead}
        mainSubDesc={GxAppConst?.sectionOneDesc}
        topLeftImgWebp={topLeftImgWebp}
        topLeftImg={topLeftImg}
        topLeftMobileImgWebp={topLeftMobileImgWebp}
        topLeftMobileImg={topLeftMobileImg}
        topRightImgWebp={topRightImgWebp}
        topRightImg={topRightImg}
      />
      <ImageLeftRightText
        mobileTopPadding={1}
        displayLeft={true}
        leftImgPropWebp={PlayerLeftImgWebp}
        leftImgProp={PlayerLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={PLAY_PROFILE}
        headerText={GxAppConst.sectionTwoHead}
        paragraph={GxAppConst.sectionTwoDesc}
      />
      <ImageLeftRightText
        displayLeft={false}
        leftImgPropWebp={PlayerLeftImgWebp}
        leftImgProp={PlayerLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={TRANSACTION_ARR}
        headerText={GxAppConst.sectionThreeHead}
        paragraph={GxAppConst.sectionThreeDesc}
      />
      <ImageLeftRightText
        displayLeft={true}
        leftImgPropWebp={AnalyticsLeftImgWebp}
        leftImgProp={AnalyticsLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={ANALYTICS_ARR}
        headerText={GxAppConst.sectionFourHead}
        paragraph={GxAppConst.sectionFourDesc}
      />
      <InvestWithEase />
      <Faqs />
    </div>
  );
};

export default GxApp;
