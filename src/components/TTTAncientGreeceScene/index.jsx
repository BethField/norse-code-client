import { useState, useEffect } from "react";
import TTTInfoBox from "../TTTInfoBox";
import TTTDialogueBox from "../TTTDialogueBox";
import TTTItem from "../TTTItem";
import Droppable from "../Droppable";
import "./index.css"
import {DndContext} from '@dnd-kit/core';

const TTTAncientGreeceScene = ({sceneData, currentScene, setCurrentScene}) => {
    
  
    /*
    PLEASE READ TO UNDERSTAND
    A scene is called upon TTTAncientGreekPage where the page component feeds data to the scene prop
    A scene contains the following props: background, dialogue, info and items

    sceneData contains
      background image 
      items is an array containing many item
        an item contain: name, un-hovered item image, hovered item image, required boolean, info about item
      required item is an array of required items with item names
      dialogue is an array of dialogue options
    
    currentScene stores an index of the current scene, setCurrentScene sets the index of (used to get another scene)
    */
   
    /* GRABBING SCENE DATA */

    const backgroundImage = sceneData.backgroundImage
    const items = sceneData.items
    const requiredItems = sceneData.requiredItems
    const dialogue = sceneData.dialogue

    //console.log(items)
    
    // const [inventory, setCurrentInventory] = useState([]);
    // const [eligible, setEligible] = useState(false);

    //console.log(sceneData)

    // // User chooses a chat option
    // const chatOptionFunction = () => {
    //     eligible ? setCurrentScene(currentScene + 1) : alert("You do not have the items to move on");
    // }

    // // User attempts to pick up an item
    // const updateInventory = (si) => {
    //     if(!inventory.includes(si)){
    //         setCurrentInventory(inventory => [...inventory, si]);
    //     }
    // }

    // When the inventory changes check if it's equal to the required items
    // useEffect(() => {
    //     checkEqual();
    // }, [inventory]);

    // // Check if the inventory has the required items to move on
    // const checkEqual = () => {
    //     console.log("required: ", sceneData.requiredItems);
    //     console.log("current inventory: ", inventory);

    //     if(sceneData.requiredItems.every(item => inventory.includes(item))) {
    //     setEligible(true)
    //     }
    // }

    // multiple draggables
    const draggables = [[items[0].name, true]];
    const [dragItems, setDragItems] = useState(draggables)

    // define an order
    const order = {
      0: "2",
    }

    const createInitialStates = (type) => {
      let amountOfDraggables = 0;
      dragItems.forEach(item => {
        if(item[1] == true){
          amountOfDraggables++
        }
      })
      const initialStates = {}
      for (let i = 0; i < amountOfDraggables; i++) {
        type == "draggable" ? initialStates[i] = null : initialStates[i] = false;
      }

      return initialStates
    }

    const draggableInitialStates = createInitialStates("draggable");
    const droppableInitialStates = createInitialStates("droppable");

    // objects states
    const [parents, setParents] = useState(draggableInitialStates);
    const [objectContainerStates, setObjectContainerStates] = useState(droppableInitialStates);
    const [changedClothes, setChangedClothes] = useState(null)

    const checkDragInDrop = (dAreaId) => {
      // get keys
      const entries = Object.entries(parents);
      const newEntries = entries.map(entry => {

        if (dAreaId == entry[1]) {
          return <TTTItem id={entry[0]} key={entry[0]} item={items[0]}></TTTItem>
        } else {
          return null;
        }
      });

      return newEntries;
    }

    const checkInitialState = () => {
      const entries = Object.entries(parents);
      return entries.map(entry => entry[1] == null ? <TTTItem id={entry[0]} key={entry[0]} item={items[0]}></TTTItem> : null)
    }

    const checkCorrectness = () => {
      const strOrder = JSON.stringify(order);
      const strParents = JSON.stringify(parents);

      strOrder === strParents ? console.log("correct order") : console.log("incorrect order");
    }

    return (
      <DndContext onDragEnd={handleDragEnd}>
          <div className="scene-container" style={{
                  backgroundImage: 'url("/TTTAncientGreece/temple.png")',
                  position: 'relative'
              }}>
              {checkInitialState()}
              {Object.keys(objectContainerStates).map((id) => (
                  // we updated the droppable component so it would accept an 'id'
                  // prop and pass it to useDroppable
                  <Droppable key={id} id={id} changedClothes={changedClothes} schoolTim={sceneData.schoolTim} schoolTimHovered={sceneData.hoveredSchoolTim} greekTim={sceneData.greekTim}>
                      {/* get all keys from draggable objects state -> loop through the keys, check if the value at that key matches id of this droppable area*/}
                      {checkDragInDrop(id)}
                  </Droppable>
              ))}
              <button onClick={checkCorrectness}>Check Correctness</button>
          </div>
      </DndContext>
    );

  function handleDragEnd(event) {
    const {over, active} = event;

    // firstly, check if an active item has a parent, if it does set that parent to false
    if(parents[active.id] || parents[active.id] == 0) {
      setObjectContainerStates(prevState => ({
        ...prevState,
        [parents[active.id]]: false
      }));
    }

    if (over && !objectContainerStates[over.id]) {
      // change the container filled status to true
      setObjectContainerStates(prevState => ({
        ...prevState,
        [over.id]: true
      }));

        // // update the parent of the draggable item to be the id of the droppable area
        // setParents(prevState => ({
        //   ...prevState,
        //   [active.id]: over.id
        // }));
        setParents([]);
        setChangedClothes(true)

        // draggables[0][1] = false
        // setDragItems([...draggables])
        // console.log(dragItems)
      } else {

        // turn the parent to null (render the draggable item outside)
        setParents (prevState => ({
          ...prevState,
          [active.id]: null
        }));

        setChangedClothes(false)
      }

    }
    //console.log(sceneData.backgroundImgUrl);

    // Render the scene
    // return (
    // <div className="scene-container" style={{
    //         backgroundImage: 'url("/TTTAncientGreece/temple.png")',
    //         position: 'relative'
    //     }}>
            
    //     {/* <TTTInfoBox></TTTInfoBox>
    //     <TTTDialogueBox></TTTDialogueBox> */}
    //     {/* {sceneData.sceneItems.map((si, i) => <button 
    //                                                 className={`scene-item-${i}`} 
    //                                                 onClick={() => {updateInventory(si)}}>{si}</button>)}
    //     <div>
    //         Current inventory: {inventory.length == 0 ? <p>Empty</p> : inventory.map(i => <p>{i}</p>)}
    //     </div>
    //     {/* <img src={sceneData.backgroundImgUrl}/> */}
    //     {/* <div className="bottom-area">
    //         <ul>Required Items: 
    //             {sceneData.requiredItems.map(si => <li>{si}</li>)}
    //         </ul>
    //         <ul>
    //             {sceneData.chatOptions.map(co => <button onClick={chatOptionFunction}>{co}</button>)}
    //         </ul>

    //     </div> */}
    // </div>
    //);
}

export default TTTAncientGreeceScene;
