import logo from "./logo.svg";
import "./App.css";
import VerticalTabs from "./Components/VerticalTab";
import Home from "./Components/Home";
import AnimatedCard from "./Components/AnimatedCard";

import BackgrounAnimation from "./Components/BackgrounAnimation";
import AnimatedText from "./Components/TextAnimation";
import TextSlider from "./Components/TextSlider";

function App() {
  const texts = [
    "My name is chaitanya",
    "A big welcome and thank you for joining our community!",
    "We created this app to help others (and, ourselves), lead happier, healthier, more fulfilling lives.",
    "Within this app — and, based on your membership level — you'll find a varying degree of semi-interactive and fully interactive features centered around getting more from life.",
    "In our Freebies section, you'll find our Curated Content and Destinations sections...",
    "... which contain thousands of hand-selected videos for varying topics and destinations worldwide.",
    "Within the Xclusives section, you'll find our centerpiece features (available to Glow membership and above).",
    // Add more texts as needed
  ];

  const textToAnimate =
    "There are no limits to what you can accomplish, except the limits you place on your own hbjbh vgh ...";
  return (
    <div className="App">
      {/* <AAppAFunction /> */}
      {/* <VerticalTabs /> */}
      {/* <AnimatedText text={textToAnimate} /> */}

      <BackgrounAnimation>
        <AnimatedCard />
        <TextSlider texts={texts} />
      </BackgrounAnimation>

      {/* <Home /> */}
    </div>
  );
}

export default App;
