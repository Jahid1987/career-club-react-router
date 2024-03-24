import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Category from "./Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <section>
      <SectionTitle
        title="Job Category List"
        text="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionTitle>
      <div className="grid grid-cols-4 gap-4 max-w-[90%] mx-auto">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
