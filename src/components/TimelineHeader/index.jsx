import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import "./index.css";

const TimelineHeader = ({ handleCheckAnswer }) => {
  return (
    <div className="header-container">
      <div className="top-buttons">
        <Button sx={{
          width: 55,
          height: 55,
          backgroundColor: '#fb923c',
          borderRadius: '50%',
          border: '3px solid #ea580c',
          "&:hover": {
            backgroundColor: "#fdba74"
          }
          }}>
          <QuestionMarkIcon sx={{color: '#7c2d12', fontSize: '36px'}}></QuestionMarkIcon>
        </Button>
        <Button sx={{
          width: 55,
          height: 55,
          backgroundColor: '#ea580c',
          borderRadius: '50%',
          border: '3px solid #c2410c',
          "&:hover": {
            backgroundColor: '#fb923c'
          }
          }}>
          <RestartAltIcon sx={{color: '#7c2d12', fontSize: '36px'}}></RestartAltIcon>
        </Button>
        <Button sx={{
          width: 55,
          height: 55,
          backgroundColor: '#dc2626',
          borderRadius: '50%',
          border: '3px solid #991b1b',
          "&:hover": {
            backgroundColor: '#f87171'
          }
          }}>
          <HighlightOffIcon sx={{color: '#7f1d1d', fontSize: '36px'}}></HighlightOffIcon>
        </Button>
      </div>
      <div className="header-texts">
        <Typography variant="h4" sx={{ color: "white" }}>
          Roman Invasion of England: AD43 - AD410
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#A1A1AA" }}>
          Place the cards in the correct order on the timeline
        </Typography>
      </div>
      <div className="check-button-div">
        <Button variant="contained" color="success" onClick={handleCheckAnswer}>Check Answer</Button>
      </div>
    </div>
  );
};

// #fb923c
export default TimelineHeader;
