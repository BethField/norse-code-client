import { TTTAncientGreeceScene } from "../../components"
import { useState, useEffect } from "react";
export default function TTTAncientGreecePage(){
    // Load in the game data from the API
    const gameData = {
      scenes: [
        {
          // scene 1
          backgroundImage: "/TTTAncientGreece/temple.png",
          items: [
            {
              name: "robe",
              unHoveredImage: "/TTTAncientGreece/Items/greekClothing.png",
              hoveredImage: "/TTTAncientGreece/Items/greekClothingSelected.png",
              required: true,
              info: "A greek robe"
            },
            {
              name: "normalClothes",
              unHoveredImage: "/TTTAncientGreece/Items/normalClothes.png",
              hoveredImage: "/TTTAncientGreece/Items/normalClothesSelected.png",
              required: false,
              info: "Some normal clothes"
            },
            {
              name: "spear",
              unHoveredImage: "/TTTAncientGreece/Items/spear.png",
              hoveredImage: "/TTTAncientGreece/Items/spearSelected.png",
              required: false,
              info: "A spear"
            }
          ],
          droppables: [
            {
              name: "tim",
              unHoveredImage: "/TTTAncientGreece/tim.png",
              hoveredImage: "/TTTAncientGreece/timSelected.png",
              changedItem: "/TTTAncientGreece/timGreek.png"
            }
          ],
          requiredItems: ["robe"],
          dialogue: ["Welcome to game!", "Insert Dialogue Here"],
          schoolTim: "/TTTAncientGreece/tim.png",
          hoveredSchoolTim : "/TTTAncientGreece/timSelected.png",
          greekTim: "/TTTAncientGreece/timGreek.png"
        }, 
        {
          // scene 2
          backgroundImage: "/TTTAncientGreece/theatre.png",
          items: [
            {
              name: "robe",
              unHoveredImage: "/TTTAncientGreece/Items/greekClothing.png",
              hoveredImage: "/TTTAncientGreece/Items/greekClothingSelected.png",
              required: true,
              info: "A greek robe"
            },
            {
              name: "spear",
              unHoveredImage: "/TTTAncientGreece/Items/spear.png",
              hoveredImage: "/TTTAncientGreece/Items/spearSelected.png",
              required: false,
              info: "A spear"
            }
          ],
          droppables: [
            {
              name: "tim",
              unHoveredImage: "/TTTAncientGreece/tim.png",
              hoveredImage: "/TTTAncientGreece/timSelected.png",
              changedItem: "/TTTAncientGreece/timGreek.png"
            }
          ],
          requiredItems: ["robe"],
          dialogue: ["Welcome to game!", "Insert Dialogue Here"],
          schoolTim: "/TTTAncientGreece/tim.png",
          hoveredSchoolTim : "/TTTAncientGreece/timSelected.png",
          greekTim: "/TTTAncientGreece/timGreek.png"
        }
      ]
    }

    const [currentScene, setCurrentScene] = useState(0);
    const [sceneData, setSceneData] = useState(gameData.scenes[currentScene])

    useEffect(() => {
      setSceneData(gameData.scenes[currentScene])
    }, [currentScene])

  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>Current Scene: {currentScene + 1}</h1>
        {<TTTAncientGreeceScene
              sceneData={sceneData}
              currentScene={currentScene}
              setCurrentScene={setCurrentScene}
          />}
      </div>
    )
}
