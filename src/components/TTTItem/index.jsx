import { useState } from "react"

export default function TTTItem(){

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
        <div>
            <img onMouseEnter={() => changeActive(active)} onMouseLeave={() => changeActive(active)} src={active ? greekClothingSelectedSrc : greekClothingSrc} alt="" />
        </div>
    )
}
