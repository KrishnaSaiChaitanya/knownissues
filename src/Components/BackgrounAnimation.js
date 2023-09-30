import React, { Children } from "react";
import "./BackgrounAnimation.css";

function BackgrounAnimation({ children, width, height }) {
  return (
    <div
      className="bg-animation"
      style={{
        width: width ?? "100%",
        height: height ?? "100%",
      }}
    >
      <div className="background">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="background_children">{children}</div>
    </div>
  );
}

export default BackgrounAnimation;
