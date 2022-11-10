import React from "react";
import { Box } from "@mui/material"


const GamesList = ({subject, level}) => {

    return(
        <div>
            <h3>SUBJECT: {subject}</h3>
            <h3>LEVEL: {level}</h3>

        </div>
    )
}

export default GamesList;