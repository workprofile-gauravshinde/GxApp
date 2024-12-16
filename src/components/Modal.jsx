import propTypes from "prop-types";

import { createPortal } from "react-dom";
import modalCloseIcon from "../assets/modal-close-icon.svg";

const Modal = ({ show, onClose }) => {
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
              srcSet="/images/modal-hero.png"
              media="(min-width: 768px)"
            />
            <img
              className="max-h-full max-w-full bg-lightGray"
              loading="eager"
              src="/images/modal-hero-mobile.png"
              alt="We are hiring, apply now"
            />
          </picture>
        </div>
        <div className="space-y-4 p-5 font-body md:space-y-[30px] md:p-[30px]">
          <h3 className="text-lg font-bold md:text-[28px] md:leading-[38px]">
            Apply for Your Dream Job Today!
          </h3>
          <p className="text-sm md:text-lg">
            Embarking on a new career path is an exciting endeavor, and
            we&apos;re delighted that you&apos;re considering joining our team
            at Sports GameX. To initiate the application process:
          </p>
          <p className="text-sm md:text-lg">
            Mail us your resume, portfolio, and mention the job title in the
            subject. We will get back to you.
          </p>
          <p className="font-spaceGrotesk text-xl font-bold text-neonYellow md:text-[28px]">
            Email: <a href="mailto:hr@sportsgamex.com">hr@sportsgamex.com</a>
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

Modal.propTypes = {
  show: propTypes.bool,
  onClose: propTypes.func,
};

export default Modal;
