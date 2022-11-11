import React from "react";
import { Box, Stack } from "@mui/material"
import { GamesCard } from ".."

const games = [
    {
        game: "History Game 1",
        game_subject: "History",
        game_level: "KS1",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "History Game 2",
        game_subject: "History",
        game_level: "KS2",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "Geography Game 1",
        game_subject: "Geography",
        game_level: "KS1",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "Geography Game 2",
        game_subject: "Geography",
        game_level: "KS2",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "Philosophy Game 1",
        game_subject: "Philosophy",
        game_level: "KS1",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "Philosophy Game 2",
        game_subject: "Philosophy",
        game_level: "KS2",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "Art History Game 1",
        game_subject: "Art History",
        game_level: "KS1",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
    {
        game: "Art History Game",
        game_subject: "Art History",
        game_level: "KS2",
        img_url: "",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut",
    },
]
// we want data by release date


const GamesList= ({historyOnly, geographyOnly, philosophyOnly, artHistoryOnly, levelKS1, levelKS2}) => {

    function displayGames () {
        return games
                    .filter(s => !levelKS2 || s.game_level == "KS2")
                    .filter(s => !levelKS1 || s.game_level == "KS1")
                    .filter(s => !historyOnly || s.game_subject == "History")
                    .filter(s => !geographyOnly || s.game_subject == "Geography")
                    .filter(s => !philosophyOnly || s.game_subject == "Philosophy")
                    .filter(s => !artHistoryOnly || s.game_subject == "Art History")
                    .map((s,i) => <GamesCard key={i} name={s.game} subject={s.game_subject} level={s.game_level} img={s.img_url} description={s.description} />)
    }

    return(
        <Box bgcolor="pink" flex={4} p={2} flexDirection={"row"} flexWrap={"wrap"}>
            <Stack sx={{flexDirection: "row", flexWrap: "wrap"}}>
             { displayGames() }
            </Stack>

        </Box>
    )
}

export default GamesList;