import React from "react";
import { Box } from "@mui/material"
import { GamesList } from "../"

const SubjectCard = ({name, subject, level}) => {

    return(
        <div>
            <h1>{name}</h1>
            <Box>
                <GamesList name={name} subject={subject} level={level} />
            </Box>
            <br></br>
        </div>
    )
}

export default SubjectCard;