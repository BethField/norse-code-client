import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function DraggableItem(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    width: "200px",
    height: "220px"
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}