import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
      }}
      className=" w-full max-w-md rounded-lg space-y-3 p-6 flex flex-col justify-between"
    >
      <div
        className="h-[70px] w-[70px] rounded-md grid place-items-center"
        style={{
          borderRadius: "8px",
          background:
            "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)",
        }}
      >
        <img src={logo} alt={category_name} />
      </div>
      <h3 className="text-md font-bold">{category_name}</h3>
      <p className="text-gray-500">{availability}</p>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object,
};
export default Category;
