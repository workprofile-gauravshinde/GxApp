import { useEffect } from "react";
import TopSection from "../components/ScreenComponent/GXAppComponent/TopSection";
import ImageLeftRightText from "../components/ScreenComponent/GXAppComponent/ImageLeftRightText";
import { FantasyConst, RECOMMENDED_LINEUPS_ARR, REWARDS_ARR, SELECT_PLAYERS_ARR } from "../utils/ConstantPageData/FantasyConstantData";

import PlayerLeftImgWebp from "../assets/gxAppImg/Mockups/GX_APP_Profile.webp";
import TransactionRightImgWebp from "../assets/gxAppImg/Mockups/GX_APP_Transaction.webp";
import AnalyticsLeftImgWebp from "../assets/gxAppImg/Mockups/GX_APP_Analytics.webp";
import PlayerLeftImg from "../assets/gxAppImg/Mockups/GX_APP_Profile.png";
import TransactionRightImg from "../assets/gxAppImg/Mockups/GX_APP_Transaction.png";
import AnalyticsLeftImg from "../assets/gxAppImg/Mockups/GX_APP_Analytics.png";
import GxFantasyWorks from "../components/ScreenComponent/FantasyComponent/GxFantasyWorks";

const Fantasy = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  
    return (
      <div>
       <TopSection screeName="FANTASY"/>
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
      />
      <GxFantasyWorks/>
      </div>
    );
  };
  
  export default Fantasy;
  