import PropTypes from "prop-types";
const Button = ({ name = "Button", handleClick, width }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn btn-sm md:btn-md text-white ${width ? "w-full" : ""}`}
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
  width: PropTypes.string,
};
export default Button;
