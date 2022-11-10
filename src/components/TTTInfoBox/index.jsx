import React from "react";

export default function TTTInfoBox(){
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
            <h1>Correct!</h1>
            <div style={{
                width: 300,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#D9D9D9',
                padding: 20,
                borderRadius: 20
            }}>
                <h3>Information and image giving more detail about their correct answer</h3>
            </div>
            <button style={{
                backgroundColor: '#90BE6D',
                border: 'none',
                padding: 20,
                borderRadius: 20,
                margin: 10
            }}>Continue</button>
        </div>
    )
}
