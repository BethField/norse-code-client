import React from "react"
import { Box, Card, ThemeProvider, Typography, Container, Button } from "@mui/material"
import appTheme from "../../theme"
import './index.css'

export default function LandingMainBox(){
    return(
        <ThemeProvider theme={appTheme}>
            <Card sx={{
                width: 3/5,
                minHeight: 3/5,
                background: 'linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 5,
                padding: 10,
                margin: 10
            }}>
                <Box>
                    <Typography variant="h1" >Making Humanities Easy To Teach</Typography>
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
        </ThemeProvider>
    )
}