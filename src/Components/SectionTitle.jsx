import PropTypes from "prop-types";
const SectionTitle = ({ title, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export default SectionTitle;
