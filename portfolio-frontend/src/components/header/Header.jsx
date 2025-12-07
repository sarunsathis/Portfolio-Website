import "./styles.css"

function Header(props) {

    function handleTabSwitch(evnt){
        const sectionName = evnt.target.parentElement.getAttribute("data-section");
        props.stateFunc(sectionName);
    }

    return (
        <header className={`header align-items-center col-12 d-flex justify-content-between ${props.stateVar}`}>
            <div>
                <img src="" alt="Logo" className="logo" />
                <p className="logo-text">My Portfolio</p>
            </div>
            <div className="align-items-center d-flex flex-row nav-links">
                <div className="d-flex flex-row" onClick={handleTabSwitch} data-section="home">
                    <img src="" alt="Home" className="nav-icon" />
                    <p>Home</p>
                </div>
                <div className="d-flex flex-row" onClick={handleTabSwitch} data-section="about">
                    <img src="" alt="Home" className="nav-icon" />
                    <p>About</p>
                </div>
                <div className="d-flex flex-row" onClick={handleTabSwitch} data-section="project">
                    <img src="" alt="Home" className="nav-icon" />
                    <p>Project</p>
                </div>
                <div className="d-flex flex-row" onClick={handleTabSwitch} data-section="contact">
                    <img src="" alt="Home" className="nav-icon" />
                    <p>Contact</p>
                </div>
            </div>
            
        </header>
    );
    
}

export default Header;