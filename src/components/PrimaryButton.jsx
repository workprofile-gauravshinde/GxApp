import PropTypes from "prop-types";

const PrimaryButton = ({ children, onClick, full, submit }) => {
  return (
    <button
      onClick={onClick}
      type={`${submit ? "submit" : "button"}`}
      className={`${
        full ? "w-full" : "w-fit"
      } whitespace-nowrap rounded-lg border border-black bg-neonYellow px-4 py-3 font-body text-base font-semibold tracking-[-1.44px] text-black shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(255,255,255)] focus:translate-x-1 focus:translate-y-1 focus:shadow-[0px_0px_0px_0px_rgba(255,255,255)] focus-visible:translate-x-1 focus-visible:translate-y-1 focus-visible:shadow-[0px_0px_0px_0px_rgba(255,255,255)] md:px-8 md:py-4`}
      aria-label="Submit"
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  full: PropTypes.bool,
  submit: PropTypes.bool,
};

export default PrimaryButton;
