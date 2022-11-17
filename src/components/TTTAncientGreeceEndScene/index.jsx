import "./index.css"

const TTTAncientGreeceEndScene = (props) => {
    return (
        <div className="scene-container" style={{
            backgroundImage: `url("/TTTAncientGreece/templeBlurred.png")`,
            position: 'relative',
        }}>
            <img className="ac-logo" style={{position: 'absolute', top: 300, left: 450}} src="/TTTAncientGreece/TTTAncientGreece.png" alt="" />
            <img style={{position: 'absolute', top: 120, left: 400}} src="/TTTAncientGreece/TTTLogo.png" alt="" />
            <img style={{left: 1200}} className="floating-head" src="/TTTAncientGreece/greekTimHead.png" alt="" />
            <img style={{left: 200}} className="floating-head" src="/TTTAncientGreece/aristotleHead.png" alt="" />
            <div style={{position: 'absolute', top: 460, left: 450, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{fontSize: 60}}>THANKS FOR PLAYING!</h1>
            </div>
        </div>
    )
}

export default TTTAncientGreeceEndScene;
