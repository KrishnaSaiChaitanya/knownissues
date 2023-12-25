/* Courses.jsx */
import React from "react";

import "./help/Courses.css";
import "./help/Courses2.css";

// import sliderImageOne from "@/app/images/course-images/courses-snapshot.jpeg";

// import CheckSVG from "./help/CheckSVG";

function CoursesComponent() {
  return (
    <>
      <div className="p-8 relative bg-gradient-to-r from-[#7FDEFF] via-[#e3eefc] to-[#7FDEFF] shadow-xl">
        <div className="heading_div p-5 text-center m-auto">
          <div className="animation">
            <div className="anm_mod full">
              <h1 className="text-[#1A1D1A]">
                <strong>Immersive</strong> Mini-Courses
              </h1>
            </div>
          </div>

          <div className="sub_text max-w-[700px] text-lg m-auto text-[#1A1D1A]">
            <div className="animation">
              <div className="anm_mod zoomIn delay">
                <span>
                  Learn life-changing concepts and practical skills to rocket
                  boost your life into happier, healthier, and more fulfilling
                  state.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="courses_component">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 md:m-4 sm:m-0 py-5 overflow-hidden">
            <div className="col-6">
              <div className="carousel">
                <ul className="slides">
                  <input
                    type="radio"
                    name="radio-buttons"
                    id="img-1"
                    defaultChecked
                  />
                  <li className="slide-container">
                    <div className="slide-image">
                      <img
                        src={
                          "https://www.ambience.life/_next/static/media/courses-snapshot.cfd6fcfa.jpeg"
                        }
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 bg-[white] p-8" id="slider_side_content">
              <div className="animation">
                <div className="anm_mod left delay">
                  <h1 className="text-left px-2 pt-4 font-bold text-[#8e1aa8] text-3xl">
                    Education. Introspection.
                  </h1>
                </div>
              </div>

              <div className="p-5 pt-2">
                <div className="flex items-left gap-5 mt-5 text-left">
                  <div>
                    <div className="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center ">
                      {/* <CheckSVG /> */}
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">
                    an interactive environment to{" "}
                    <span className="font-bold text-gray-900">
                      learn, reflect, and challenge
                    </span>{" "}
                    yourself to reach greater heights
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-5 text-left">
                  <div>
                    <div className="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                      {/* <CheckSVG /> */}
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">
                    identify where you are in life and{" "}
                    <span className="font-bold text-gray-900">
                      where it is you want to be
                    </span>{" "}
                    ,
                  </p>
                </div>
              </div>
              <div className="animation">
                <div className="anm_mod left delay">
                  {" "}
                  <h1 className="text-left px-2 pt-1 font-bold text-[#8e1aa8] text-3xl">
                    Practice. Grow.
                  </h1>
                </div>
              </div>

              <div className="p-5 pt-2">
                <div className="flex items-left gap-5 mt-5 text-left">
                  <div>
                    <div className="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center ">
                      {/* <CheckSVG /> */}
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">
                    forge new pathways that take you{" "}
                    <span className="font-bold text-gray-900">
                      from where you are to where you want to be
                    </span>{" "}
                  </p>
                </div>
                <div className="flex items-left gap-5 mt-5 text-left">
                  <div>
                    <div className="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center ">
                      {/* <CheckSVG /> */}
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">
                    create{" "}
                    <span className="font-bold text-gray-900">
                      massive growth and transform your life
                    </span>{" "}
                    with the potential you've always had inside
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesComponent;
