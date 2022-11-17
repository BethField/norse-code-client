import React, { useEffect, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const TypewriterComp = ({themeMode}) =>{
    if(themeMode){
        return(
            <>
                <TypeWriterEffect
                            key={0} 
                            textStyle={{ fontFamily: '"Roboto","Helvetica","Arial",sans-serif;', fontSize: '6rem', fontWeight: 300 }}
                            startDelay={100}
                            cursorColor="black"
                            text={"Easy To Teach"}
                            typeSpeed={200}
                        />
            </>
        )
    } else {
        return(
            <>
                <TypeWriterEffect
                            key={1}
                            textStyle={{ fontFamily: '"Mali","Helvetica","Arial",sans-serif', fontSize: '6rem', fontWeight: 300 }}
                            startDelay={100}
                            cursorColor="black"
                            text={"Fun To Learn"}
                            typeSpeed={200}
                        /> 
            </>
        )
    }
    
}

export default TypewriterComp;
