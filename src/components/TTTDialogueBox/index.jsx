import React from "react";
import { useState, useEffect } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import './index.css'

export default function TTTDialogueBox({
  dialogue,
  dialogueLength,
  dialogueState,
  setDialogueState,
  setGreyOut,
  dialogueFinal,
  questionAnswered,
  currentScene,
  setCurrentScene,
  setShowInfo,
}) {
  const [showArrow, setShowArrow] = useState(true);
  const [keyState, setKeyState] = useState(0)

  const handleClick = () => {
    if (questionAnswered) {
      setCurrentScene(currentScene + 1);
      setShowInfo(false);
    }
    setDialogueState(dialogueState + 1);
    console.log(dialogueState, dialogueLength);
    if (dialogueState >= dialogueLength - 2) {
      console.log("set false");
      setGreyOut(false);
    }
  };
  console.log(dialogue);

  useEffect(() => {
    setShowArrow(true);
    if (questionAnswered) {
      setShowArrow(true);
    } else if (dialogueState == dialogueLength - 1) {
      setShowArrow(false);
    }
    setKeyState(keyState + 1)
  }, [dialogueState, questionAnswered, currentScene, dialogueLength]);

  return (
    <div
      style={{
        border: "8px solid #CE6A85",
        borderRadius: 10,
        width: 800,
        height: 200,
        backgroundColor: "#577590",
        position: "absolute",
        top: 750 - 100 - 5,
        left: 1500 / 2 - 800 / 2 - 5,
      }}
    >
      <div
        style={{ height: 140, display: "flex", alignItems: "center", padding: 30, maxWidth: 650 }}
      >
        {/* <p style={{ color: "white", fontFamily: "Roboto", fontSize: 20 }}>
          {questionAnswered ? dialogueFinal : dialogue}
        </p> */}
        <TypeWriterEffect
                            key={keyState} 
                            textStyle={{ fontFamily: '"Roboto","Helvetica","Arial",sans-serif;', fontSize: '1.5rem', fontWeight: 300 }}
                            startDelay={50}
                            cursorColor="black"
                            text={questionAnswered ? dialogueFinal : dialogue}
                            typeSpeed={20}
                        />
      </div>
      {showArrow ? (
        <img
          src="/TTTAncientGreece/right-long-solid.svg"
          onClick={handleClick}
          style={{
            position: "absolute",
            left: 720,
            top: 75,
            width: 30,
            padding: 10,
            border: "none",
            borderRadius: "50%",
            backgroundColor: "#127133",
          }}
        ></img>
      ) : null}
    </div>
  );
}
