import React from "react";
import { Box } from "@mui/material"
import { SubjectCard } from "../"

const games = [
    {
        game: "History Game 1",
        game_subject: "History",
        game_level: "KS1"
    },
    {
        game: "History Game 2",
        game_subject: "History",
        game_level: "KS2"
    },
    {
        game: "Geography Game 1",
        game_subject: "Geography",
        game_level: "KS1"
    },
    {
        game: "Geography Game 2",
        game_subject: "Geography",
        game_level: "KS2"
    },
    {
        game: "Philosophy Game 1",
        game_subject: "Philosophy",
        game_level: "KS1"
    },
    {
        game: "Philosophy Game 2",
        game_subject: "Philosophy",
        game_level: "KS2"
    },
    {
        game: "Art History Game 1",
        game_subject: "Art History",
        game_level: "KS1"
    },
    {
        game: "Art History Game",
        game_subject: "Art History",
        game_level: "KS2"
    },
]



const SubjectList= ({historyOnly, geographyOnly, philosophyOnly, artHistoryOnly, levelKS1, levelKS2}) => {

    function displaySubjects() {
        return games
                    .filter(s => !levelKS2 || s.game_level == "KS2")
                    .filter(s => !levelKS1 || s.game_level == "KS1")
                    .filter(s => !historyOnly || s.game_subject == "History")
                    .filter(s => !geographyOnly || s.game_subject == "Geography")
                    .filter(s => !philosophyOnly || s.game_subject == "Philosophy")
                    .filter(s => !artHistoryOnly || s.game_subject == "Art History")
                    .map(s => <SubjectCard name={s.game} subject={s.game_subject} level={s.game_level} />)
    }

    return(
        <Box bgcolor="pink" flex={4} p={2}>
            { displaySubjects() }
        </Box>
    )
}

export default SubjectList;