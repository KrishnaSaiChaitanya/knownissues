"use client";
import React, { useEffect } from "react";
import "./FadeInAnimation.css";
// import Head from 'next/head'

// import { Header2 } from '@/app/components/Header2'
// import Footer2 from '@/app/components/Footer2'

// import '@/app/app.css'
// import '@/app/style.css'
import NotebookComponent from "./Notebook";
import { Freebies } from "./Freebies";
import CoursesComponent from "./Courses";
import Activities from "./Activities";

export default function Home() {
  useEffect(() => {
    function checkVisibility() {
      var elements = document.querySelectorAll(".animation_container .anm_mod");
      for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = elements[i].getBoundingClientRect().top;
        var offset = 140;

        if (elementTop < windowHeight - offset) {
          elements[i].classList.add("active");
        } else {
          elements[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);
  return (
    <>
      <div style={{ height: "90vh" }}>
        <title>ambience.LIFE</title>
        <meta
          name="description"
          content="Create a happier, healthier, more fulfilling life"
        />
      </div>

      {/* <Header2 /> */}
      <main>
        <div className="activities_component">
          <div className="fade_in_div4">
            <Activities />
          </div>
        </div>

        <NotebookComponent />
        <CoursesComponent />
        <Freebies />
      </main>
      {/* <Footer2 /> */}
    </>
  );
}
