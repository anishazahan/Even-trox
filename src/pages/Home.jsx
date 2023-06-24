import AboutEvent from "./components/AboutEvent/AboutEvent";
import Banner from "./components/Banner/Banner";
import Counter from "./components/Counter/Count";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import SpeakerSection from "./components/Speaker/SpeakerSection";
import './Home.css'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutEvent></AboutEvent>
      <FeatureSection></FeatureSection>
      <SpeakerSection></SpeakerSection>
      <Counter></Counter>
    </>
  );
};

export default Home;
