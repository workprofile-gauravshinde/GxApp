import { useState } from "react";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const { Panel } = Collapse;

const BlurCollapse = (props) => {
  const { headerText, content, icon } = props;
  const [activeIcon, setActiveIcon] = useState(false);

  const customHeader = (isActive) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span className="flex items-center justify-between">
        <img src={icon} className="mr-5 h-6 w-6 md:h-9 md:w-9" />
        <h4 className="font-body text-base font-semibold md:text-2xl">
          {headerText}
        </h4>
      </span>
      <span>
        {isActive ? (
          <FontAwesomeIcon
            icon={faAngleUp}
            className="fas fa-solid faAngleUp pt-1"
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAngleDown}
            className="fas fa-solid faAngleDown pt-1"
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        )}
      </span>
    </div>
  );
  return (
    <Collapse
      expandIcon={({ isActive }) => setActiveIcon(isActive)}
      size="middle"
      accordion
      ghost={true}
      //   contentBg={"transparent"}
      className="mb-5"
    >
      <Panel header={customHeader(activeIcon)}>
        <p
          className="font-body text-sm font-normal"
          style={{ color: "#FFFFFF80" }}
        >
          {content}
        </p>
      </Panel>
    </Collapse>
  );
};

export default BlurCollapse;
