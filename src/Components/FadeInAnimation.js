import React from "react";
import "./FadeInAnimation.css";
import { useEffect } from "react";
function NewBonus() {
  useEffect(() => {
    function show() {
      var reveal = document.querySelectorAll(".animation .anm_mod");

      for (var i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveal[i].getBoundingClientRect().top;
        var e = 140;

        if (elementTop < windowHeight - e) {
          reveal[i].classList.add("active");
        } else {
          reveal[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", show);

    return () => {
      window.addEventListener("scroll", show);
    };
  }, []);
  return (
    <div>
      <div className="animation">
        <div
          className="fade-in-div"
          style={{
            backgroundColor: "rgba(144, 140, 140, 0.5)",
            width: "98%",
            height: "600PX",
            transition: "all 0.9s ease",
          }}
        ></div>
      </div>
      <div className="animation">
        <div className="anm_mod full ">Slider section</div>
      </div>

      <div className="animation">
        <div
          className="anm_mod left fast"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <div className="anm_mod left fast" style={{ width: "90%" }}>
            {" "}
            Div - 1
          </div>
          <div className="anm_mod left delay" style={{ width: "90%" }}>
            {" "}
            Div - 2
          </div>
        </div>
        <div className="anm_mod right delay">Features Section</div>
      </div>
      <div className="animation">
        <div className="anm_mod full delay">Immersive Mini-Courses</div>
      </div>
      <div className="animation">
        <div className="anm_mod left ">Bonus Content left</div>
        <div className="anm_mod right delay">Bonus Content right</div>
      </div>

      <div className="animation">
        <div className="anm_mod full delay">Slider section</div>
      </div>

      <div className="animation">
        <div className="anm_mod full delay-2">Bottom Compoenent</div>
      </div>
    </div>
  );
}

export default NewBonus;
