import Banner from "../Components/Banner";
import ButtonOutline from "../Components/ButtonOutline";
import Categories from "../Components/Categories";
import GradientText from "../Components/GradientText";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* job category section  */}
      <section className="mt-20">
        <Categories></Categories>
      </section>
      <GradientText></GradientText>
      <ButtonOutline></ButtonOutline>
    </div>
  );
};

export default Home;
