import React from "react";
import "./BonusContent.css";

function BonusContent() {
  return (
    <div className="main">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 md:m-4 sm:m-0">
        <div className="col-6">
          <div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              <li class="slide-container">
                <div class="slide-image">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
                </div>
                <div class="carousel-controls">
                  <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-2" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
                </div>
                <div class="carousel-controls">
                  <label for="img-1" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-3" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" />
                </div>
                <div class="carousel-controls">
                  <label for="img-2" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div class="carousel-dots">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <h1 className="text-left px-2 pt-3 font-bold text-gray-1000">
            Unwind & Engage
          </h1>
          <div class="p-5 pt-2">
            <div class="flex items-left gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center ">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-normal text-gray-500">
                providing a{" "}
                <span class="font-bold text-gray-900">
                  relaxed and semi-interactive
                </span>{" "}
                environment
              </p>
            </div>

            <div class="flex items-center gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-normal text-gray-500">
                To learn,{" "}
                <span class="font-bold text-gray-900">gain insights</span> , and
                hear opinions regarding a wide range of topics
              </p>
            </div>

            <div class="flex items-center gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-small text-gray-500">
                Centered around creating a{" "}
                <span class="font-bold text-gray-900">happier, healthier,</span>{" "}
                and more fulfilling life
              </p>
            </div>
          </div>
          <h1 className="text-left px-2 pt-1 font-bold text-gray-1000">
            Explore & Enjoy
          </h1>
          <div class="p-5 pt-2">
            <div class="flex items-left gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center ">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-normal text-gray-500">
                You can watch the video in completion then answer a simple
                question at the end!
              </p>
            </div>

            <div class="flex items-center gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-normal text-gray-500">
                You may repeat the process as many times as you'd like!
              </p>
            </div>

            <div class="flex items-center gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-small text-gray-500">
                As you watch more videos and answer the question at the end,
                you'll notice that the progress bar will start to fill up.
              </p>
            </div>
            <div class="flex items-center gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-small text-gray-500">
                Once your progress bar is completely full, you'll unlock the
                next stage.
              </p>
            </div>
            <div class="flex items-center gap-5 mt-5 text-left">
              <div>
                <div class="w-10 h-10 rounded-full shadow-lg bg-[#C046CF] flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-sm font-small text-gray-500">
                This allows you to level up in our app and in life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BonusContent;
