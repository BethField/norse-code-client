import React from "react"
import { Box, Card, ThemeProvider, Typography, Container, Button } from "@mui/material"
import lightTheme from "../../theme/lightTheme"
import darkTheme from "../../theme/darkTheme"
import './index.css'
import TypeWriterEffect from 'react-typewriter-effect';
import TyperwriterComp from "../TypewriterComp"

export default function LandingMainBox({themeMode}){
    return(
        <>
            <Card sx={{
                width: 3/5,
                minHeight: 3/5,
                background: themeMode ? 'linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)' : 'linear-gradient(180deg, rgba(20,122,195,1) 0%, rgba(133,200,247,1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                padding: 10,
                margin: 10
            }}>
                <Box>
                    <Typography variant="h1" style={{textAlign: 'left'}} >Making Humanities </Typography>
                    {themeMode ? <TyperwriterComp text={"Easy To Teach"} /> : <TyperwriterComp text={"Fun To Learn"} />}
                    <Typography variant="h5">Interactive and fun humanities games for all ages. Evolve your classroom toolkit with our fun teaching solution.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 4}}>
                        <Button sx={{ borderRadius: 3, padding: 2, marginRight: 10}} variant="contained" color="secondary">Register</Button>
                        <Button sx={{ borderRadius: 3, padding: 2, marginRight: 10}} variant="contained" color="secondary">View Games</Button>
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

// linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%);
// linear-gradient(180deg, rgba(17,131,214,1) 0%, rgba(97,164,212,1) 100%);