import React from "react";
import { useEffect, useState } from "react"
import { Box, Stack, Button, Typography } from "@mui/material"
import { GamesCard } from ".."


const GamesList= ({historyOnly, setHistoryOnly, geographyOnly, philosophyOnly, artHistoryOnly,
    setGeographyOnly, setPhilosophyOnly, setArtHistoryOnly, setLevelKS1, setLevelKS2, levelKS1, levelKS2, themeMode}) => {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchGames() {
          setIsLoading(true)
          const response = await fetch(`http://localhost:3000/games`);
          const gameData = await response.json();
          let sortedGameData = gameData.sort(
            (p1, p2) => Number(p2.available) - Number(p1.available) 
          );

          console.log(sortedGameData)

          setGames(sortedGameData)
          setIsLoading(false)
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
                    .map(s => {
                        s.game_link = "/games" + s.game_route
                        return s
                    })

        return filteredGames.length == 0 ? 
            <Box sx={{bgcolor: "skyblue", p: 2, fontSize: "30px", display: "flex", flexDirection: "column", borderRadius: "10px"}}>
                <Typography>
                    Nothing matches your filters! Please try again or click below to see all games!
                </Typography>
                <Button onClick={setAllFilters}>See All games</Button>
            </Box> : 
            filteredGames.map((s,i) => 
            <GamesCard key={i} name={s.game_name} subject={s.game_subject} level={s.game_level} img={s.game_bg_img} description={s.game_description} available={s.available} game_link={s.game_link} img_path={s.img_path}/>)

    }

    return(
        <Box
        margin="20px"
        flex={4} 
        p={2}
        justifyContent="center"
        sx={{borderRadius: 3, background: themeMode ? 'linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)' : 'linear-gradient(180deg, rgba(20,122,195,0.8) 0%, rgba(133,200,247,0.8) 100%)'}}
        >
            {isLoading ? 
            <Box sx={{bgcolor: "skyblue", p: 2, fontSize: "30px", display: "flex", flexDirection: "column", borderRadius: "10px"}}>
                <Typography>
                    Loading...
                </Typography>
            </Box>
            :
                <>
                <Typography sx={{padding: "20px"}} variant="h1">Our Games</Typography>    
                <Stack sx={{flexDirection: "row", flexWrap: "wrap", justifyContent:"center"}}>
                { displayGames() }
                </Stack>
                </>
            }

        </Box>
    )
}

export default GamesList;
