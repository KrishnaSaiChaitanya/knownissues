/* Activities.jsx */
import React, { useEffect } from "react";

// import seedsPreviewImg from "images/activities-images/app2023-seeds.webp";
// import cardsPreviewImg from "@/app/images/activities-images/app2023-cards.webp";
// import typerPreviewImg from "@/app/images/activities-images/app2023-typer.webp";
// import scramblePreviewImg from "@/app/images/activities-images/app2023-scramble.webp";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import "./help/Activities.css";

const HeroPrevArrow = (props) => (
  <button {...props} className="custom-prev-arrow" aria-label="Previous">
    {/* <ArrowLeftIcon className="h-6 w-6" /> */}
  </button>
);

const HeroNextArrow = (props) => (
  <button {...props} className="custom-next-arrow" aria-label="Next">
    {/* <ArrowRightIcon className="h-6 w-6" /> */}
  </button>
);

function Activities() {
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <HeroPrevArrow />,
    nextArrow: <HeroNextArrow />,
  };
  return (
    <div className="activities_component">
      <div className="overflow-hidden bg-gradient-to-r from-[#F4EDFF] via-[#F4EEFE] to-[#F4EDFF] shadow-xl pt-10 pb-10 p-[44px] md:pl-0 md:pr-0 components_animation fade_in_div4">
        <div className="animation heading_div p-2 text-center m-auto">
          <h1 className="anm_mod full delay !text-[#1A1D1A]">
            Four <strong>Empowering Phrase</strong> Games
          </h1>

          <div className="anm_mod zoomIn delay sub_text max-w-[700px] m-auto text-[#1A1D1A] text-lg">
            <span>Add rocket-boosters to your self-empowering thoughts</span>
          </div>
        </div>
        <div className="slider_main_container">
          {/* <Slider {...settings}>
            <div>
              <img
                className="track-item-image"
                src={
                  "https://www.ambience.life/_next/static/media/courses-snapshot.cfd6fcfa.jpeg"
                }
                alt="Seeds"
              />
              <h3 className="text-center pt-2 font-bold text-xl text-[#1A1D1A]">
                Seeds
              </h3>
              <p className="sub_text font-light text-center text-[#1A1D1A] text-lg">
                An easy drag-and-drop empowering phrase game
              </p>
            </div>
            <div>
              <img
                className="track-item-image"
                src={
                  "https://www.ambience.life/_next/static/media/courses-snapshot.cfd6fcfa.jpeg"
                }
                alt="Cards"
              />
              <h3 className="text-center pt-2 font-bold text-xl text-[#1A1D1A]">
                Cards
              </h3>
              <p className="sub_text font-light text-center text-[#1A1D1A] text-lg">
                Empowering or Disempowering: you decide
              </p>
            </div>
            <div>
              <img
                className="track-item-image"
                src={
                  "https://www.ambience.life/_next/static/media/courses-snapshot.cfd6fcfa.jpeg"
                }
                alt="Typer"
              />
              <h3 className="text-center pt-2 font-bold text-xl text-[#1A1D1A]">
                Typer
              </h3>
              <p className="sub_text font-light text-center text-[#1A1D1A] text-lg">
                Use the power of 'writing it down' to reinforce empowering
                thoughts
              </p>
            </div>
            <div>
              <img
                className="track-item-image"
                src={
                  "https://www.ambience.life/_next/static/media/courses-snapshot.cfd6fcfa.jpeg"
                }
                alt="Scramble"
              />
              <h3 className="text-center pt-2 font-bold text-xl text-[#1A1D1A]">
                Scramble
              </h3>
              <p className="sub_text font-light text-center text-[#1A1D1A] text-lg">
                Organize the pieces into a complete empowering phrase
              </p>
            </div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default Activities;
