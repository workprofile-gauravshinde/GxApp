import Faqs from "../components/ScreenComponent/GXAppComponent/Faqs";
import ImageLeftRightText from "../components/ScreenComponent/GXAppComponent/ImageLeftRightText";
import InvestWithEase from "../components/ScreenComponent/GXAppComponent/InvestWithEase";

import PlayerLeftImg from "../assets/gxAppImg/Mockups/GX_APP_Profile.png";
import TransactionRightImg from "../assets/gxAppImg/Mockups/GX_APP_Transaction.png";
import AnalyticsLeftImg from "../assets/gxAppImg/Mockups/GX_APP_Analytics.png";
import {
  ANALYTICS_ARR,
  GxAppConst,
  PLAY_PROFILE,
  TRANSACTION_ARR,
} from "../utils/ConstantPageData/GxAppConstantData";
import TopSection from "../components/ScreenComponent/GXAppComponent/TopSection";
import { useEffect } from "react";

const GxApp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TopSection />
      <ImageLeftRightText
        mobileTopPadding={1}
        displayLeft={true}
        leftImgProp={PlayerLeftImg}
        rightImgProp={TransactionRightImg}
        dataArr={PLAY_PROFILE}
        headerText={GxAppConst.sectionTwoHead}
        paragraph={GxAppConst.sectionTwoDesc}
      />
      <ImageLeftRightText
        displayLeft={false}
        leftImgProp={PlayerLeftImg}
        rightImgProp={TransactionRightImg}
        dataArr={TRANSACTION_ARR}
        headerText={GxAppConst.sectionThreeHead}
        paragraph={GxAppConst.sectionThreeDesc}
      />
      <ImageLeftRightText
        displayLeft={true}
        leftImgProp={AnalyticsLeftImg}
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
