import React from "react";
import "./AnimatedCard.css";

function AnimatedCard() {
  return (
    <div class="tags">
      <div class="tag-container">
        <div class="tag">
          <div class="tag-side tag-1-side">
            <div class="tag-text tag-1-text">
              <img
                src="activity-intros.svg"
                style={{ height: "150px", margin: "10px" }}
              />
              <p>Welcome !</p>
            </div>
          </div>

          <div class="tag-side tag-1-side is-back">
            <div class="tag-text tag-1-text">
              <p>Introducing the ambience.LIFE app!</p>

              {/* <svg
                style={{
                  height: "26px",
                  width: "26px",
                  color: "black",
                }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard;
