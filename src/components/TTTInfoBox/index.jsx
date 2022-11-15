import React from "react";
import { useState } from "react";
import './index.css'

export default function TTTInfoBox({questionInfo, setQuestionAnswered}){
    
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState("Incorrect!")

    const handleClick = (answer) => {
        setShowResult(true)
        if(answer == questionInfo.answer){            
            setResult("Correct!")
            setQuestionAnswered(true)
        } else {
            setResult("Incorrect!")
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 10,
            border: '8px solid #43AA8B',
            borderRadius: 20,
            width: 600,
            height: 300,
            backgroundColor: 'rgb(217, 217, 217, 0.8)',
            position: 'absolute',
            top: 750/2-300/2,
            left: 1500/2-600/2
        }}>
            <h1>{questionInfo.question}</h1>
            <div style={{
                width: 300,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#D9D9D9',
                padding: 20,
                borderRadius: 20
            }}>
                <div>
                    <h3 className="option" onClick={() => handleClick(questionInfo.options[0])}><li>{questionInfo.options[0]}</li></h3>
                    <h3 className="option" onClick={() => handleClick(questionInfo.options[1])}><li>{questionInfo.options[1]}</li></h3>
                    <h3 className="option" onClick={() => handleClick(questionInfo.options[2])}><li>{questionInfo.options[2]}</li></h3>
                </div>
            </div>
            {showResult ? <div style={{
                backgroundColor: '#90BE6D',
                border: 'none',
                padding: 20,
                borderRadius: 20,
                margin: 10
            }}>{result}</div> : null}
        </div>
    )
}
