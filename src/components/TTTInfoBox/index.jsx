import React from "react";
import { useState } from "react";
import "./index.css";

export default function TTTInfoBox({ info, setQuestionAnswered }) {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("Incorrect!");

  const handleClick = (answer) => {
    setShowResult(true);
    if (answer == info.answer) {
      setResult("Correct!");
      setQuestionAnswered(true);
    } else {
      setResult("Incorrect!");
    }
  };
  if (info.answer) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 10,
          border: "8px solid #43AA8B",
          borderRadius: 20,
          width: 600,
          height: 350,
          backgroundColor: "rgb(217, 217, 217, 0.8)",
          position: "absolute",
          top: 750 / 2 - 350 / 2,
          left: 1500 / 2 - 600 / 2,
        }}
      >
        <h1>{info.question}</h1>
        <div
          style={{
            width: 500,
            height: 200,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <div>
            <h3 className="option" onClick={() => handleClick(info.options[0])}>
              <li>{info.options[0]}</li>
            </h3>
            <h3 className="option" onClick={() => handleClick(info.options[1])}>
              <li>{info.options[1]}</li>
            </h3>
            <h3 className="option" onClick={() => handleClick(info.options[2])}>
              <li>{info.options[2]}</li>
            </h3>
          </div>
        </div>
        {showResult ? (
          <div
            style={{
              backgroundColor: "#90BE6D",
              border: "none",
              padding: 20,
              borderRadius: 20,
              margin: 10,
            }}
          >
            {result}
          </div>
        ) : null}
      </div>
    );
  } else {
    setQuestionAnswered(true);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 10,
          border: "8px solid #43AA8B",
          borderRadius: 20,
          width: 600,
          height: 350,
          backgroundColor: "rgb(217, 217, 217, 0.8)",
          position: "absolute",
          top: 750 / 2 - 350 / 2,
          left: 1500 / 2 - 600 / 2,
        }}
      >
        <h1 style={{ color: "black" }}>Did you know?</h1>
        <div
          style={{
            width: 550,
            height: 200,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <p style={{ color: "black" }}>{info.text}</p>
          <img style={{ height: 200, paddingLeft: 10 }} src={info.img} alt="" />
        </div>
      </div>
    );
  }
}
