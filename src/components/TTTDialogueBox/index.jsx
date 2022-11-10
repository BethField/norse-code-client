import React from "react";

export default function TTTDialogueBox(){
     return (
        <div style={{
            border: '8px solid #CE6A85',
            borderRadius: 10,
            width: 800,
            height: 200,
            backgroundColor: '#577590',
            position: 'absolute',
            top: 750-100-5,
            left: 1500/2-800/2-5
        }}>
            <p style={{ color: 'white' }}>This is dialogue</p>
        </div>
     )
}
