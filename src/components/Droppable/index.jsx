import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id
  });
  const style = {
    width: 150
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // backgroundImage: props.changedClothes ? `url(${props.greekTim})` : (isOver ? 'url("/TTTAncientGreece/timSelected.png")' : 'url("/TTTAncientGreece/tim.png")')
  };
  
  return (
    <div ref={setNodeRef}>
      <img style={style} src={props.changedClothes ? props.greekTim : (isOver ? props.schoolTimHovered : props.schoolTim)} alt="" />
      {props.children}
    </div>
  );
}
