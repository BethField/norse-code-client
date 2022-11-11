import { useState } from "react"
import {useDraggable} from '@dnd-kit/core';

export default function TTTItem(props){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id
      });
    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
    

    const greekClothingSrc = "/TTTAncientGreece/Items/greekClothing.png"
    const greekClothingSVGSrc = "/TTTAncientGreece/Items/greekClothing.svg"
    const greekClothingSelectedSrc = "/TTTAncientGreece/Items/greekClothingSelected.png"
    
    const [active, setActive] = useState(false)

    const changeActive = (active) => {
        setActive(!active)
    }

    // const ctx = document.getElementById('canvas')
    // const img = new Image()
    // img.src = greekClothingSrc
    // ctx.drawImage(img, 0, 0)

    return(
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <img onMouseEnter={() => changeActive(active)} onMouseLeave={() => changeActive(active)} src={active ? greekClothingSelectedSrc : greekClothingSrc} alt="" />
            {props.children}
        </div>
    )
}
