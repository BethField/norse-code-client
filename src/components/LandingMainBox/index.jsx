import React from "react"
import { Box, Card, ThemeProvider, Typography, Container, Button } from "@mui/material"
import lightTheme from "../../theme/lightTheme"
import darkTheme from "../../theme/darkTheme"
import './index.css'
import TypeWriterEffect from 'react-typewriter-effect';

export default function LandingMainBox(){
    return(
        <>
            <Card sx={{
                width: 3/5,
                minHeight: 3/5,
                // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,182,0,1) 0%, rgba(255,44,0,1) 100%);',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 5,
                padding: 10,
                margin: 10
            }} color='primary.main'>
                <Box>
                    <Typography variant="h1" >Making Humanities </Typography>
                    <TypeWriterEffect 
                        textStyle={{ fontFamily: 'Roboto","Helvetica","Arial",sans-serif', fontSize: '6rem', fontWeight: 300 }}
                        startDelay={100}
                        cursorColor="black"
                        text="Easy To Teach"
                        typeSpeed={200}
            
                    />
                    <Typography variant="h5">Interactive and fun humanities games for all ages. Evolve your classroom toolkit with our fun teaching solution.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 4}}>
                        <Button sx={{ borderRadius: 3, padding: 2, marginRight: 10}} variant="contained" color="lightBlueButton" >Register</Button>
                        <Button sx={{ borderRadius: 3, padding: 2, marginRight: 10}} variant="contained" color="blueButton" >View Games</Button>
                    </Box>
                </Box>
                <Box id="landingImgContainer">
                    <img className="landingYardImg" src="src\assets\yard.png" alt="Picture of yard" width={200} />
                    <img className="landingRuinsImg" src="src\assets\ruins.png" alt="Picture of yard" width={250} />
                    <img className="landingTMImg" src="src\assets\timeline.png" alt="Picture of yard" width={250} />
                </Box>
            </Card>
        </>
    )
}
