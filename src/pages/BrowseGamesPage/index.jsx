import { useState } from 'react'
import { FilterBar, GamesList } from "../../components"
import { Box, Container, Stack } from "@mui/material"

function BrowseGamesPage() {
  const [games, setGames] = useState([])
  const [historyOnly, setHistoryOnly] = useState(false)
  const [geographyOnly, setGeographyOnly] = useState(false)
  const [philosophyOnly, setPhilosophyOnly] = useState(false)
  const [artHistoryOnly, setArtHistoryOnly] = useState(false)
  const [levelKS1, setLevelKS1] = useState(false)
  const [levelKS2, setLevelKS2] = useState(false)

  // useEffect to fetch data

  //function to display games based o filters
  return (
    <Box>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <FilterBar historyOnly={historyOnly} setHistoryOnly={setHistoryOnly} geographyOnly={geographyOnly} philosophyOnly={philosophyOnly} artHistoryOnly={artHistoryOnly}
          setGeographyOnly={setGeographyOnly} setPhilosophyOnly={setPhilosophyOnly} setArtHistoryOnly={setArtHistoryOnly} levelKS1={levelKS1} setLevelKS1={setLevelKS1}
          levelKS2={levelKS2} setLevelKS2={setLevelKS2}
        />
        <GamesList historyOnly={historyOnly} geographyOnly={geographyOnly} philosophyOnly={philosophyOnly} artHistoryOnly={artHistoryOnly} levelKS1={levelKS1} levelKS2={levelKS2}/>

      </Stack>
    </Box>
  )
}

export default BrowseGamesPage
