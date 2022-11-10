import React from "react";
import { useState } from "react"
import { Box, List, ListItem, ListItemButton, ListItemText, Collapse, ListSubheader } from "@mui/material"
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"

const FilterBar = ({historyOnly, setHistoryOnly, geographyOnly, philosophyOnly, artHistoryOnly,
    setGeographyOnly, setPhilosophyOnly, setArtHistoryOnly, setLevelKS1, setLevelKS2, levelKS1, levelKS2}) => {
    const [openLevel, setOpenLevel] = useState(true);
    const [openSubject, setOpenSubject] = useState(true);

    function setHistory () {
        setHistoryOnly(!historyOnly)
        console.log(historyOnly)
    }

    function setGeography () {
        setGeographyOnly(!geographyOnly)
        console.log(geographyOnly)
    }

    function setPhilosophy () {
        setPhilosophyOnly(!philosophyOnly)
        console.log(philosophyOnly)
    }

    function setArtHistory () {
        setArtHistoryOnly(!artHistoryOnly)
        console.log(artHistoryOnly)
    }

    function setKS1 () {
        setLevelKS1(!levelKS1)
        console.log(levelKS1)
    }

    function setKS2 () {
        setLevelKS2(!levelKS2)
        console.log(levelKS2)
    }


    const handleLevelClick = () => {
      setOpenLevel(!openLevel);
    };

    const handleSubjectClick = () => {
        setOpenSubject(!openSubject);
    };



    return(
        <Box
        bgcolor="skyblue"
        flex={1}
        p={2}
        sx={{ display: { xs: "none", sm: "block" }}}
        >
        <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor: "skyblue"}}>
                Search our Games by filter
                </ListSubheader>
            }
            >
            <ListItemButton onClick={handleLevelClick}>
                <ListItemText primary="Level" />
                {openLevel ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openLevel} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ ml: 10, mb: 2, borderRadius: 2, bgcolor: levelKS1 ? "white" : null }}>
                    <ListItemText onClick={setKS1} primary="KS1" />
                </ListItemButton>
                <ListItemButton sx={{ ml: 10, mb: 2, borderRadius: 2, bgcolor: levelKS2 ? "white" : null }}>
                    <ListItemText onClick={setKS2} primary="KS2" />
                </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton onClick={handleSubjectClick}>
                <ListItemText primary="Subject" />
                {openSubject ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSubject} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ ml: 10, mb: 2, borderRadius: 2, bgcolor: historyOnly ? "white" : null }} >
                    <ListItemText onClick={setHistory} primary="History" />
                </ListItemButton>
                <ListItemButton sx={{ ml: 10, mb: 2, borderRadius: 2, bgcolor: geographyOnly ? "white" : null }}>
                    <ListItemText onClick={setGeography} primary="Geography" />
                </ListItemButton>
                <ListItemButton sx={{ ml: 10, mb: 2, borderRadius: 2, bgcolor: philosophyOnly ? "white" : null }}>
                    <ListItemText onClick={setPhilosophy} primary="Philosophy" />
                </ListItemButton>
                <ListItemButton sx={{ ml: 10, mb: 2, borderRadius: 2, bgcolor: artHistoryOnly ? "white" : null }}>
                    <ListItemText onClick={setArtHistory} primary="Art History" />
                </ListItemButton>
                </List>
            </Collapse>
        </List>

        </Box>
    )
}


export default FilterBar