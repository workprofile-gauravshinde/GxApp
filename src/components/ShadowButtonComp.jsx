import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const ShadowButtonComp = (props) => {
  const {
    extraCss,
    borderColor,
    backgroundColor,
    btnTitle,
    displayIcon,
    onClickBtn,
  } = props;
  return (
    <div className={`shadow-button-set ${extraCss}`}>
      <div style={{ backgroundColor: backgroundColor }}>
        <button
          onClick={onClickBtn}
          className="text-white"
          style={{
            border: `1px solid ${borderColor}`,
          }}
          aria-label={btnTitle}
        >
          {btnTitle}
          {displayIcon && (
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="fas faArrowRightLong ml-4"
              style={{ color: "#ffffff", fontSize: "0.875rem" }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

ShadowButtonComp.propTypes = {
  extraCss: PropTypes.string || PropTypes.object,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  btnTitle: PropTypes.string,
  onClickBtn: PropTypes.func.isRequired,
  displayIcon: PropTypes.bool,
};

export default ShadowButtonComp;
