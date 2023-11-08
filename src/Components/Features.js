import React from "react";
import "./Features.css";

function Features() {
  return (
    <div class="container" style={{ width: "100%" }}>
      <div class="container__title">
        <h1 class="container__titleMainText">Why Choose Us</h1>
        <p class="container__titleSubText">
          Duis posuere blandit orci sed tincidunt. Curabitur porttitor nisi ac
          nuncornare, in fringilla nisl blandit.
        </p>
      </div>

      <div class="container__circle">
        <div class="container__mainFeat">
          <h3 class="container__mainFeatMainText">Quality & Professionalism</h3>
          <p class="container__mainFeatSubText">
            Duis posuere blandit orci sed tincidunt. Curabitur porttitor nisl
            nunc ornare, In fringilla nisl blandit. Duis posuere blandit orci
            tincidunt. Curabitur porttitor nisl ac nunc ornare, In fringilla
            nisl blandit.
          </p>
        </div>

        <div class="container__subFeat">
          <div
            class="container__subFeatImgContent"
            style={{ backgroundColor: "#ffd260" }}
          ></div>
          <div class="container__subFeatContent">
            <h3 class="container__subFeatMainText">Everyday Backups</h3>
            <p class="container__subFeatSubText">
              Duis posuere blandit orci sed tincidunt. Curabitur porttitor nisl
              ac nunc ornare, In fringilla nisl blandit
            </p>
          </div>
        </div>

        <div class="container__subFeat">
          <div
            class="container__subFeatImgContent"
            style={{ backgroundColor: "#ff7058" }}
          ></div>
          <div class="container__subFeatContent">
            <h3 class="container__subFeatMainText">24/7 Non-Stop Work</h3>
            <p class="container__subFeatSubText">
              Duis posuere blandit orci sed tincidunt. Curabitur porttitor nisl
              ac nunc ornare, In fringilla nisl blandit
            </p>
          </div>
        </div>

        <div class="container__subFeat container__subFeat--right">
          <div
            class="container__subFeatImgContent"
            style={{ backgroundColor: "#80dcfe" }}
          ></div>
          <div class="container__subFeatContent">
            <h3 class="container__subFeatMainText">Hi Quality Equipment</h3>
            <p class="container__subFeatSubText">
              Duis posuere blandit orci sed tincidunt. Curabitur porttitor nisl
              ac nunc ornare, In fringilla nisl blandit
            </p>
          </div>
        </div>

        <div class="container__subFeat container__subFeat--right">
          <div
            class="container__subFeatImgContent"
            style={{ backgroundColor: "#4cd4c0" }}
          ></div>
          <div class="container__subFeatContent">
            <h3 class="container__subFeatMainText">Hi Quality Equipment</h3>
            <p class="container__subFeatSubText">
              Duis posuere blandit orci sed tincidunt. Curabitur porttitor nisl
              ac nunc ornare, In fringilla nisl blandit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
