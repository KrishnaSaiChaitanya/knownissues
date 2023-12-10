import logo from "./logo.svg";
import "./App.css";
import TextSlider from "./Components/TextSlider";
import Home from "./Components/Home";
import BackgrounAnimation from "./Components/BackgrounAnimation";
import Features from "./Components/Features";

import FeaturesSection from "./Components/featuresSection";
import SectionComponent from "./Components/TakeControl";
import BonusContent from "./Components/BonusContent";
import NewBonus from "./Components/NewBonus";
import Slider from "./Components/Slider";
import Special from "./Components/Special";
import FeatureSection from "./Components/FeatureSection";

function App() {
  const texts = [
    "A big welcome and thank you for joining our community!",
    "We created this app to help others (and, ourselves), lead happier, healthier, more fulfilling lives.",
    "Within this app — and, based on your membership level — you'll find a varying degree of semi-interactive and fully interactive features centered around getting more from life.",
    "In our Freebies section, you'll find our Curated Content and Destinations sections...",
    "... which contain thousands of hand-selected videos for varying topics and destinations worldwide.",
    "Within the Xclusives section, you'll find our centerpiece features (available to Glow membership and above).",
  ];

  return (
    <div className="App">
      {/* <AAppAFunction /> */}
      {/* <VerticalTabs /> */}
      {/* <AnimatedText text={textToAnimate} /> */}
      {/* <TextSlider texts={texts} /> */}
      {/* <Features /> */}
      {/* <NewComponent /> */}
      {/* <SectionComponent /> */}
      {/* <BonusContent /> */}
      {/* <Slider /> */}
      {/* <Special /> */}
      {/* <FeatureSection /> */}
      <NewBonus />
      {/* <FeaturesSection /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
