import PropTypes from "prop-types";
const SectionTitle = ({ title, text }) => {
  return (
    <div className="max-w-[90%] mx-auto text-center mb-5">
      <h2 className=" text-5xl font-bold ">{title}</h2>
      <p className="text-base text-gray-500 font-medium mt-4">{text}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export default SectionTitle;
