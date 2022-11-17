import { TTTAncientGreeceScene } from "../../components";
import { useState, useEffect } from "react";
import TTTAncientGreeceStartScene from "../../components/TTTAncientGreeceStartScene";
import TTTAncientGreeceEndScene from "../../components/TTTAncientGreeceEndScene";

export default function TTTAncientGreecePage() {
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
            position: [500, 200],
          },
          {
            name: "normalClothes",
            unHoveredImage: "/TTTAncientGreece/Items/normalClothes.png",
            hoveredImage: "/TTTAncientGreece/Items/normalClothesSelected.png",
            required: false,
            info: "Some normal clothes",
            position: [800, 250],
          },
          {
            name: "medievalClothes",
            unHoveredImage: "/TTTAncientGreece/Items/medievalClothes.png",
            hoveredImage: "/TTTAncientGreece/Items/medievalClothesSelected.png",
            required: false,
            info: "Some medieval clothes",
            position: [200, 250],
          },
          {
            name: "romanClothes",
            unHoveredImage: "/TTTAncientGreece/Items/toga.webp",
            hoveredImage: "/TTTAncientGreece/Items/togaSelected.png",
            required: false,
            info: "Some roman clothes",
            position: [1000, 250],
          },
        ],
        droppables: [
          {
            name: "tim",
            unHoveredImage: "/TTTAncientGreece/tim.png",
            hoveredImage: "/TTTAncientGreece/timSelected.png",
            changedItem: "/TTTAncientGreece/timGreek.png",
            sadTim: "/TTTAncientGreece/timSad.png",
            hoveredSadTim: "/TTTAncientGreece/timSadSelected.png",
            position: [1150, 200],
          },
        ],
        requiredItems: ["robe"],
        dialogue: {
          initial: [
            "TIM: Hi, I'm Time Travelling Tim! I need your expertise to help me get through Ancient Greece!",
            "TIM: What I am wearing now won't do in this period! Help me pick out some clothes!",
          ],
          final: [
            "TIM: Great choice! This will help me blend in now! Let's go check out the markets!",
          ],
        },
        // questionInfo: {
        //   question: "What is the name of the clothes worn in Ancient Greece?",
        //   options: ["Togas", "Loincloths", "Chitons"],
        //   answer: "Chitons"
        // },
        info: {
          text: "In ancient Greece, men often wore a knee-length garment called a chiton which was draped over one or both shoulders. Women often wore a longer, belted chiton over a different garment called a peplos",
          img: "/TTTAncientGreece/infoPopups/clothes.png",
        },
      },
      {
        // scene 2 - first wide shot of market
        backgroundImage: "/TTTAncientGreece/marketBgFood.png",
        items: [],
        droppables: [],
        dialogue: {
          initial: [
            "TIM: I'm super hungry from all the time travelling!",
            "TIM: Let's check out the food stall!",
          ],
          final: [],
        },
        click: {
          name: "food market",
          unHoveredImage: "/TTTAncientGreece/foodSign.png",
          hoveredImage: "/TTTAncientGreece/foodSignSelected.png",
          position: [300, 250],
        },
        // questionInfo: {
        //   question: "What is the name of the clothes worn in Ancient Greece?",
        //   options: ["Togas", "Loincloths", "Chitons"],
        //   answer: "Chitons",
        // },
      },
      {
        // scene 3 - food market stall
        backgroundImage: "/TTTAncientGreece/food-scene.png",
        items: [
          {
            name: "bread",
            unHoveredImage: "/TTTAncientGreece/Items/bread.png",
            hoveredImage: "/TTTAncientGreece/Items/breadSelected.png",
            required: true,
            info: "bread",
            position: [430, 450],
          },
          {
            name: "wine",
            unHoveredImage: "/TTTAncientGreece/Items/wine.png",
            hoveredImage: "/TTTAncientGreece/Items/wineSelected.png",
            required: false,
            info: "wine",
            position: [580, 400],
          },
          {
            name: "fish",
            unHoveredImage: "/TTTAncientGreece/Items/fish.png",
            hoveredImage: "/TTTAncientGreece/Items/fishSelected.png",
            required: false,
            info: "fish",
            position: [770, 440],
          },
          {
            name: "grains",
            unHoveredImage: "/TTTAncientGreece/Items/grains.png",
            hoveredImage: "/TTTAncientGreece/Items/grainsSelected.png",
            required: false,
            info: "grains",
            position: [950, 400],
          },
        ],
        droppables: [
          {
            name: "tim",
            unHoveredImage: "/TTTAncientGreece/timGreek.png",
            hoveredImage: "/TTTAncientGreece/timGreek.png",
            changedItem: "/TTTAncientGreece/timGreek.png",
            sadTim: "/TTTAncientGreece/timGreek.png",
            hoveredSadTim: "/TTTAncientGreece/timGreek.png",
            position: [1150, 200],
          },
        ],
        requiredItems: ["bread", "wine", "grains"],
        dialogue: {
          initial: [
            "TIM: I'd better pick up an offering to leave at the temple. I'm not sure what kind of offering the Gods would like...can you help me choose one?",
          ],
          final: ["Great! This will be a perfect offering!"],
        },
        // questionInfo: {
        //   question: "What is the name of the clothes worn in Ancient Greece?",
        //   options: ["Togas", "Loincloths", "Chitons"],
        //   answer: "Chitons"
        // },
        info: {
          text: "The Ancient Greeks ate a variety of delicious dishes. Their diet was made up of mostly bread, grains, olives, fruit, vegetables, chickpeas and fish. They also ate boiled dandelions and even stinging nettles!",
          img: "/TTTAncientGreece/infoPopups/food.png",
        },
      },
      {
        // scene 4 - second wide shot of market
        backgroundImage: "/TTTAncientGreece/marketBgPottery.png",
        items: [],
        droppables: [],
        dialogue: {
          initial: ["Why don't we go ahead and visit another stall! How about some pottery?"],
          final: [],
        },
        click: {
          name: "pottery",
          unHoveredImage: "/TTTAncientGreece/potterySign.png",
          hoveredImage: "/TTTAncientGreece/potterySignSelected.png",
          position: [490, 280],
        },
      },
      {
        // scene 5 - pottery market stall
        backgroundImage: "/TTTAncientGreece/vases.png",
        items: [
          {
            name: "vase2",
            unHoveredImage: "/TTTAncientGreece/Items/vase2.png",
            hoveredImage: "/TTTAncientGreece/Items/vase2Selected.png",
            required: false,
            info: "vase to not click",
            position: [950, 495],
          },
        ],
        droppables: [],
        requiredItems: [],
        dialogue: {
          initial: [
            "TIM: Wow these look amazing! what are those pictures printed on them?",
            "SHOPKEEPER: Those are stories about famous gods, heroes and creatures. Choose a pot and I’ll tell you about it.",
          ],
          final: [],
        },
        click: {
          name: "vase1",
          unHoveredImage: "/TTTAncientGreece/Items/vase1.png",
          hoveredImage: "/TTTAncientGreece/Items/vase1Selected.png",
          info: "vase to click",
          position: [780, 390],
        },
      },
      {
        // scene 6 - Medusa cave scene
        backgroundImage: "/TTTAncientGreece/caveBg.png",
        items: [],
        droppables: [],
        requiredItems: [],
        dialogue: {
          initial: [
            "SHOPKEEPER: Perseus’s mother was stolen by an evil king who wouldn’t let her go unless Perseus killed Medusa, a Gorgon who turned people to stone by looking at them",
            "SHOPKEEPER: On his way, Perseus was given a reflective shield, a sickle and some flying sandals to help him defeat her. ",
            "SHOPKEEPER: What do you think Perseus did when he got to the cave and saw it was full of people turned to stone?",
          ],
          final: [
            "SHOPKEEPER: Well done! And after that, Perseus returned to King Polydectes with the head of Medusa, which he used to turn the King into stone and set his mother free.",
          ],
        },
        questionScene: true,
        questionInfo: {
          question: "How did Perseus use his reflective shield an sickle to defeat Medusa?",
          options: [
            "He covered his eyes with the shield and used the sickle to cut off her arms",
            "He walked backwards using the shield to see her and used the sickle to cut off her head",
            "He threw the shield at her head and used the sickle to cut off her legs",
          ],
          answer:
            "He walked backwards using the shield to see her and used the sickle to cut off her head",
        },
        // info: {
        //   text: "After Perseus killed Medusa, he took her head and returned to King Polydectes. When he was there, he used Medusa’s head to turn Polydectes into stone and set his mother free",
        //   img: "/TTTAncientGreece/infoPopups/medusa.png",
        // },
      },
      {
        // scene 7 - final wide shot of market
        backgroundImage: "/TTTAncientGreece/marketBgAT.png",
        items: [],
        droppables: [],
        dialogue: {
          initial: ["I wonder what that noise is in the distance, let's go and find out..."],
          final: [],
        },
        click: {
          name: "food market",
          unHoveredImage: "/TTTAncientGreece/ATSign.png",
          hoveredImage: "/TTTAncientGreece/ATSignSelected.png",
          position: [680, 300],
        },
      },
      {
        // scene 8 - theatre scene
        backgroundImage: "/TTTAncientGreece/theatreBg.png",
        items: [
          {
            name: "masks",
            unHoveredImage: "/TTTAncientGreece/Items/jointMask.png",
            hoveredImage: "/TTTAncientGreece/Items/jointMaskSelected.png",
            required: true,
            info: "masks",
            position: [450, 500],
          },
        ],
        droppables: [
          {
            name: "actor1",
            unHoveredImage: "/TTTAncientGreece/actor1.png",
            hoveredImage: "/TTTAncientGreece/actor1.png",
            changedItem: "/TTTAncientGreece/maskedActor1.png",
            position: [1250, 270],
          },
          {
            name: "actor2",
            unHoveredImage: "/TTTAncientGreece/actor2.png",
            hoveredImage: "/TTTAncientGreece/actor2.png",
            changedItem: "/TTTAncientGreece/maskedActor2.png",
            position: [1020, 270],
          },
        ],
        requiredItems: ["masks"],
        dialogue: {
          initial: [
            "TIM: There's Aristotle, the famous greek philosopher! Maybe he can explain what's going on here",
            "ARISTOTLE: This place is called an amphitheatre. In Ancient Greece we love live theatre.",
            "ARISTOTLE: The actors usually wear masks so everyone can see their emotions but the actors don't have their masks...can you help them get ready?",
          ],
          final: ["ARISTOTLE: Excellent! Now the play can begin!"],
        },
        // questionInfo: {
        //   question: "What is the name of the clothes worn in Ancient Greece?",
        //   options: ["Togas", "Loincloths", "Chitons"],
        //   answer: "Chitons"
        // },
        info: {
          text: "In ancient greece almost every city had an open-air amphitheatre. The actors wore large masks in plays which were either comedies or tragedies. Tragedies were often about the past and comedies tended to be about everyday life.",
          img: "/TTTAncientGreece/infoPopups/amphitheatre.png",
        },
      },
      {
        // scene 9 - temple scene
        backgroundImage: "/TTTAncientGreece/temple.png",
        items: [
          {
            name: "wine",
            unHoveredImage: "/TTTAncientGreece/Items/wine.png",
            hoveredImage: "/TTTAncientGreece/Items/wineSelected.png",
            required: true,
            info: "wine",
            position: [500, 200],
          },
        ],
        droppables: [
          {
            name: "athena",
            unHoveredImage: "/TTTAncientGreece/athena.png",
            hoveredImage: "/TTTAncientGreece/athena.png",
            changedItem: "/TTTAncientGreece/athenaWine.png",
            position: [1150, 200],
          },
        ],
        requiredItems: ["wine"],
        dialogue: {
          initial: [
            "TIM: I’ve finally arrived at The Parthenon! And there’s the statue of the Goddess Athena. Help me leave her an offering",
          ],
          final: [
            "TIM: Good job! I'd better get going. I can't wait to tell everyone at school about ancient Greece!",
          ],
        },
        // questionInfo: {
        //   question: "What is the name of the clothes worn in Ancient Greece?",
        //   options: ["Togas", "Loincloths", "Chitons"],
        //   answer: "Chitons"
        // },
        info: {
          text: "Ancient Greek temples housed statues of the deities and were used to make offerings to the gods and goddesses. People made offerings that consisted of fruit, baskets of grain, or even meat was meat. They also made a libation, a drink offering made of wine, milk, and honey.",
          img: "/TTTAncientGreece/infoPopups/temple.png",
        },
      },
    ],
  };

  const [currentScene, setCurrentScene] = useState(0);
  const [sceneData, setSceneData] = useState(gameData.scenes[currentScene]);
  const [endSceneState, setEndSceneState] = useState(false)

  useEffect(() => {
    setSceneData(gameData.scenes[currentScene]);
  }, [currentScene]);

  const [started, setStarted] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      {console.log(currentScene)}
      {currentScene == 9 ? 
      <TTTAncientGreeceEndScene></TTTAncientGreeceEndScene> :
      (started ? (
        <TTTAncientGreeceScene
          sceneData={sceneData}
          currentScene={currentScene}
          setCurrentScene={setCurrentScene}
        />
      ) : (
        <TTTAncientGreeceStartScene
          started={started}
          setStarted={setStarted}
        ></TTTAncientGreeceStartScene>
      ))}
      
    </div>
  );
}
