import { useState } from "react"
import {useDraggable} from '@dnd-kit/core';

export default function TTTItem(props){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        position: 'absolute',
        top: props.item.position[1],
        left: props.item.position[0],
        zIndex: transform ? 1 : 0
    }

    //Get item from prop
    const item = props.item

    const itemImage = item.unHoveredImage
    const itemImageSelected = item.hoveredImage
    
    const [active, setActive] = useState(false)

    const changeActive = (active) => {
        setActive(!active)
    }

    return(
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <img style={{width: 150}} onMouseEnter={() => changeActive(active)} onMouseLeave={() => changeActive(active)} src={active ? itemImageSelected : itemImage} alt="" />
            {props.children}
        </div>
    )
}
