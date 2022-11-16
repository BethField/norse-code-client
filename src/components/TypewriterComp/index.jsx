import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const TyperwriterComp = ({text}) =>{
    return(
        <>
            <TypeWriterEffect 
                        textStyle={{ fontFamily: '"Mali","Helvetica","Arial",sans-serif', fontSize: '6rem', fontWeight: 300 }}
                        startDelay={100}
                        cursorColor="black"
                        text={text}
                        typeSpeed={200}
                    /> 
        </>
    )
}

export default TyperwriterComp;