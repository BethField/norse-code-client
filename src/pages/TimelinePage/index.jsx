import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DndContext, DragOverlay } from '@dnd-kit/core';

import { Timeline, TimelineCard, TimelineHeader } from "../../components";
import { DraggableItem } from "../../components/DraggableItem";

import "./index.css";

const TimelinePage = () => {
  const [cards, setCards] = useState([]);
  const [dots, setDots] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [activeId, setActiveId] = useState(null); // states for the active draggable item (used in DnD overlay)

  const { id } = useParams();

  useEffect(() => {
    async function loadGame() {
      try {
          const response = await fetch(`http://localhost:3000/games/timeline/${id}`);
          const gameData = await response.json();
          const cardData = gameData.cards;
    
          const shuffledCards = cardData
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

    
          setCards(shuffledCards);

      } catch (err) {
        console.log(err)
      }

    }
    loadGame();
  }, []);

  // Setup Draggable and Droppable states -> Currently hardcoded
  const createInitialStates = (type) => {
    const len = 9;
    const initialStates = {}
    for (let i = 1; i < len+1; i++) {
      type == "draggable" ? initialStates[i] = null : initialStates[i] = {filled: false, correct: false};
    }
    return initialStates
  }

  // CURRENT AIM : SET UP STATE AND DROPPING IN FUNCTIONALITY

  const droppableInitialStates = createInitialStates("droppable");
  const draggableInitialStates = createInitialStates("draggable");

  const [objectContainerStates, setObjectContainerStates] = useState(droppableInitialStates);
  const [dnDPairings, setDndPairings] = useState(draggableInitialStates);

  // below function, has same role as checkInitialState (basically, checks the parents, if they're null render inside the container div)
  function displayCards() {
    const entries = Object.entries(dnDPairings);

    const newEntries = entries.map(entry => {
      if(entry[1] == null) {
        return <DraggableItem id={entry[0]}><TimelineCard
                                              key={cards[entry[0] - 1].card_id}
                                              id={cards[entry[0] - 1].card_id}
                                              order={cards[entry[0] - 1].card_order}
                                              imgPath={cards[entry[0] - 1].card_img_path}
                                              date={cards[entry[0] - 1].card_date}
                                              description={cards[entry[0] - 1].card_description}
        /></DraggableItem>
      }
    });
    return newEntries;
  }

  // const checkDragInDrop = (droppableAreaId) => {
  //   // get keys
  //   const entries = Object.entries(dnDPairings);
  //   const newEntries = entries.map(entry => {
  //     if (droppableAreaId == entry[1]) {
  //       return <DraggableItem id={entry[0]} key={entry[0]}>{entry[0]}</DraggableItem>
  //     } else {
  //       return null;
  //     }
  //   });

  //   return newEntries;
  // }

  function handleDragStart(event) {
    console.log(event);
    setActiveId((event.active.id - 1));
  }

  function handleDragEnd(event) {
    const {over, active} = event;

    // copied this over
    setActiveId(null);
    // firstly, check if an active item has a parent, if it does set that parent to false
    if(dnDPairings[active.id] || dnDPairings[active.id] == 0) {
      setObjectContainerStates(prevState => ({
        ...prevState,
        
        [dnDPairings[active.id]]: {
          ...prevState[dnDPairings[active.id]],
          ["filled"]: false
        }
      }));
    }
    
    if (over && !objectContainerStates[over.id]["filled"]) {
      // change the container filled status to true
      setObjectContainerStates(prevState => ({
        ...prevState,
        [over.id]: {
          ...prevState[over.id],
          ["filled"]: true
        }

      }));

      // update the parent of the draggable item to be the id of the droppable area
      setDndPairings(prevState => ({
        ...prevState,
        [active.id]: over.id
      }));
    } else {

      // turn the parent to null (render the draggable item outside)
      setDndPairings (prevState => ({
        ...prevState,
        [active.id]: null
      }));
    }
  }

  console.log("before return even runs, dndpairings", dnDPairings);
  return (
    // create, handleDragEnd function for DnDContext
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <main className="timeline-page">
        <TimelineHeader />
        <div className="timeline-container">
          <Timeline dots={dots} setDots={setDots} cards={cards} objectContainerStates={objectContainerStates} dnDPairings={dnDPairings}/>
        </div>
        <div className="card-container">
          {/* This is our scrollable list (where we render the ACTUAL draggable items) */}
          {cards.length != 0 ? <div className="card-scroll-box">{displayCards()}</div> : <div>Loading...</div>}
        </div>
        
        <DragOverlay>
          
          {(activeId || activeId === 0) ? ( <TimelineCard
            key={cards[activeId].card_id}
            id={cards[activeId].card_id}
            order={cards[activeId].card_order}
            imgPath={cards[activeId].card_img_path}
            date={cards[activeId].card_date}
            description={cards[activeId].card_description} />) : null}

        </DragOverlay>

      </main>
    </DndContext>
  );
};

export default TimelinePage;
