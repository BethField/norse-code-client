import React from "react";

const TimelineCard = ({ id, order, imgPath, date, description }) => {
  return (
    <div className="card">
      <img src={imgPath} />
      <p>{description}</p>
    </div>
  );
};

export default TimelineCard;
