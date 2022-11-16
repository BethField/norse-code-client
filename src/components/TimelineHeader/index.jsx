import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
// button dialog stuff
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./index.css";

const TimelineHeader = ({ handleCheckAnswer}) => {
  
  const [openHelp, setOpenHelp] = useState(false);
  const [openRefresh, setOpenRefresh] = useState(false);
  // button functionality

  // help button
  const handleHelpClickOpen = () => {
    setOpenHelp(true);
  }

  const handleHelpClose = () => {
    setOpenHelp(false);
  }

  // refresh button
  const handleRefreshClickOpen = () => {
    setOpenRefresh(true);
  }

  const handleRefreshClose = () => {
    setOpenRefresh(false);
  }

  const handleRefreshConfirm = () => {
    window.location.reload(false);
  }

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
          }}
          onClick={handleHelpClickOpen}>
          <QuestionMarkIcon sx={{color: '#7c2d12', fontSize: '36px'}}></QuestionMarkIcon>
        </Button>
        <Dialog
          open={openHelp}
          onClose={handleHelpClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center'}}>
            {"How to play"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <br/>
              The cards at the bottom of the page must be sorted into <b>chronological order</b>.<br/><br/>
              Do this by placing the cards in order onto the <b>timeline.</b> <br/><br/>
              Press the <b>check answer</b> button to see if your cards are in the correct place
              the <b>incorrect cards</b> will be returned to the <b>bottom</b> of the page
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleHelpClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <Button sx={{
          width: 55,
          height: 55,
          backgroundColor: '#ea580c',
          borderRadius: '50%',
          border: '3px solid #c2410c',
          "&:hover": {
            backgroundColor: '#fb923c'
          }
          }}
          onClick={handleRefreshClickOpen}>
          <RestartAltIcon sx={{color: '#7c2d12', fontSize: '36px'}}></RestartAltIcon>
        </Button>
        <Dialog
          open={openRefresh}
          onClose={handleRefreshClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center'}}>
            {"Reload"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to refresh the page?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleRefreshConfirm}>Yes</Button>
              <Button onClick={handleRefreshClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
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
        <Typography variant="h4">
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
