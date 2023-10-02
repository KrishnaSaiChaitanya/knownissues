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
      <p>
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
        {currentIndex === 0 ? (
          <div className="wrap">
            <button
              className="button"
              id="animated-button"
              onClick={handleNext}
            >
              <svg
                style={{ height: "24px", color: "white" }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z"
                />
              </svg>
            </button>
            <h3
              style={{
                fontSize: "22px",
                color: "white",
                textAlign: "center",
              }}
            >
              Start
            </h3>
          </div>
        ) : (
          <>
            <button className="slider-button" onClick={handlePrev}>
              Previous
            </button>
            <button className="slider-button" onClick={handleNext}>
              Next
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default TextSlider;
