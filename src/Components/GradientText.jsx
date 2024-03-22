import PropTypes from "prop-types";
const GradientText = ({
  fontSize = 16,
  fontWeight = 400,
  text = "Some Text",
}) => {
  return (
    <span
      style={{
        background:
          "var(--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: `${fontWeight}`,
        fontSize: `${fontSize}px`,
      }}
    >
      {text}
    </span>
  );
};
GradientText.propTypes = {
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  text: PropTypes.string,
};
export default GradientText;
