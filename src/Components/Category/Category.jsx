import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
      }}
      className=" w-full max-w-md rounded-lg space-y-3 p-10 flex flex-col justify-between"
    >
      <img src={logo} alt={category_name} />
      <h3 className="text-lg font-bold">{category_name}</h3>
      <p className="text-gray-500">{availability}</p>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object,
};
export default Category;
