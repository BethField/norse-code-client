import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function DroppableArea(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });

  const borderCheck = () => {
    if(isOver) {
      // hover
      return '4px solid rgba(249, 115, 22, 0.)'
    } else if (props.objectContainerStates[props.id]["correct"]) {
      // correct
      return '4px solid green'
    } else {
      // base
      return '4px solid rgba(248, 113, 113, 0.6)'
    }
  }

  const style = {
    color: isOver ? 'green' : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "200px",
    height: "225px",
    borderRadius: "5px",
    backgroundColor: "#1e293b",
    border: borderCheck()
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}