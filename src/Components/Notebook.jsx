/* Notebook.jsx */
import React, { useEffect } from "react";

import DailyDairyExpress from "./help/DailydiaryExpress.jpeg";
import NudgesPreview from "./help/NudgesPreview.jpeg";
import NeverEndingNotebookPromptPreview from "./help/NeverEndingNotebookPromptPreview.jpeg";
import DailydiaryEntries from "./help/DailydiaryEntries.jpeg";
import "./FadeInAnimation.css";

const NotebookComponent = () => {
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
    <div className="notebook_container">
      <div className="heading_div p-5 text-center m-auto relative">
        <div className="animation">
          <div className="anm_mod full ">
            <h1
              className="text-[#1A1D1A] relative"
              style={{
                background:
                  "linear-gradient(400deg, #520e63, #651279, #b221d2)",
                WebkitBackgroundClip: "text", // For Safari
                color: "transparent",
              }}
            >
              <strong>Secure, Private </strong> Journaling
            </h1>
          </div>
        </div>
        <div className="animation">
          <div className="anm_mod zoomIn delay">
            <div
              className="sub_text max-w-[700px] m-auto text-[#1A1D1A] text-lg relative"
              style={{
                background:
                  "linear-gradient(400deg, #520e63, #651279, #b221d2)",
                WebkitBackgroundClip: "text", // For Safari
                color: "transparent",
              }}
            >
              <span>
                A safe space to record your thoughts. feelings. vibes.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full to-transparent opacity-20 z-0"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-[11px] max-w-full relative components_animation animate_left delayed2">
        <div
          className="animation bg-[#efdbf6] p-8 min-h-[440px] shadow-xl order-1 md:order-2"
          style={{
            background: "linear-gradient(40deg, #E9D9FF, #FDFDFD, #F8F3FF)",
          }}
        >
          <h3
            className="anm_mod right delay text-[#1A1D1A] text-2xl text-center font-bold pb-2"
            style={{
              background: "linear-gradient(400deg, #520e63, #651279, #b221d2)",
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
          >
            Daily Diary
          </h3>
          <div className=" feature_description relative text-center">
            <p className="max-w-[440px] mx-auto text-[#1A1D1A] text-lg font-light">
              Open-ended formatting for you to immerse yourself in expanded
              thoughts and reflections
            </p>
            <div className="anm_mod zoomIn delay preview_thumbnail pt-8 pb-8">
              <img
                className="rounded-2xl"
                src={
                  "https://www.ambience.life/_next/static/media/DailydiaryExpress.4cfe1eeb.jpeg"
                }
                alt="ambience.LIFE Daily Diary"
              />
            </div>
          </div>
        </div>
        <div className="animation p-8 min-h-[440px] order-2 md:order-1 components_animation animate_right delayed2">
          <h3
            className="anm_mod left text-[#1A1D1A] text-2xl text-center font-bold pb-2 "
            style={{
              background: "linear-gradient(400deg, #520e63, #651279, #b221d2)",
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
          >
            Daily Diary Express
          </h3>
          <div className="feature_description relative text-center">
            <p className="max-w-[440px] mx-auto text-[#1A1D1A] text-lg font-light">
              Open-ended formatting for you to jot down some brief thoughts and
              reflections
            </p>
            <div className="anm_mod zoomIn delay preview_thumbnail pt-8 pb-8">
              <img
                className="rounded-2xl"
                src={
                  "https://www.ambience.life/_next/static/media/DailydiaryExpress.4cfe1eeb.jpeg"
                }
                alt="ambience.LIFE Daily Diary Express"
              />
            </div>
          </div>
        </div>
        <div
          className="animation  bg-[#efdbf6] p-8 min-h-[440px] shadow order-3 md:order-3 relative components_animation animate_right delayed2"
          style={{
            background: "linear-gradient(220deg, #E3EEFC ,#FDFDFD, #F5F9FE)",
          }}
        >
          <h3
            className="anm_mod left text-[#1A1D1A] text-2xl text-center font-bold pb-2"
            style={{
              background: "linear-gradient(400deg, #520e63, #651279, #b221d2)",
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
          >
            Neverending Notebook
          </h3>
          <div className="feature_description relative text-center">
            <p className="max-w-[440px] mx-auto text-[#1A1D1A] text-lg font-light">
              Over 1,000 topic-based journal prompts
            </p>
            <div className="anm_mod zoomIn delay preview_thumbnail pt-8 pb-8">
              <img
                className="rounded-2xl"
                src={
                  "https://www.ambience.life/_next/static/media/NudgesPreview.cf61cf17.jpeg"
                }
                alt="ambience.LIFE Neverending Notebook"
              />
            </div>
          </div>
        </div>
        <div className="animation delay p-8 min-h-[440px]  order-4 md:order-4 components_animation animate_left delayed2">
          <h3
            className="anm_mod right delay text-[#1A1D1A] text-2xl text-center font-bold pb-2"
            style={{
              background: "linear-gradient(400deg, #520e63, #651279, #b221d2)",
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
          >
            Notebook Nudges
          </h3>
          <div className="feature_description relative text-center">
            <p className="max-w-[440px] mx-auto text-[#1A1D1A] text-lg font-light">
              Weekly prompts to inspire self-empowered thinking
            </p>
            <div className="anm_mod zoomIn delay preview_thumbnail pt-8 pb-8">
              <img
                className="rounded-2xl"
                src={
                  "https://www.ambience.life/_next/static/media/DailydiaryEntries.6a470d13.jpeg"
                }
                alt="ambience.LIFE Notebook Nudges"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookComponent;
