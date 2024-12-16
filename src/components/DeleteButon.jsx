import PropTypes from "prop-types";

const DeleteButton = ({ children, onClick }) => {
  return (
    <button
      className="whitespace-nowrap rounded-lg border border-black bg-[#EE2400] px-4 py-3 text-base font-semibold tracking-[-1.44px] text-white shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition-all hover:translate-x-1  hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(255,255,255)] md:px-8 md:py-4"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

DeleteButton.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};

export default DeleteButton;
