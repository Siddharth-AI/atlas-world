import { FaLongArrowAltRight } from "react-icons/fa";
import worldImg from "../../assets/images/world.png";
export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, Culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src={worldImg} alt="world is beauty" className="banner-image" />
        </div>
      </div>
    </main>
  );
};
