import React from "react";
import "./index.css";

const Timeline = ({ dots }) => {
  function displayDots() {
    return dots.map((dot) => (
      <div className="drop-square" id={dot}>
        <div className="dot" key={dot} id={dot}></div>
      </div>
    ));
  }

  return (
    <>
      <div className="timeline">{displayDots()}</div>
    </>
  );
};

export default Timeline;
