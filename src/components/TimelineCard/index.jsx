import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./index.css";

const TimelineCard = ({ id, order, imgPath, date, description }) => {
  return (
    <Card
      sx={{ width: 190, height: 210 }}
      id={id}
      order={order}
      date={date}
      description={description}
    >
      <CardMedia component="img" height="90" image={imgPath} alt="placeholder" />
      <CardContent>
        <Typography sx={{ fontSize: "0.7rem" }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;
