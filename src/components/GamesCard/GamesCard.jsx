import React from "react";
import { useState, useRef } from "react"
import { Box, Card, CardMedia, Typography, styled, Badge, CardActionArea } from "@mui/material"
import "./index.css"

const GamesCard = ({name, subject, level, description, img, available, game_link}) => {

    const [showDisplay, setShowDisplay] = useState(false)
    const containerRef = useRef(null)

    const subjectColours = (subject) => {
        if(subject == "History") {
            return "#DA8F3F";
        } else if (subject == "Geography") {
            return "#43AA8B"
        } else if (subject == "Philosophy") {
            return "#CE6A85";
        } else {
            return "#1E91D6"
        }
    }

    const show = () => {
        setShowDisplay(true)
    }

    const hide = () => {
        setShowDisplay(false)
    }

    const StyledBadge = styled(Badge) (({theme}) => ({
        '& .MuiBadge-badge': {
            right: 40,
            top: 0,
            border: `2px solid ${theme.palette.background.paper}`,
            borderRadius: "500px",
            paddingTop: "24px",
            paddingBottom: "24px",
            fontSize: "20px",
        }
    }))



    return(
            <Card className="gameCard" sx={{ width: 400, margin: 2, borderRadius: 5}}>
                <CardActionArea href={game_link}>
                    {available ? null : <div className="ribbon">Coming soon!</div> }
                    <CardMedia
                    className="cardImage"
                    component="img"
                    image="https://picsum.photos/200"
                    alt="green iguana"
                    />
                    <StyledBadge badgeContent={level} color={level == "KS1" ? "secondary" : "primary"} sx={{width: "100%"}}>
                        <Box className="cardBox" sx={{ width: "100%", bgcolor: subjectColours(subject) }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </Box>
                    </StyledBadge>
                </CardActionArea>
                
            </Card>
    )
}
 
export default GamesCard;