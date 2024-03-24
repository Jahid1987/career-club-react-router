import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Jobs from "../Components/Jobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* job category section  */}
      <section className="mt-20">
        <Categories></Categories>
      </section>
      {/* featured jobs  */}
      <section className="my-20">
        <Jobs></Jobs>
      </section>
    </div>
  );
};

export default Home;
