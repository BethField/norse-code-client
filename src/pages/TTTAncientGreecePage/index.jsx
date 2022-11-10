import { TTTAncientGreeceScene } from "../../components"
import { useState, useEffect } from "react";
export default function TTTAncientGreecePage(){
    const [currentScene, setCurrentScene] = useState(0);

    // Load in the game data from the API
    const gameData = {
      scenes: [
        {
          // scene 1
          backgroundImgUrl: "../../assets/TTTAncientGreece/temple.jpg" ,
          sceneItems: ["cat", "dog"],
          requiredItems: ["cat"],
          chatOptions: ["Go to bed", "Go to next screen"]
          
        }, 
        {
          // scene 2
          backgroundImgUrl: "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg",
          sceneItems: ["ball", "rock"],
          requiredItems: ["rock"],
          chatOptions: ["Hi you made it"]
        }
      ]
    }
  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>Current Scene: {currentScene + 1}</h1>
        <TTTAncientGreeceScene
              sceneData={gameData.scenes[currentScene]}
              currentScene={currentScene}
              setCurrentScene={setCurrentScene}
          />
      </div>
    )
}
