import React from "react";
import "./index.css";
import { DroppableArea } from "../DroppableArea";
import { DraggableItem } from "../DraggableItem";
import { TimelineCard } from "../../components";

const Timeline = ({ cards, objectContainerStates, dnDPairings }) => {
  const checkDragInDrop = (droppableAreaId) => {
    // get keys
    const entries = Object.entries(dnDPairings);
    const newEntries = entries.map((entry, i) => {
      if (droppableAreaId == entry[1]) {
        return <DraggableItem id={entry[0]} key={entry[0]}> <TimelineCard
                                                            key={cards[entry[0] - 1].card_id}
                                                            id={cards[entry[0] - 1].card_id}
                                                            order={cards[entry[0] - 1].card_order}
                                                            imgPath={cards[entry[0] - 1].card_img_path}
                                                            date={cards[entry[0] - 1].card_date}
                                                            description={cards[entry[0] - 1].card_description}
        />
        </DraggableItem>
      }
    });

    return newEntries;
  }

  function displayDots() {
    console.log("timeline cards", cards);
    return cards.map((card, i) => (
      <DroppableArea key={i+1} id={i+1} objectContainerStates={objectContainerStates}>
        {checkDragInDrop(i+1)}
        {console.log("function execution", checkDragInDrop())}
        {/* <div className="drop-square" id={i}>
          <div className="dot" key={i} id={i}></div>
        </div> */}
      </DroppableArea>

    ));
  }

  return (
    <>
      {cards.length !=0 ? <div className="timeline">{displayDots()}</div> : <div>Loading...</div>}
    </>
  );
};

export default Timeline;
