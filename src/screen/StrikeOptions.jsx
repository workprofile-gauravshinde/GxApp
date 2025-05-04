import { useEffect } from "react";
import TopSection from "../components/ScreenComponent/GXAppComponent/TopSection";
import {
  STRIKE_CONST,
  PLAYER_PROFILE,
  TOP_ATHLETES,
} from "../utils/ConstantPageData/StrikeOptionsConstantData";

/* ALL IMAGES */
import ImageLeftRightText from "../components/ScreenComponent/GXAppComponent/ImageLeftRightText";
import PlayerLeftImgWebp from "../assets/strikeOptions/strike_options_home.png";
import TransactionRightImgWebp from "../assets/strikeOptions/strike_options_landing_full.webp";
import PlayerLeftImg from "../assets/strikeOptions/strike_options_home.png";
import TransactionRightImg from "../assets/strikeOptions/strike_options_landing_full.png";
import topLeftImgWebp from "../assets/strikeOptions/strike_options_home.webp";
import topLeftMobileImgWebp from "../assets/strikeOptions/strike_options_landing.webp";
import topRightImgWebp from "../assets/strikeOptions/strike_options_landing.webp";
import topLeftImg from "../assets/strikeOptions/strike_options_home.png";
import topLeftMobileImg from "../assets/strikeOptions/strike_options_landing.png";
import topRightImg from "../assets/strikeOptions/strike_options_landing.png";

const StrikeOptions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TopSection
        mainHead={STRIKE_CONST?.sectionOneHead}
        mainSubDesc={STRIKE_CONST?.sectionOneDesc}
        topLeftImgWebp={topLeftImgWebp}
        topLeftImg={topLeftImg}
        topLeftMobileImgWebp={topLeftMobileImgWebp}
        topLeftMobileImg={topLeftMobileImg}
        topRightImgWebp={topRightImgWebp}
        topRightImg={topRightImg}
        actionBy={"STRIKE_OPTIONS"}
      />
      <ImageLeftRightText
        mobileTopPadding={1}
        displayLeft={true}
        leftImgPropWebp={PlayerLeftImgWebp}
        leftImgProp={PlayerLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={PLAYER_PROFILE}
        headerText={STRIKE_CONST.sectionTwoHead}
        paragraph={STRIKE_CONST.sectionTwoDesc}
      />
      <ImageLeftRightText
        displayLeft={false}
        leftImgPropWebp={PlayerLeftImgWebp}
        leftImgProp={PlayerLeftImg}
        rightImgPropWebp={TransactionRightImgWebp}
        rightImgProp={TransactionRightImg}
        dataArr={TOP_ATHLETES}
        headerText={STRIKE_CONST.sectionThreeHead}
        paragraph={STRIKE_CONST.sectionThreeDesc}
      />
    </div>
  );
};

export default StrikeOptions;
