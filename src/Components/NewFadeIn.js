import React, { useEffect } from "react";
import "./NewFadeIn.css";

function NewFadeIn() {
  useEffect(() => {
    function show() {
      var reveal = document.querySelectorAll(".box");

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
      <section>
        <div className="main">
          <div className="grid">
            <div className="col-6">
              <div className="box animate fadeInUp one">Fade in Up</div>
            </div>

            <div className="col-6">
              <div className="box animate fadeInDown two">Fade in Down</div>
            </div>

            <div className="col-6">
              <div className="box animate fadeInLeft three">Fade in Left</div>
            </div>

            <div className="col-6">
              <div className="box animate fadeInRight four">Fade in Right</div>
            </div>

            <div className="col-6">
              <div className="box animate fadeIn five">Fade in</div>
            </div>

            <div className="col-6">
              <div className="box animate fadeInUpBig six">Fade in Up Big</div>
            </div>

            <div className="col-6">
              <div className="box animate fadeInDownBig seven">
                Fade in Down Big
              </div>
            </div>

            <div className="col-6">
              <div className="box animate fadeInRightBig eight">
                Fade in Right Big
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewFadeIn;
