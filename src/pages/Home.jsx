import AboutEvent from "./components/AboutEvent/AboutEvent";
import Banner from "./components/Banner/Banner";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import './Home.css'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutEvent></AboutEvent>
      <FeatureSection></FeatureSection>
    </>
  );
};

export default Home;
