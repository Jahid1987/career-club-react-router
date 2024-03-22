import GradientText from "./GradientText";
import PropTypes from "prop-types";
const ButtonOutline = ({ name = "Button" }) => {
  return (
    <button
      style={{
        padding: "9px 19px",
        borderRadius: "4px",
        border: "1px solid var(--Linear, #7E90FE)",
      }}
    >
      <GradientText text={name} fontWeight={700}></GradientText>
    </button>
  );
};
ButtonOutline.propTypes = {
  name: PropTypes.string,
};
export default ButtonOutline;
