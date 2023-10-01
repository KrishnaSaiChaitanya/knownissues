import React, { useState } from "react";
import "./TextSlider.css"; // Import the CSS file for styling
import AnimatedText from "./TextAnimation";

const TextSlider = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("hello");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-slider">
      <p style={{ width: "60%" }}>
        <AnimatedText text={texts[currentIndex]} />
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <button className="slider-button" onClick={handlePrev}>
          Previous
        </button>
        <button className="slider-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TextSlider;
