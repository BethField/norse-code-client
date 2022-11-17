import { useState, useEffect } from "react";
import TTTInfoBox from "../TTTInfoBox";
import TTTDialogueBox from "../TTTDialogueBox";
import TTTItem from "../TTTItem";
import Droppable from "../Droppable";
import "./index.css";
import { DndContext } from "@dnd-kit/core";

const TTTAncientGreeceScene = ({ sceneData, currentScene, setCurrentScene }) => {
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

  const backgroundImage = sceneData.backgroundImage;
  const items = sceneData.items;
  const requiredItems = sceneData.requiredItems;
  const dialogue = sceneData.dialogue;
  const droppables = sceneData.droppables;
  const questionInfo = sceneData.questionInfo;
  const info = sceneData.info;
  const click = sceneData.click;

  /* INVENTORY MANAGEMENT */
  const [inventory, setCurrentInventory] = useState([]);
  const [eligible, setEligible] = useState(false);
  const [dialogueState, setDialogueState] = useState(0);
  const [happyState, setHappyState] = useState(false);
  const [greyOut, setGreyOut] = useState(true);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [clickHovered, setClickHovered] = useState(false)

  // User chooses a chat option
  const chatOptionFunction = () => {
    // eligible ? setCurrentScene(currentScene + 1) : alert("You do not have the items to move on");
    if (eligible) {
      //Clear states and go to next scene
      setCurrentInventory([]);
      setEligible(false);
      setCurrentScene(currentScene + 1);
    } else {
      console.log("you cannot go to next scene");
    }
  };

  // User attempts to pick up an item
  const updateInventory = (sceneItem) => {
    if (!inventory.includes(sceneItem)) {
      setCurrentInventory((inventory) => [...inventory, sceneItem]);
    }
  };

  // When the inventory changes check if it's equal to the required items
  useEffect(() => {
    checkEqual();
  }, [inventory]);

  // Check if the inventory has the required items to move on
  const checkEqual = () => {
    if (sceneData.requiredItems.every((item) => inventory.includes(item))) {
      setEligible(true);
    }
  };

  /* DRAG AND DROP LOGIC */
  // multiple draggables
  // Second item in subarray determines if it's to be rendered or not

  const [dragItems, setDragItems] = useState(items.map((item) => [item.name, true]));

  useEffect(() => {
    setDragItems(items.map((item) => [item.name, true]));
  }, [sceneData]);

  const createInitialDraggableStates = () => {
    let amountOfDraggables = 0;
    dragItems.forEach((item) => {
      if (item[1] == true) {
        amountOfDraggables++;
      }
    });

    //set initial states with name ids
    const initialStates = {};
    for (let i = 0; i < amountOfDraggables; i++) {
      initialStates[dragItems[i][0]] = null;
    }

    return initialStates;
  };

  const createInitialDroppableStates = () => {
    let amountOfDroppables = droppables.length;
    const initialStates = {};
    for (let i = 0; i < amountOfDroppables; i++) {
      initialStates[droppables[i].name] = false;
    }
    return initialStates;
  };

  const draggableInitialStates = createInitialDraggableStates();
  const droppableInitialStates = createInitialDroppableStates();

  // objects states
  const [parents, setParents] = useState(draggableInitialStates);
  useEffect(() => {
    setParents(createInitialDraggableStates());
  }, [dragItems]);

  const [objectContainerStates, setObjectContainerStates] = useState(droppableInitialStates);
  const [changed, setChanged] = useState(null);
  //Important so we can keep track of what's being deleted
  const [itemsState, setItemsState] = useState(items);

  useEffect(() => {
    setObjectContainerStates(createInitialDroppableStates());
    setChanged(null);
    setItemsState(items);
    setDialogueState(0);
    setQuestionAnswered(false);
  }, [parents]);

  const checkDragInDrop = (dAreaId) => {
    // get keys
    const entries = Object.entries(parents);
    const newEntries = entries.map((entry, index) => {
      if (dAreaId == entry[1]) {
        return (
          <TTTItem
            id={entry[0]}
            key={entry[0]}
            item={itemsState[index]}
            currentScene={currentScene}
            setCurrentScene={setCurrentScene}
          ></TTTItem>
        );
      } else {
        return null;
      }
    });
    return newEntries;
  };

  const checkInitialState = () => {
    const entries = Object.entries(parents);
    return entries.map((entry, index) =>
      entry[1] == null ? (
        <TTTItem
          id={entry[0]}
          key={entry[0]}
          item={itemsState[index]}
          currentScene={currentScene}
          setCurrentScene={setCurrentScene}
        ></TTTItem>
      ) : null
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        className="scene-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          position: "relative",
        }}
      >
        {checkInitialState()}
        {greyOut ? (
          <div
            className="grey-out"
            style={{
              position: "absolute",
              width: 1500,
              height: 750,
              backgroundColor: "rgb(0,0,0,0.8)",
              zIndex: 0,
            }}
          ></div>
        ) : null}
        {Object.keys(objectContainerStates).map((id, index) => (
          // we updated the droppable component so it would accept an 'id'
          // prop and pass it to useDroppable
          <Droppable
            key={id}
            id={id}
            changed={changed}
            happyState={happyState}
            setHappyState={setHappyState}
            droppable={droppables[index]}
          >
            {/* get all keys from draggable objects state -> loop through the keys, check if the value at that key matches id of this droppable area*/}
            {checkDragInDrop(id)}
          </Droppable>
        ))}
        <TTTDialogueBox
          dialogue={dialogue.initial[dialogueState]}
          dialogueLength={dialogue.initial.length}
          setGreyOut={setGreyOut}
          dialogueState={dialogueState}
          setDialogueState={setDialogueState}
          dialogueFinal={dialogue.final[0]}
          questionAnswered={questionAnswered}
          currentScene={currentScene}
          setCurrentScene={setCurrentScene}
          setShowInfo={setShowInfo}
        ></TTTDialogueBox>
        {showInfo || (sceneData.questionScene && dialogue.initial.length == dialogueState + 1) ? (
          <TTTInfoBox
            info={questionInfo ? questionInfo : info}
            setQuestionAnswered={setQuestionAnswered}
          ></TTTInfoBox>
        ) : null}
        {click ? (
          <div
            onClick={() => {
              setDialogueState(0);
              setCurrentScene(currentScene + 1);
            }}
            onMouseEnter={() => setClickHovered(true)}
            onMouseLeave={() => setClickHovered(false)}
            style={{
              position: "absolute",
              top: click.position[1],
              left: click.position[0],
              width: 140,
              height: 500,
            }}
          >
            <img style={{width: 180}} src={clickHovered ? click.hoveredImage : click.unHoveredImage} alt="" />
          </div>
        ) : null}
      </div>
    </DndContext>
  );

  /* 
  HANDLE DRAG LOGIC
  Commented out code allows item to be shown within droppable area and return back to original space once dropped out of original area
  BE CAREFUL IF DELETING COMMENTED CODE
  */
  function handleDragEnd(event) {
    const { over, active } = event;

    // firstly, check if an active item has a parent, if it does set that parent to false
    if (parents[active.id] || parents[active.id] == 0) {
      setObjectContainerStates((prevState) => ({
        ...prevState,
        [parents[active.id]]: false,
      }));
    }

    //Only place if it's over droppable area that is allowed to be dropped into and is a required item
    if (over && !objectContainerStates[over.id] && requiredItems.includes(event.active.id)) {
      console.log("Good placement!");
      // change the container filled status to true
      setObjectContainerStates((prevState) => ({
        ...prevState,
        [over.id]: true,
      }));
      delete parents[event.active.id];
      const itemsFiltered = itemsState.filter((item) => item.name !== event.active.id);
      setItemsState([...itemsFiltered]);
      setParents(parents);
      setChanged(true);
      updateInventory(event.active.id);
      setHappyState(false);
      setShowInfo(true);
      setGreyOut(true);
    } else {
      console.log("Cannot place that there!");
      if (droppables[0].sadTim) {
        setHappyState(true);
      }

      //Dialogue action about it not being something that can be placed
    }
  }

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
};

export default TTTAncientGreeceScene;
