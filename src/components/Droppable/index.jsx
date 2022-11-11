import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id
  });
  const style = {
    color: isOver ? 'green' : undefined,
    width: 400,
    height: 400,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: (isOver ? 'url("/TTTAncientGreece/timSelected.png")' : 'url("/TTTAncientGreece/tim.png")')
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
