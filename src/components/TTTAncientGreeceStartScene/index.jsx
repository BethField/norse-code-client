import "./index.css"

const TTTAncientGreeceStartScene = (props) => {
    return (
        <div className="scene-container" style={{
            backgroundImage: `url("/TTTAncientGreece/templeBlurred.png")`,
            position: 'relative',
        }}>
            <img className="ac-logo" style={{position: 'absolute', top: 280, left: 450}} src="/TTTAncientGreece/TTTAncientGreece.png" alt="" />
            <img style={{position: 'absolute', top: 100, left: 400}} src="/TTTAncientGreece/TTTLogo.png" alt="" />
            <img className="floating-head" src="/TTTAncientGreece/greekTimHead.png" alt="" />
            <div className="button-box">
                <button className="start-button" onClick={() => props.setStarted(true)}>START</button>
                <button className="start-button">INSTRUCTIONS</button>
            </div>
        </div>
    )
}

export default TTTAncientGreeceStartScene;
