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
    <>
      <div style={{ height: "90vh" }}>
        <title>ambience.LIFE</title>
        <meta
          name="description"
          content="Create a happier, healthier, more fulfilling life"
        />
      </div>
      {/* <div
        className=""
        style={{
          backgroundColor: "linear-gradient(400deg, #520e63, #651279, #b221d2)",
        }}
      ></div>
      <div class="mx-auto max-w-7xl px-6 pb-20 pt-12 text-left sm:pt-12 lg:px-8">
        <p class="font-[Plus Jakarta Sans] pt-4 mb-2 italic text-lg leading-8 text-white/90">
          For a limited time, we're offering founding members...
        </p>
        <div className="animation">
          <div className="anm_mod full ">
            {" "}
            <h2 class="text-center font-[Plus Jakarta Sans] text-4xl font-bold tracking-tight text-[#00A7E1] sm:text-4xl">
              LIFETIME ACCESS
            </h2>
          </div>
        </div>

        <div class="mx-auto max-w-7xl px-5 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 pt-8 gap-8 lg:max-w-6xl lg:grid-cols-2">
            <div
              style={{ zIndex: "99" }}
              class="flex flex-col justify-between rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8 bg-white shadow-xl components_animation animate_right hover:scale-[1.01] hover:transition-transform duration-2200 active"
            >
              <div class="absolute top-0 right-5" style={{ top: "-1%" }}>
                <div class="text-xs inline-flex font-semibold bg-green-100 text-green-600 rounded-full text-left px-3 py-1.5 shadow-sm transform -translate-y-1/2">
                  Most Popular
                </div>
              </div>
              <div className="animation">
                <h3
                  id="awake"
                  class="anm_mod left delay font-[prata] text-2xl text-center font-extrabold leading-7 text-[#651279]/80"
                >
                  AWAKE
                </h3>
                <div class="mt-2 text-center items-baseline gap-x-2">
                  <p class="font-[Plus Jakarta Sans] text-4xl font-bold text-center tracking-tight text-[#00A7E1]">
                    <span class="line-through text-[#651279]/80">$49</span>{" "}
                    Free!
                  </p>
                  <p class="font-[Plus Jakarta Sans] text-sm pt-2 pb-4 font-normal text-[#54005C]/90">
                    Absolutely FREE to access our Bonus Content
                  </p>
                </div>
                <ul
                  role="list"
                  class="animation font-[Plus Jakarta Sans] mt-4 text-lg space-y-4 leading-6 text-[#1A1D1A]"
                >
                  <li class="anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Curated Content — Over 1,000 hand-selected and topic-based
                    videos within 60+ topics
                  </li>
                  <li class="anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Destinations — Over 500 hand-selected destination-based
                    videos covering more than 100 destinations worldwide
                  </li>
                  <li class=" anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Progress unlocks more content!
                  </li>
                </ul>
              </div>
              <a
                href="https://my.ambience.life/signup"
                aria-describedby="awake"
                class="signupBtn2 font-[Plus Jakarta Sans] mt-8 block rounded-xl bg-[#651279] pt-3 pb-2 text-center text-lg"
              >
                Get started!
              </a>

              <p class="mt-6 text-xs leading-5 text-left text-gray-600">
                * Includes 15-Day Money-Back Gurantee
              </p>
              <div class="flex justify-end">
                <p class="mt-4 -mb-4 text-xs leading-5 opacity-80 filter brightness-50">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_outside%2Fsales_funnels%2F3rd-party%2Fstripe-blpurple.webp?alt=media&amp;token=ba9534e8-2d4a-4462-ba40-2789be72cdf1"
                    class="max-h-[22px]"
                    aria-label="Powered by Stripe"
                  />
                </p>
              </div>
            </div>
            <div
              style={{ zIndex: "99" }}
              class="flex flex-col justify-between rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8 bg-gradient-to-r from-[#00A7E1] via-[#7FDEFF] to-[#00A7E1] shadow-2xl components_animation animate_left hover:scale-[1.01] hover:transition-transform duration-2200 active"
            >
              <div className="animation">
                <h3
                  id="tier-glow-lifetimeotp"
                  class="anm_mod right delay font-[prata] text-2xl text-center font-extrabold leading-7 text-[#651279]/80"
                >
                  GLOW
                </h3>
                <div class="mt-2 text-center items-baseline gap-x-2">
                  <p class="font-[Plus Jakarta Sans] text-4xl font-bold text-center tracking-tight text-white">
                    <span class="line-through text-[#651279]/80">$199</span> $22
                  </p>
                  <p class="font-[Plus Jakarta Sans] text-sm pt-2 pb-4 font-normal text-[#54005C]/90">
                    Pay Once For LIFETIME access
                  </p>
                </div>
                <ul
                  role="list"
                  class="animation font-[Plus Jakarta Sans] mt-4 text-lg space-y-4 leading-6 text-[#1A1D1A]"
                >
                  <li class="anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    4 Fully Private &amp; Secure Journaling Features
                  </li>
                  <li class="anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    4 Interactive Self-Empowering Phrase Games
                  </li>
                  <li class="anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Human Harmony — Our inagural life-improvement course
                  </li>
                  <li class="anm_mod full delay flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-[#54005C]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Bonus Content Fully Unlocked
                  </li>
                </ul>
              </div>
              <a
                href="https://my.ambience.life/signup"
                aria-describedby="tier-glow-lifetimeotp"
                class="signupBtn2 font-[Plus Jakarta Sans] mt-8 block rounded-xl bg-[#651279] pt-3 pb-2 text-center text-lg"
              >
                Get started!
              </a>
              <p class="mt-6 text-xs leading-5 text-left text-gray-600">
                * Includes 15-Day Money-Back Gurantee
              </p>
              <div class="flex justify-end">
                <p class="mt-4 -mb-4 text-xs leading-5 opacity-80 filter false">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_outside%2Fsales_funnels%2F3rd-party%2Fstripe-white.webp?alt=media&amp;token=a6ce2703-976c-4b9c-916b-5a69fe59c62a"
                    class="max-h-[22px]"
                    aria-label="Powered by Stripe"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
