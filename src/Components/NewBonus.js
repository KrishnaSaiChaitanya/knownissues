import React from "react";
import "./NewBonus.css";
import { useEffect } from "react";
function NewBonus() {
  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll(".animation .anm_mod");
      const windowHeight = window.innerHeight;

      elements.forEach(function (element) {
        const position = element.getBoundingClientRect().top;
        const scroll = window.scrollY || window.pageYOffset;

        if (scroll > position - windowHeight) {
          element.classList.add("active");
        }
        if (scroll < 300) {
          element.classList.remove("active");
        }
      });
    }

    // function smoothScroll(event) {
    //   event.preventDefault();

    //   const href = event.target.getAttribute("href");
    //   const target =
    //     href === "#" || href === ""
    //       ? document.documentElement
    //       : document.querySelector(href);
    //   const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
    //   const duration = 800;
    //   const startTime = performance.now();

    //   function scroll(time) {
    //     const currentTime = time - startTime;
    //     const progress = Math.min(currentTime / duration, 1);
    //     window.scrollTo(0, offsetTop * progress);

    //     if (currentTime < duration) {
    //       requestAnimationFrame(scroll);
    //     }
    //   }

    //   requestAnimationFrame(scroll);
    // }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* <div className="New_bonus_main">
        <div className="" id="left_content">
          <div className="" id="inside">
            <h1 id="heading_text_left">
              Curated Content Unlock A Treasure Trove
            </h1>
            <p id="text_left">
              Embark on an extraordinary journey of self-discovery with our
              exclusive collection of over 1,000 hand-picked videos.
            </p>
            <p id="text_left">
              Spanning more than 15 Categories and branching into over 60
              insightful subcategories, each video is a vital pathway on your
              personal journal towards self-growth and empowerment.
            </p>
            <p id="text_left">
              Ever notice how mentally and emotionally drained you may sometimes
              feel after watching fear-driven news clips and disempowering
              social media content? Do you sometimes feel stagnant or lost after
              scrolling through endless video clips?
            </p>
            <p id="text_left">We've been there, too... and, we understand</p>
            <p id="text_left">
              This collection offers a platform to break free from life's
              limitations and unlock your full potential — each video acts as a
              beacon, an opportunity of potential to guide you towards a
              brighter, more empowered future
            </p>
            <p id="text_left">
              The choice is yours: it's time to allay the enemies within—
              whether they be doubts, fears, or personal demons.
            </p>
            <p id="text_left">
              Discover, Learn, and GrowOne. Empowering. Video. At A Time
            </p>
          </div>
        </div>
        <div className="">
          <div className="middle_circle">
            <div class="arrow arrow-first"></div>
            <div class="arrow arrow-second"></div>
            <div class="arrow arrow-third"></div>
          </div>
        </div>
        <div className="" id="right_content">
          <div className="" id="inside">
            <h1 id="heading_text_right">
              Curated Content Unlock A Treasure Trove
            </h1>
            <p id="text_right">
              Step into a world of wonder with our hand-picked collection of
              over 500 videos — each a window to the heart of more than 100
              diverse destinations.
            </p>
            <p id="text_right">Escape the mundane. Overcome the isolation.</p>
            <p id="text_right">
              These videos are your virtual gateway to cultural richness and
              breathtaking landscapes, offering an antidote to the monotony of
              everyday life.
            </p>
            <p id="text_right">
              These videos are your virtual gateway to cultural richness and
              breathtaking landscapes, offering an antidote to the monotony of
              everyday life.
            </p>
            <h1 id="heading_text_right">
              Discover the World, Heal Your Soul With Our Destination Videos
            </h1>
            <p id="text_right">
              Embrace the inspiration to set travel goals, foster acceptance,
              and embark on a journey towards a more globalized and enlightened
              you. With each destination video you watch, you'll not only unlock
              new corners of the world but also heal your soul, one destination
              at a time.
            </p>
          </div>
        </div>
      </div> */}
      <div class="animation">
        <div
          class="fade-in"
          style={{
            backgroundColor: "rgba(144, 140, 140, 0.5)",
            width: "90%",
            height: "600PX",
            transition: "all 0.9s ease",
          }}
        >
          HERO page
        </div>
      </div>
      <div class="animation">
        <div class="anm_mod full">LIFETIME ACCESS</div>
      </div>

      <div class="animation">
        <div
          className="anm_mod left fast"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <div class="anm_mod left fast" style={{ width: "90%" }}>
            {" "}
            Div - 1
          </div>
          <div class="anm_mod left delay" style={{ width: "90%" }}>
            {" "}
            Div - 2
          </div>
        </div>
        <div class="anm_mod right delay">Features Section</div>
      </div>
      <div class="animation">
        <div class="anm_mod full delay">Immersive Mini-Courses</div>
      </div>
      <div class="animation">
        <div class="anm_mod left delay">Bonus Content left</div>
        <div class="anm_mod right delay">Bonus Content right</div>
      </div>

      <div class="animation">
        <div class="anm_mod full delay">Slider section</div>
      </div>
      <div class="animation">
        <div class="anm_mod full delay-2">Bottom Compoenent</div>
      </div>
    </div>
  );
}

export default NewBonus;
