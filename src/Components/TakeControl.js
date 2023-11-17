import React from "react";
import "./TakeControl.css";

function SectionComponent() {
  return (
    <div>
      <div
        className="relative max-w-[1170px] rounded-md bg-cover bg-center bg-no-repeat py-20 md:px-20 px-5 md:m-60 sm:m-0"
        id="task"
      >
        <div className="items-center space-x-3 space-y-5 text-center lg:flex lg:space-y-0 lg:text-left">
          <div className="flex-1">
            <div className="max-w-[430px] sm: text-2xl font-bold text-white md:text-2xl lg:text-[34px] lg:leading-[61px]">
              Ignite Your Joy. Nurture Your Well-Being. Embrace Fulfillment
            </div>
          </div>
          <div className="flex-col">
            <p className=" max-w-[400px] py-5 text-white">
              Unlock the potential for a happier, healthier, and more fulfilled
              you in a life that goes beyond 'ehh' and transforms into a
              resounding 'woohoo'!
            </p>
            <p className=" max-w-[400px] py-3 text-white">
              Encourage your dreams, empower your choices, conquer those inner
              obstacles — all through this humble little digital platform... a
              helping hand to amplify your happiness, health, and fulfillment.
            </p>
            <button
              type="button"
              className="text-[#54005C] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-md-500 px-5 py-2 me-2 mb-2 justify-center content-center"
            >
              Join Now
            </button>
          </div>
        </div>
        <div className="ripple-1"></div>
        <div className="ripple-2"></div>
        <div className="ripple-3"></div>
        <div className="ripple-4"></div>
        <div className="ripple-5"></div>
      </div>
    </div>
  );
}

export default SectionComponent;
