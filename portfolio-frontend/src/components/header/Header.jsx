import "./styles.css"
import { useState } from "react";


function Header(props) {

    const [popupOpneState, setPopupOpenState] = useState(false);

    function handleTabSwitch(evnt){
        const sectionName = evnt.target.closest(".d-flex.flex-row").getAttribute("data-section");
        props.stateFunc(sectionName);
    }

    function togglePopup(){
        setPopupOpenState(!popupOpneState);
    }

    return (<>

        <header className={`header align-items-center col-12 d-flex justify-content-between ${props.stateVar}`}>
            <div className="logo-section d-flex flex-row align-items-center">
                <img onClick={togglePopup}
                    src="./src/components/header/SarunMenon_CasualPhoto.jpg" 
                    alt="profile-pic" className="profile-pic cursor-pointer" />
                <p className="logo-text">Portfolio</p>
            </div>
            <div className="redirection-section align-items-center d-flex flex-row nav-links">
                <div className={`d-flex flex-row gap-column-2 cursor-pointer ${props.stateVar == 'home' ? 'selected' : ''}`} 
                    onClick={handleTabSwitch} data-section="home">
                    <div className="d-flex align-items-center nav-icon home-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-4 h-4" data-fg-ddq21="44.95:44.9874:/components/Navigation.tsx:112:21:4067:28:e:Icon"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    </div>
                    <p>Home</p>
                </div>
                <div className={`d-flex flex-row gap-column-2 cursor-pointer ${props.stateVar == 'project' ? 'selected' : ''}`} 
                    onClick={handleTabSwitch} data-section="project">
                    <div className="d-flex align-items-center nav-icon about-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-git2 lucide-folder-git-2 w-4 h-4" data-fg-ddq21="44.95:44.9874:/components/Navigation.tsx:112:21:4067:28:e:Icon"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><path d="M18 19c-2.8 0-5-2.2-5-5v8"></path><circle cx="20" cy="19" r="2"></circle></svg>
                    </div>
                    <p>Projects</p>
                </div>
                <div className={`d-flex flex-row gap-column-2 cursor-pointer ${props.stateVar == 'blogs' ? 'selected' : ''}`} 
                    onClick={handleTabSwitch} data-section="blogs">
                    <div className="d-flex align-items-center nav-icon blogs-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-4 h-4" data-fg-ddq21="44.95:44.9874:/components/Navigation.tsx:112:21:4067:28:e:Icon"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                    </div>
                    <p>Blogs</p>
                </div>
                <div className={`d-flex flex-row gap-column-2 cursor-pointer ${props.stateVar == 'contact' ? 'selected' : ''}`} 
                    onClick={handleTabSwitch} data-section="contact">
                    <div className="d-flex align-items-center nav-icon contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <p>Contact</p>
                </div>
            </div>
        </header>
        <div className={`${popupOpneState ? 'd-flex' : 'd-none'} info-popup flex-column align-items-center justify-content-center position-fixed`}>
            <img src="./src/components/header/SarunMenon_CasualPhoto.jpg" alt="profile-pic" title="Sarun Menon"
                className={`profile-pic`} />
            <h3 className="profile-title m-0">
                Certified AEM Fullstack Developer
            </h3>
            <p className="profile-description m-0 text-center">
                Accomplished AEM full stack developer who enjoys crafting fast, scalable, SEO-friendly experiences for enterprise products, often stepping in as the go-to tech lead for a 20-member team to ship complex features without drama, and a bit obsessed with automation and performance—whether that means spinning up thousands of pages in hours or nudging Lighthouse and Core Web Vitals scores steadily upward.
            </p>
            <ul className="profile-stats">
                <li className="align-items-center d-flex flex-row justify-content-between">
                    <div>Exprience</div>
                    <div>4 Years</div>
                </li>
                <li className="align-items-center d-flex flex-row justify-content-between">
                    <div>Projects</div>
                    <div>4+</div>
                </li>
                <li className="align-items-center d-flex flex-row justify-content-between">
                    <div>Specialisation</div>
                    <div>Full stack developer</div>
                </li>
                <li className="align-items-center d-flex flex-row justify-content-between">
                    <div>Location</div>
                    <div>Pune</div>
                </li>

            </ul>
        </div>
        <div onClick={togglePopup} className={`${popupOpneState ? 'd-block' : 'd-none'} overlay-bg position-fixed`}></div>
    </>
    );
    
}

export default Header;