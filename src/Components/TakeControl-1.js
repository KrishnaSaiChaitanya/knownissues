import React from "react";
import "./NewComponent.css";

function TakeControl() {
  return (
    <div>
      <div
        class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 m-auto mt-10  items-center"
        style={{ width: "80%" }}
      >
        <div
          class="lg:col-span-4 md:col-span-6 lg:order-1 order-2"
          style={{ textAlign: "left" }}
        >
          <div class="grid grid-cols-1 gap-[10px]">
            <div class="group flex duration-500 xl:p-3">
              <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-[#75007F]/5 group-hover:bg-[#75007F] group-hover:text-white text-[#75007F] rounded-full text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-monitor w-5 h-5"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div class="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                <h4 class="mb-0 text-lg font-medium">Feature 1</h4>
                <p class="text-slate-400 mt-3 sm:text-sm">
                  One disadvantage of Lorum Ipsum is that in Latin frequently
                  than others
                </p>
              </div>
            </div>

            <div class="group flex duration-500 xl:p-3">
              <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-[#75007F]/5 group-hover:bg-[#75007F] group-hover:text-white text-[#75007F] rounded-full text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-feather w-5 h-5"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <div class="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                <h4 class="mb-0 text-lg font-medium">Feature 2</h4>
                <p class="text-slate-400 mt-3">
                  One disadvantage of Lorum Ipsum is that in Latin frequently
                  than others
                </p>
              </div>
            </div>

            <div class="group flex duration-500 xl:p-3">
              <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-[#75007F]/5 group-hover:bg-[#75007F] group-hover:text-white text-[#75007F] rounded-full text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-eye w-5 h-5"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div class="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                <h4 class="mb-0 text-lg font-medium">Feature 3</h4>
                <p class="text-slate-400 mt-3">
                  One disadvantage of Lorum Ipsum is that in Latin frequently
                  than others
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
          <img
            src="./mobile.svg"
            class="mx-auto md:max-w-[300px] max-w-[200px] mb-4"
            alt=""
          />
        </div>

        <div
          class="lg:col-span-4 md:col-span-6 order-3"
          style={{ textAlign: "left" }}
        >
          <div class="grid grid-cols-1 gap-[10px]">
            <div class="group flex duration-500 xl:p-3">
              <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-[#75007F]/5 group-hover:bg-[#75007F] group-hover:text-white text-[#75007F] rounded-full text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user-check w-5 h-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <div class="flex-1 ms-4">
                <h4 class="mb-0 text-lg font-medium">Feature 1</h4>
                <p class="text-slate-400 mt-3">
                  One disadvantage of Lorum Ipsum is that in Latin frequently
                  than others
                </p>
              </div>
            </div>

            <div class="group flex duration-500 xl:p-3">
              <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-[#75007F]/5 group-hover:bg-[#75007F] group-hover:text-white text-[#75007F] rounded-full text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-smartphone w-5 h-5"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div class="flex-1 ms-4">
                <h4 class="mb-0 text-lg font-medium">Feature 2</h4>
                <p class="text-slate-400 mt-3">
                  One disadvantage of Lorum Ipsum is that in Latin frequently
                  than others
                </p>
              </div>
            </div>

            <div class="group flex duration-500 xl:p-3">
              <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-[#75007F]/5 group-hover:bg-[#75007F] group-hover:text-white text-[#75007F] rounded-full text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-heart w-5 h-5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div class="flex-1 ms-4">
                <h4 class="mb-0 text-lg font-medium">Feature 3</h4>
                <p class="text-slate-400 mt-3">
                  One disadvantage of Lorum Ipsum is that in Latin frequently
                  than others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="bg-[#75007F] text-white"
        style={{ height: "", display: "flex", flexDirection: "column" }}
      >
        <img src="./wave-1.svg" style={{ width: "100%" }} />
        <div class="container relative md:m-auto py-5 p-5">
          <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Ignite Your Joy. Nurture Your Well-Being.
              <br /> Embrace Fulfillment
            </h3>
          </div>

          <div class="grid md:grid-cols-2 mt-8 gap-[30px]">
            <div
              class="rounded-lg bg-[#98409F] shadow  p-6"
              style={{ borderRadius: "50px" }}
            >
              <svg
                class="w-8 h-8 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p class="text-white-400 mb-4 mt-2 font-[Plus Jakarta Sans]">
                Unlock the potential for a happier, healthier, and more
                fulfilled you in a life that goes beyond 'ehh' and transforms
                into a resounding 'woohoo'!
              </p>
            </div>

            <div
              class="bg-[#98409F] shadow  p-6 text-white"
              style={{ borderRadius: "50px" }}
            >
              <svg
                class="w-8 h-8 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p class="text-white-400 mb-4 mt-2">
                Encourage your dreams, empower your choices, conquer those inner
                obstacles — all through this humble little digital platform... a
                helping hand to amplify your happiness, health, and fulfillment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#75007F]"
        style={{ height: "150px", display: "flex", flexDirection: "column" }}
      >
        <img
          src="./wave-2.svg"
          className="rotate-180"
          style={{ width: "100%" }}
        />
      </div> */}
    </div>
  );
}

export default TakeControl;
