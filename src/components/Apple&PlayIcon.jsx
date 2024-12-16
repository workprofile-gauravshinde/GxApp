import { Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ApplePlayIcon = (props) => {
  const {
    mainStyle,
    icon,
    smTextExtra,
    mdTextExtra,
    smText,
    mdText,
    iconSize,
    toUrl,
  } = props;
  return (
    <Link to={toUrl} target="_blank">
      <Flex
        gap={"14px"}
        align="center"
        className={`w-48 rounded-md px-3 py-2 shadow-md ${mainStyle}`}
      >
        {/* <img src={logo} className="h-5 w-[18px]" /> */}
        <FontAwesomeIcon
          icon={icon}
          className={`fas ${icon}`}
          style={{ color: "#ffffff", fontSize: iconSize }}
        />
        <div>
          <p className={`font-body font-normal text-white ${smTextExtra}`}>
            {smText}
          </p>
          <h5 className={`font-body font-bold text-white ${mdTextExtra}`}>
            {mdText}
          </h5>
        </div>
      </Flex>
    </Link>
  );
};

export default ApplePlayIcon;
