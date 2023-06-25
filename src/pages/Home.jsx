import AboutEvent from "./components/AboutEvent/AboutEvent";
import Banner from "./components/Banner/Banner";
import Counter from "./components/Counter/Count";
import Evemt from "./components/Event/Evemt";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import SchedulePlan from "./components/SchedulePlan/SchedulePlan";
import SpeakerSection from "./components/Speaker/SpeakerSection";
import VedioSection from "./components/VedioSection/VedioSection";
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
      <PricingPlan></PricingPlan>
      <VedioSection></VedioSection>
      <Evemt></Evemt>
    </>
  );
};

export default Home;
