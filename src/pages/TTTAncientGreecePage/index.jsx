import { TTTAncientGreeceScene } from "../../components"
import { useState, useEffect } from "react";
import TTTAncientGreeceStartScene from "../../components/TTTAncientGreeceStartScene";

export default function TTTAncientGreecePage(){
    // Load in the game data from the API
    const gameData = {
      scenes: [
        {
          // scene 1
          backgroundImage: "/TTTAncientGreece/bedroom.png",
          items: [
            {
              name: "robe",
              unHoveredImage: "/TTTAncientGreece/Items/greekClothing.png",
              hoveredImage: "/TTTAncientGreece/Items/greekClothingSelected.png",
              required: true,
              info: "A greek robe",
              position: [500, 200]
            },
            {
              name: "normalClothes",
              unHoveredImage: "/TTTAncientGreece/Items/normalClothes.png",
              hoveredImage: "/TTTAncientGreece/Items/normalClothesSelected.png",
              required: false,
              info: "Some normal clothes",
              position: [800, 250]
            }
          ],
          droppables: [
            {
              name: "tim",
              unHoveredImage: "/TTTAncientGreece/tim.png",
              hoveredImage: "/TTTAncientGreece/timSelected.png",
              changedItem: "/TTTAncientGreece/timGreek.png",
              sadTim : "/TTTAncientGreece/timSad.png",
              hoveredSadTim: "/TTTAncientGreece/timSadSelected.png",
              position: [1150, 200]
            }
          ],
          requiredItems: ["robe"],
          dialogue: {
            initial: ["Tim: Hi, I'm Time Travelling Tim! I need your expertise to help me get through Ancient Greece!", 
              "Tim: What I am wearing now won't do in this period! Help me pick out some clothes!"],
            final: ["Great choice! This will help me blend in now! Let's go check out the markets!"]
            },
          // questionInfo: {
          //   question: "What is the name of the clothes worn in Ancient Greece?",
          //   options: ["Togas", "Loincloths", "Chitons"],
          //   answer: "Chitons"
          // },
          info: {
            text: "This is some info about Chitons",
            img: "/TTTAncientGreece/Items/greekClothing.png"
          }
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
              info: "A greek robe",
              position: [200, 100]
            },
            {
              name: "spear",
              unHoveredImage: "/TTTAncientGreece/Items/spear.png",
              hoveredImage: "/TTTAncientGreece/Items/spearSelected.png",
              required: false,
              info: "A spear",
              position: [700, 500]
            }
          ],
          droppables: [
            {
              name: "tim",
              unHoveredImage: "/TTTAncientGreece/tim.png",
              hoveredImage: "/TTTAncientGreece/timSelected.png",
              changedItem: "/TTTAncientGreece/timGreek.png",
              position: [900, 100]
            }
          ],
          requiredItems: ["spear"],
          dialogue: {
            initial: ["Tim: Hi, I'm Time Travelling Tim! I need your expertise to help me get through Ancient Greece!", 
              "Tim: What I am wearing now won't do in this period! Help me pick out some clothes!"],
            final: ["Great choice! This will help me blend in now! Let's go check out the markets!"]
            },
          questionInfo: {
            question: "What is the name of the clothes worn in Ancient Greece?",
            options: ["Togas", "Loincloths", "Chitons"],
            answer: "Chitons"
          }
        }
      ]
    }

    const [currentScene, setCurrentScene] = useState(0);
    const [sceneData, setSceneData] = useState(gameData.scenes[currentScene])

    useEffect(() => {
      setSceneData(gameData.scenes[currentScene])
    }, [currentScene])

    const [started, setStarted] = useState(false)

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>Current Scene: {currentScene + 1}</h1>
          {started ? <TTTAncientGreeceScene
                sceneData={sceneData}
                currentScene={currentScene}
                setCurrentScene={setCurrentScene}
            /> : <TTTAncientGreeceStartScene started={started} setStarted={setStarted}></TTTAncientGreeceStartScene>}
      </div>
    )
}