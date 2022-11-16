import React from "react";
import { useState } from "react"
import { Box, List, ListItem, ListItemButton, ListItemText, Collapse, ListSubheader, styled } from "@mui/material"
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"

const FilterBar = ({historyOnly, setHistoryOnly, geographyOnly, philosophyOnly, artHistoryOnly,
    setGeographyOnly, setPhilosophyOnly, setArtHistoryOnly, setLevelKS1, setLevelKS2, levelKS1, levelKS2, themeMode}) => {
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

    const StyledListItemSection = styled(ListItemButton) (({theme}) => ({
        "&:hover": {color: "white"},
        backgroundColor: "skyblue",
        color: "black",
        borderRadius: "20px",
        margin: "10px"
    }))

    const StyledListItem = styled(Box) (({theme})=> ({
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        
    }))


    return(
        <Box
        bgcolor="skyblue"
        flex={1}
        p={2} 
        sx={{ display: { xs: "none", sm: "block" },
        background: themeMode ? 'linear-gradient(180deg, rgba(13,34,50,0.8) 0%, rgba(0,0,0,1) 100%)' : 'linear-gradient(180deg, rgba(20,122,195,1) 0%, rgba(133,200,247,1) 100%)',
        alignItems: "center"
        }}
        >
            <List
                sx={{ width: '100%' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor: "skyblue", color: "black", borderRadius: "10px", fontSize: "25px", mb: 5, p: 1, textAlign: "center", position: "static"}}>
                    Search games by filter
                    </ListSubheader>
                }
                >
                <StyledListItemSection onClick={handleLevelClick}>
                    <ListItemText primary="Level" />
                    {openLevel ? <ExpandLess /> : <ExpandMore />}
                </StyledListItemSection>
                <Collapse in={openLevel} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton onClick={setKS1} sx={{ ml: 10, mb: 2, borderRadius: 5, backgroundColor: levelKS1 ? "#2F73C1" : "#F9C74F", "&:hover": {color: "white"}}}>  
                        <ListItemText primary="KS1" />
                    </ListItemButton>
                    <ListItemButton onClick={setKS2} sx={{ ml: 10, mb: 2, borderRadius: 5, backgroundColor: levelKS2 ? "#2F73C1" : "#FFA07A", "&:hover": {color: "white"} }}>
                        <ListItemText primary="KS2" />
                    </ListItemButton>
                    </List>
                </Collapse>

                <StyledListItemSection onClick={handleSubjectClick}>
                    <ListItemText primary="Subject" />
                    {openSubject ? <ExpandLess /> : <ExpandMore />}
                </StyledListItemSection>
                <Collapse in={openSubject} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ml: 10, mb: 2, borderRadius: 5, bgcolor: historyOnly ? "grey" : "#DA8F3F", "&:hover": {color: "white"}  }} >
                        <StyledListItem onClick={setHistory}>
                            <ListItemText sx={{width: "80%"}} primary="History" />
                            <ListItemText sx={{width: "20%"}} primary={historyOnly.length} />
                        </StyledListItem>
                    </ListItemButton>
                    <ListItemButton onClick={setGeography} sx={{ ml: 10, mb: 2, borderRadius: 5, bgcolor: geographyOnly ? "#2F73C1" : "#43AA8B", "&:hover": {color: "white"} }}>
                        <ListItemText primary="Geography" />
                    </ListItemButton>
                    <ListItemButton onClick={setPhilosophy} sx={{ ml: 10, mb: 2, borderRadius: 5, bgcolor: philosophyOnly ? "#2F73C1" : "#9C6BC2", "&:hover": {color: "white"} }}>
                        <ListItemText primary="Philosophy" />
                    </ListItemButton>
                    <ListItemButton onClick={setArtHistory} sx={{ ml: 10, mb: 2, borderRadius: 5, bgcolor: artHistoryOnly ? "#2F73C1" : "#1E91D6", "&:hover": {color: "white"} }}>
                        <ListItemText primary="Art History" />
                    </ListItemButton>
                    </List>
                </Collapse>
            </List>

        </Box>
    )
}


export default FilterBar