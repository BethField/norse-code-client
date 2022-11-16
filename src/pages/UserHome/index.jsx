import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Box } from '@mui/system'; 
import { GamesCard } from '../../components';
import './index.css';

export default function UserHome() {
    const [username, setUsername] = useState();
    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
        //   const response = await fetch(`http://localhost:3000/games`);
        //   const gameData = await response.json();
        const gameData = [
            {
                "game_description": "timeline game for the roman invasion",
                "game_id": 3,
                "game_topic": "roman invasion",
                "game_type": "timeline",
                "game_link": "/games/timeline/3",
                "available": true
            },
            {
                "game_description": "adventure game set in the greek time period",
                "game_id": 1,
                "game_topic": "greek invasion",
                "game_type": "timeline",
                "game_link": "/games/TTTAncientGreece",
                "available": true
            }
        ]
          console.log(gameData)
          setGames(gameData)
        }
        fetchGames();
    }, []);

    useEffect(() => {
        async function getUser() {
            const userId = Cookies.get('userId');
            if (userId === undefined) {
                window.location.href = "/login";
            } else {
                const response = await fetch("http://localhost:3000/users/" + userId);
                const userData = await response.json();
                setUsername(userData['username']);
            }
        }
        getUser();
    }, []);
    
    return(
        <main>
            <h1>Welcome to your personal account, {username}!</h1>
            <div className='box'>
            
                <Box sx={{
                backgroundColor: 'primary.dark',
                flexDirection: "row", 
                flexWrap: "wrap", 
                justifyContent:"center",
                borderRadius: 1
                }}>

                <h1>Play your favourite games</h1>
                
                
                {games.map((s,i) => 
                <GamesCard 
                key={i} 
                name={s.game_name} 
                subject={s.game_subject} 
                level={s.game_level} 
                img={s.game_bg_img} 
                description={s.game_description} 
                available={s.available} 
                game_link={s.game_link}/>
                )}
            </Box>
            </div>
                
            
            
            
        </main>
    )
}