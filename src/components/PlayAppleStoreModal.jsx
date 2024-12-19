import propTypes from "prop-types";

import { createPortal } from "react-dom";
import modalCloseIcon from "../assets/modal-close-icon.svg";
import playStoreIcon from "../assets/icons/playstore.png";
import appStoreIcon from "../assets/icons/App Store.png";

const PlayAppleStoreModal = ({ show, onClose, activeType }) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative m-4 max-h-full max-w-[350px] bg-secondaryBg font-body text-white md:max-w-[691px]"
      >
        <div
          onClick={onClose}
          className="absolute right-2 top-4 cursor-pointer md:right-6 md:top-7"
        >
          <img
            src={modalCloseIcon}
            className="h-8 w-8 active:ring-2 md:h-[50px] md:w-[50px]"
            alt="close modal"
            loading="eager"
          />
        </div>
        <div className="max-h-[205px] max-w-full bg-lightGray md:max-h-[298px]">
          <picture>
            <source
              srcSet={activeType === "play" ? playStoreIcon : appStoreIcon}
              media="(min-width: 768px)"
            />
            <img
              className="max-h-full max-w-full bg-lightGray"
              loading="eager"
              src={activeType === "play" ? playStoreIcon : appStoreIcon}
              alt="We are hiring, apply now"
            />
          </picture>
        </div>
        <div className="space-y-4 bg-mainBackground p-5 font-body md:space-y-[30px] md:p-[30px]">
          <p className="text-lg font-bold md:text-[28px] md:leading-[38px]">
            🚀 The wait Is Almost Over!
          </p>
          <p className="text-sm md:text-lg">
            The GX App is launching soon on the{" "}
            {activeType === "play" ? "Play" : "App"} Store. We're putting the
            finishing touches on the ultimate sports trading experience.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

PlayAppleStoreModal.propTypes = {
  show: propTypes.bool,
  onClose: propTypes.func,
  activeType: propTypes.string,
};

export default PlayAppleStoreModal;
