import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./index.css";

const TimelineCard = ({ id, order, imgPath, date, description }) => {
  return (
    <Card
      sx={{ maxWidth: 170, maxHeight: 200 }}
      id={id}
      order={order}
      date={date}
      description={description}
    >
      <CardMedia component="img" height="90" image={imgPath} alt="placeholder" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;
