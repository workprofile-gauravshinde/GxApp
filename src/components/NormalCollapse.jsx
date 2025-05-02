import { useState } from "react";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const { Panel } = Collapse;

const NormalCollapse = (props) => {
  const {count, headerText, content, icon } = props;
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
        <p className="font-body text-xl font-semibold md:text-4xl text-white">
          Step {count}: {headerText}
        </p>
      </span>
      <span>
        {isActive ? (
          <FontAwesomeIcon
            icon={faArrowDown}
            className="fas fa-solid faArrowDown pt-1"
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowRight}
            className="fas fa-solid faArrowRight pt-1"
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
      className="mb-5 !px-0"
    >
      <Panel header={customHeader(activeIcon)}>
        <p
          className="font-body text-xl font-normal"
          style={{ color: "#FFFFFF92" }}
        >
          {content}
        </p>
      </Panel>
    </Collapse>
  );
};

export default NormalCollapse;
