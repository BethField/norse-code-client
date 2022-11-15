import React from "react";
import { useEffect, useState } from "react"
import { Box, Stack, Button } from "@mui/material"
import { GamesCard } from ".."


const GamesList= ({historyOnly, setHistoryOnly, geographyOnly, philosophyOnly, artHistoryOnly,
    setGeographyOnly, setPhilosophyOnly, setArtHistoryOnly, setLevelKS1, setLevelKS2, levelKS1, levelKS2}) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
          const response = await fetch(`http://localhost:3000/games`);
          const gameData = await response.json();
          console.log(gameData)
          setGames(gameData)
        }
        fetchGames();
    }, []);
    
    const setAllFilters = () => {
        setHistoryOnly(false);
        setGeographyOnly(false);
        setPhilosophyOnly(false);
        setArtHistoryOnly(false);
        setLevelKS1(false);
        setLevelKS2(false);
    }

    function displayGames () {
        const filteredGames = games
                    .filter(s => !levelKS2 || s.game_level == "KS2")
                    .filter(s => !levelKS1 || s.game_level == "KS1")
                    .filter(s => !historyOnly || s.game_subject == "History")
                    .filter(s => !geographyOnly || s.game_subject == "Geography")
                    .filter(s => !philosophyOnly || s.game_subject == "Philosophy")
                    .filter(s => !artHistoryOnly || s.game_subject == "Art History")

        return filteredGames.length == 0 ? 
            <Box sx={{bgcolor: "skyblue", p: 2, fontSize: "30px", display: "flex", flexDirection: "column", borderRadius: "10px"}}> Nothing matches your filters! Please try again or click below to see all games!
                <Button onClick={setAllFilters}>See All games</Button>
            </Box> : 
            filteredGames.map((s,i) => 
            <GamesCard key={i} name={s.game_name} subject={s.game_subject} level={s.game_level} img={s.game_bg_img} description={s.game_description} available={s.available}/>)

    }

    return(
        <Box
        margin="20px"
        flex={4} 
        p={2}
        justifyContent="center"
        sx={{background: "linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)"}}
        >
            <Stack sx={{flexDirection: "row", flexWrap: "wrap", justifyContent:"center"}}>
             { displayGames() }
            </Stack>

        </Box>
    )
}

export default GamesList;