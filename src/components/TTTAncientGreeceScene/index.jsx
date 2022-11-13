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

    NOTES: TTTItem component should be flexible to accommodate all items, 
      Droppable (TTTDroppable in the future?) is possible to be flexible to accommodate all drop areas...
        ...(unselected image, selected, and the image that is changed into once selected)
      Different droppable might depend on if it's a character or not i.e. if the item can be taken off of droppable or not
      ...(an example of the former is tim going from school clothes to greek clothes and cannot go back) <- Completed...?
      ...(maybe there is puzzle to rearrange items (since we are working on this with timeline STRETCH GOAL))

    */
   
    /* GRABBING SCENE DATA */

    const backgroundImage = sceneData.backgroundImage
    const items = sceneData.items
    const requiredItems = sceneData.requiredItems
    const dialogue = sceneData.dialogue

    console.log(items)
    
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

    /* DRAG AND DROP LOGIC */

    // multiple draggables
    // Second item in subarray determines if it's to be rendered or not
    const draggables = items.map(item => [item.name, true])
    console.log("draggables: ", draggables)
    const [dragItems, setDragItems] = useState(draggables)

    // // define an order
    // const order = {
    //   0: "2",
    // }

    const createInitialDraggableStates = () => {
      let amountOfDraggables = 0;
      dragItems.forEach(item => {
        if(item[1] == true){
          amountOfDraggables++
        }
      })

      //set initial states with name ids
      const initialStates = {}
      for (let i = 0; i < amountOfDraggables; i++) {
        initialStates[dragItems[i][0]] = null
      }

      return initialStates
    }

    const createInitialDroppableStates = () => {
      let amountOfDroppables = 1;
      const initialStates = {}
      for (let i = 0; i < amountOfDroppables; i++) {
        initialStates[i] = false;
      }
      return initialStates
    }


    const draggableInitialStates = createInitialDraggableStates();
    const droppableInitialStates = createInitialDroppableStates();

    // objects states
    const [parents, setParents] = useState(draggableInitialStates);
    const [objectContainerStates, setObjectContainerStates] = useState(droppableInitialStates);
    const [changedClothes, setChangedClothes] = useState(null)
    //Important so we can keep track of what's being deleted
    const [itemsState, setItemsState] = useState(items)

    const checkDragInDrop = (dAreaId) => {
      // get keys
      const entries = Object.entries(parents);
      const newEntries = entries.map((entry, index) => {
        if (dAreaId == entry[1]) {
          
          return <TTTItem id={entry[0]} key={entry[0]} item={itemsState[index]}></TTTItem>
        } else {
          return null;
        }
      });

      return newEntries;
    }

    // NOTE: ITEM IS HARDCODED ATM
    const checkInitialState = () => {
      const entries = Object.entries(parents);
      return entries.map((entry, index) => entry[1] == null ? <TTTItem id={entry[0]} key={entry[0]} item={itemsState[index]}></TTTItem> : null)
    }

    const checkCorrectness = () => {
      const strOrder = JSON.stringify(order);
      const strParents = JSON.stringify(parents);

      strOrder === strParents ? console.log("correct order") : console.log("incorrect order");
    }

    return (
      <DndContext onDragEnd={handleDragEnd}>
          <div className="scene-container" style={{
                  backgroundImage: `url(${backgroundImage})`,
                  position: 'relative'
              }}>
              {checkInitialState()}
              {Object.keys(objectContainerStates).map((id) => (
                  // we updated the droppable component so it would accept an 'id'
                  // prop and pass it to useDroppable
                  //NOTE: HARD CODED CHARACTER DROPPABLE (need to change to we have selected, unselected and changed images)
                  <Droppable key={id} id={id} changedClothes={changedClothes} schoolTim={sceneData.schoolTim} schoolTimHovered={sceneData.hoveredSchoolTim} greekTim={sceneData.greekTim}>
                      {/* get all keys from draggable objects state -> loop through the keys, check if the value at that key matches id of this droppable area*/}
                      {checkDragInDrop(id)}
                  </Droppable>
              ))}
              <button onClick={checkCorrectness}>Check Correctness</button>
          </div>
      </DndContext>
    );
  
  /* 
  HANDLE DRAG LOGIC
  Commented out code allows item to be shown within droppable area and return back to original space once dropped out of original area
  BE CAREFUL IF DELETING COMMENTED CODE
  */
  function handleDragEnd(event) {
    const {over, active} = event;

    // firstly, check if an active item has a parent, if it does set that parent to false
    if(parents[active.id] || parents[active.id] == 0) {
      setObjectContainerStates(prevState => ({
        ...prevState,
        [parents[active.id]]: false
      }));
    }

    //Only place if it's over droppable area that is allowed to be dropped into and is a required item
    if (over && !objectContainerStates[over.id] && requiredItems.includes(event.active.id)) {
      console.log("Active id: ", event.active.id)
      console.log("Good placement!")
      // change the container filled status to true
      setObjectContainerStates(prevState => ({
        ...prevState,
        [over.id]: true
      }));
        console.log(event)
        // // update the parent of the draggable item to be the id of the droppable area
        // setParents(prevState => ({
        //   ...prevState,
        //   [active.id]: over.id
        // }));
        delete parents[event.active.id]
        const itemsFiltered = itemsState.filter(item => item.name !== event.active.id)
        setItemsState([...itemsFiltered])
        setParents(parents);
        setChangedClothes(true)

        // draggables[0][1] = false
        // setDragItems([...draggables])
        // console.log(dragItems)
      } else {
        console.log("Cannot place that there!")
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

    /* OLD SCENE LOGIC BEFORE DRAG AND DROP STILL TO BE REVIEWED!!!!! */

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
