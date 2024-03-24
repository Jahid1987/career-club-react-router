import hero from "../assets/user.png";
import Button from "./Button";
import GradientText from "./GradientText";
const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
      }}
      className="hero"
    >
      <div className="hero-content py-0 flex-col lg:flex-row-reverse">
        <img src={hero} className="max-w-sm" />
        <div>
          <h1 className="text-5xl font-bold">
            One Step Closer To Your
            <GradientText
              text="Dream Job"
              fontSize={60}
              fontWeight={600}
            ></GradientText>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button name="Get Started"></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
