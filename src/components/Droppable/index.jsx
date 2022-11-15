import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id
  });
  const style = {
    width: 250
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // backgroundImage: props.changedClothes ? `url(${props.greekTim})` : (isOver ? 'url("/TTTAncientGreece/timSelected.png")' : 'url("/TTTAncientGreece/tim.png")')
  };
  console.log(props)

  console.log(props.happyState)



  return (
    <div ref={setNodeRef} style={{position: 'absolute', top: props.droppable.position[1], left: props.droppable.position[0]}}>
      <img style={style} src={props.changed ? props.droppable.changedItem : (props.happyState ?  (isOver ? props.droppable.hoveredSadTim : props.droppable.sadTim) : (isOver ? props.droppable.hoveredImage : props.droppable.unHoveredImage))} alt="" />
      {props.children}
    </div>
  );
}
