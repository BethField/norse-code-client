import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function DraggableItem(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const style = {
    visibility: transform ? 'hidden' : 'visible',
    width: "200px",
    height: "220px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}