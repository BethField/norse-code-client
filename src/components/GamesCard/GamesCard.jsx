import React from "react";
import { useState, useRef } from "react"
import { Box, Card, CardContent, Collapse, CardActions, CardActionArea, CardMedia, Typography, Stack, Accordion, Slide, Drawer } from "@mui/material"
import "./index.css"

const GamesCard = ({name, subject, level, description, img}) => {

    const [showDisplay, setShowDisplay] = useState(false)
    const containerRef = useRef(null)

    const show = () => {
        setShowDisplay(true)
    }

    const hide = () => {
        setShowDisplay(false)
    }


    return(
        <Card className="gameCard" sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
            className="cardImage"
            component="img"
            image="https://picsum.photos/200"
            alt="green iguana"
            />
            <Box className="cardBox">
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </Box>
         </Card>
    )
}
 
export default GamesCard;