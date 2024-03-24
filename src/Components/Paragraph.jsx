import PropTypes from "prop-types";
const Paragraph = ({ name, children }) => {
  return (
    <p>
      <span className="text-lg font-bold">{name}: </span>
      <span className="text-gray-500">{children}</span>
    </p>
  );
};
Paragraph.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
};
export default Paragraph;
