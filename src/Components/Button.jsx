import PropTypes from "prop-types";
const Button = ({ name = "Button", handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn btn-sm md:btn-md text-white"
      style={{
        borderRadius: "8px",
        background:
          "var(--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))",
      }}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;
