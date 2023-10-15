import React, { useEffect, useState } from "react";

import "./Home.css";
import AnimatedText from "./TextAnimation";
function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // You can adjust these values as needed for the desired effect
      const minScale = 1;
      const maxScale = 1.2;

      const newScale =
        minScale + (maxScale - minScale) * (scrollPosition / 1000);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <section
        id="home"
        className="px-4 bg-no-repeat bg-cover relative -z-10 active"
        style={{ backgroundImage: "url('assets/images/heros/hero-5-bg.png')" }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl/snug text-3xl font-semibold mt-7">
              <span className="text-[#671277]">
                A Happier, Healthier,More Fulfilling Life{" "}
              </span>{" "}
              Is Within Reach
            </h1>
            <p className="text-base font-normal text-gray-500 mt-5">
              <AnimatedText
                text={
                  "It's time to make mental, emotional, and physical well-being a priority. Break old, destructive patterns. Develop new, empowering habits. Create life-long improvements."
                }
              />
            </p>

            <div className="inline-block mt-10 mb-10">
              <a className="flex items-center justify-center gap-2 py-3 px-7 rounded-md text-lg font-normal text-white bg-gradient-to-r from-[#671277] to-[#d04fdf] focus:text-gray-800 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-5">
        <img
          id="hero-image"
          src="./hero.svg"
          className="mx-auto"
          alt=""
          style={{
            border: "30px",
            width: "50%",
            marginBottom: "5%",
            transform: `scale(${scale})`,
            transition: "transform 0.2s",
            zIndex: "100",
          }}
        />
      </div>

      <section
        class="bg-[#54005C]"
        style={{
          borderTop: "1px solid white",
          position: "relative",
          top: "-10%",
          height: "500px",
        }}
      >
        <div className="" style={{ position: "initial", marginTop: "-6%" }}>
          <img src="./banner-shape.svg" />
        </div>
      </section>
    </div>
  );
}

export default Home;
