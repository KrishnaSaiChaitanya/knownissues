import React, { useEffect } from "react";
import "./Slider.css";
import { useRef } from "react";

function Slider() {
  const boxesRef = useRef(null);
  useEffect(() => {
    const boxes = boxesRef.current.querySelectorAll(".box");
    let activeIndex = 1;
    let isTransitioning = false;

    function updateCurrentImg() {
      isTransitioning = true;

      boxes.forEach((box, index) => {
        const isActive = index === activeIndex;
        box.classList.toggle("expanded", isActive);
        box.classList.toggle("closed", !isActive);
      });

      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }

    function handleBoxClick(index) {
      if (isTransitioning) {
        return;
      }

      if (
        index === activeIndex &&
        boxes[index].classList.contains("expanded")
      ) {
        boxes.forEach((box) => box.classList.remove("closed", "expanded"));
        activeIndex = 0;
      } else {
        activeIndex = index;
        updateCurrentImg();
      }
    }

    updateCurrentImg();

    boxes.forEach((box, index) => {
      box.addEventListener("click", () => handleBoxClick(index));
    });
  }, []);
  return (
    <div ref={boxesRef}>
      <div class="track-wrapper">
        <ul class="track">
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1523978591478-c753949ff840?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1465147264724-326b45c3c59b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1421930866250-aa0594cea05c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY2Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
          <li class="track__item">
            <img
              src="https://images.unsplash.com/photo-1584148721201-b6432e0d5106?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              alt=""
              width="300"
              height="300"
            />
          </li>
        </ul>
      </div>

      <div class="box-container">
        <div class="box">
          <div class="overlay"></div>
        </div>
        <div class="box">
          <div class="overlay"></div>
        </div>
        <div class="box">
          <div class="overlay"></div>
        </div>
        <div class="box">
          <div class="overlay"></div>
        </div>
        <div class="box">
          <div class="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
