import AboutEvent from "./components/AboutEvent/AboutEvent";
import Banner from "./components/Banner/Banner";
import Counter from "./components/Counter/Count";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import SchedulePlan from "./components/SchedulePlan/SchedulePlan";
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
      <SchedulePlan></SchedulePlan>
    </>
  );
};

export default Home;
