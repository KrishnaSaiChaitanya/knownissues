import React, { useState, useEffect } from "react";
import "./TextAnimation.css";
import BackgrounAnimation from "./BackgrounAnimation";
import TextSlider from "./TextSlider";

const AnimatedText = ({ text }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const texts = [
    "Text 1",
    "Text 2",
    "Text 3",
    // Add more texts as needed
  ];
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [text]);

  const words = text.split(" ");

  return (
    <div className="text-holder">
      <p className="animated-text-main" key={animationKey}>
        {words.map((word, index) => (
          <span
            key={index}
            className="animated-text"
            style={{
              animation: `fade-in 0.9s ${
                0.2 * index
              }s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
            }}
          >
            {word}
            <span className="animated-space">&nbsp;</span>
          </span>
        ))}
      </p>
    </div>
  );
};

export default AnimatedText;
