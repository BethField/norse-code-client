import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./index.css";

const TimelineCard = ({ id, order, imgPath, date, description }) => {
  return (
    <Card className="card" id={id} order={order} date={date} description={description}>
      <CardMedia
        component="img"
        height="194"
        image="../../assets/placeholder.png"
        alt="placeholder"
      />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;

// .card {
//   width: 150px;
//   height: 200px;
//   background-color: aliceblue;
// }
