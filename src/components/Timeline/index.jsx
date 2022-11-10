import React from "react";
import "./index.css";

const Timeline = ({ dots }) => {
  function displayDots() {
    console.log(dots);
    return dots.map((dot) => <div className="dot" key={dot} id={dot}></div>);
  }

  return (
    <>
      <div className="timeline">{displayDots()}</div>
    </>
  );
};

export default Timeline;
