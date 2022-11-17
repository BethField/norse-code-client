import React from "react"
import { useState, useEffect } from "react"
import { Box, Card, ThemeProvider, Typography, Container, Button } from "@mui/material"
import GamesCard from '../GamesCard/GamesCard.jsx'
import './index.css'

export default function LandingCarouselBox({themeMode}){

    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchGames() {
          const response = await fetch(`http://localhost:3000/games`);
          const gameData = await response.json();
          let sortedGameData = gameData.sort(
            (p1, p2) => Number(p2.available) - Number(p1.available) 
          );

          console.log(sortedGameData)

          setItems(sortedGameData)
        }
        fetchGames();
    }, []);

    const displayItems = () => {
        const updatedItems = items
                .map(s=> {
                    s.game_link = "/games" + s.game_route
                    return s
                })

        return updatedItems.map((item, i) => <GamesCard 
                                        key={i} 
                                        name={item.game_name} 
                                        subject={item.game_subject} 
                                        level={item.game_level} 
                                        img={item.game_bg_img} 
                                        description={item.game_description} 
                                        available={item.available} 
                                        game_link={item.game_link} 
                                        img_path={item.img_path}/>)
    }

    return(
        <>
            <Card sx={{
                width: 3/5,
                minHeight: 3/5,
                background: themeMode ? 'linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)' : 'linear-gradient(180deg, rgba(20,122,195,0.8) 0%, rgba(133,200,247,0.8) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 3,
                padding: 10,
                margin: 10,
            }}>
                <div className="carouselContainer">
                    <div className='wrapper1'>
                        {displayItems()}
                    </div>
                    <div className='wrapper2'>
                        {displayItems()}
                    </div>
                    </div>
            </Card>
        </>
    )
}
