import { useEffect } from "react";
import TopSection from "../components/ScreenComponent/GXAppComponent/TopSection";
import ImageLeftRightText from "../components/ScreenComponent/GXAppComponent/ImageLeftRightText";
import {
  FantasyConst,
  RECOMMENDED_LINEUPS_ARR,
  REWARDS_ARR,
  SELECT_PLAYERS_ARR,
} from "../utils/ConstantPageData/FantasyConstantData";

import PlayerLeftImgWebp from "../assets/Fantasy/Mockups/lineups.webp";
import TransactionRightImgWebp from "../assets/Fantasy/Mockups/SelectScreen.webp";
import AnalyticsLeftImgWebp from "../assets/Fantasy/Mockups/Rewards.webp";
import PlayerLeftImg from "../assets/Fantasy/Mockups/lineups.png";
import TransactionRightImg from "../assets/Fantasy/Mockups/SelectScreen.png";
import AnalyticsLeftImg from "../assets/Fantasy/Mockups/Rewards.png";
import GxFantasyWorks from "../components/ScreenComponent/FantasyComponent/GxFantasyWorks";
import topLeftImgWebp from "../assets/Fantasy/Mockups/HomeFantasy.webp";
import topLeftMobileImgWebp from "../assets/gxAppImg/Mockups/App_mobile.webp";
import topRightImgWebp from "../assets/Fantasy/Mockups/HomeFantasyLight.webp";
import topLeftImg from "../assets/Fantasy/Mockups/HomeFantasy.png";
import topLeftMobileImg from "../assets/gxAppImg/Mockups/App_mobile.png";
import topRightImg from "../assets/Fantasy/Mockups/HomeFantasyLight.png";

const Fantasy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TopSection
        mainHead={FantasyConst?.sectionOneHead}
        mainSubDesc={FantasyConst?.sectionOneDesc}
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
        dataArr={RECOMMENDED_LINEUPS_ARR}
        headerText={FantasyConst.sectionTwoHead}
        paragraph={FantasyConst.sectionTwoDesc}
      />
      <ImageLeftRightText
        displayLeft={false}
        leftImgPropWebp={PlayerLeftImgWebp}
        leftImgProp={PlayerLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={SELECT_PLAYERS_ARR}
        headerText={FantasyConst.sectionThreeHead}
        paragraph={FantasyConst.sectionThreeDesc}
      />
      <ImageLeftRightText
        displayLeft={true}
        leftImgPropWebp={AnalyticsLeftImgWebp}
        leftImgProp={AnalyticsLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={REWARDS_ARR}
        headerText={FantasyConst.sectionFourHead}
        paragraph={FantasyConst.sectionFourDesc}
        extraCss={"mb-10"}
      />
      <GxFantasyWorks />
    </div>
  );
};

export default Fantasy;
