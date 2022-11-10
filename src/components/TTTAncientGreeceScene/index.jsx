import { useState, useEffect } from "react";
import TTTInfoBox from "../TTTInfoBox";
import TTTDialogueBox from "../TTTDialogueBox";
import TTTItem from "../TTTItem";
import "./index.css"

const TTTAncientGreeceScene = ({sceneData, currentScene, setCurrentScene}) => {
    
    const [inventory, setCurrentInventory] = useState([]);
    const [eligible, setEligible] = useState(false);

    //console.log(sceneData)

    // User chooses a chat option
    const chatOptionFunction = () => {
        eligible ? setCurrentScene(currentScene + 1) : alert("You do not have the items to move on");
    }

    // User attempts to pick up an item
    const updateInventory = (si) => {
        if(!inventory.includes(si)){
            setCurrentInventory(inventory => [...inventory, si]);
        }
    }

    // When the inventory changes check if it's equal to the required items
    useEffect(() => {
        checkEqual();
    }, [inventory]);

    // Check if the inventory has the required items to move on
    const checkEqual = () => {
        console.log("required: ", sceneData.requiredItems);
        console.log("current inventory: ", inventory);

        if(sceneData.requiredItems.every(item => inventory.includes(item))) {
        setEligible(true)
        }
    }

    console.log(sceneData.backgroundImgUrl);

    // Render the scene
    return (
    <div className="scene-container" style={{
            backgroundImage: 'url("/TTTAncientGreece/temple.png")',
            position: 'relative'
        }}>
            <TTTItem></TTTItem>
        {/* <TTTInfoBox></TTTInfoBox> */}
        {/* <TTTDialogueBox></TTTDialogueBox> */}
        {/* {sceneData.sceneItems.map((si, i) => <button 
                                                    className={`scene-item-${i}`} 
                                                    onClick={() => {updateInventory(si)}}>{si}</button>)}
        <div>
            Current inventory: {inventory.length == 0 ? <p>Empty</p> : inventory.map(i => <p>{i}</p>)}
        </div>
        {/* <img src={sceneData.backgroundImgUrl}/> */}
        {/* <div className="bottom-area">
            <ul>Required Items: 
                {sceneData.requiredItems.map(si => <li>{si}</li>)}
            </ul>
            <ul>
                {sceneData.chatOptions.map(co => <button onClick={chatOptionFunction}>{co}</button>)}
            </ul>

        </div> */}
    </div>
    );
}

export default TTTAncientGreeceScene;
