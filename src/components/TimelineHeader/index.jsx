import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import "./index.css";

const TimelineHeader = () => {
  return (
    <div className="header-container">
      <Typography sx={{ color: "white" }}>
        Place the cards in the correct order on the timeline
      </Typography>
      <div className="top-buttons">
        <Button>
          <QuestionMarkIcon></QuestionMarkIcon>
        </Button>
        <Button>
          <RestartAltIcon></RestartAltIcon>
        </Button>
        <Button>
          <HighlightOffIcon></HighlightOffIcon>
        </Button>
      </div>
    </div>
  );
};

export default TimelineHeader;
