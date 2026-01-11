import "./styles.css";
import { projectListData } from "./projectListData.js";

function ProjectList(props) {

    return (
        <>
            <div className='project-list-section'>
                {
                    projectListData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-card-header">
                                {   project.img != "" && project.img != null && project.img != undefined ?
                                    <img src={`./src/assets/projectImg/${project.img}`} alt={project.title} 
                                        style={{ background: project.backgroundGradient }}
                                        className="project-image mb-3" width="48" height="48" /> : 
                                    <div className="project-image-placeholder"
                                        style={{ background: project.backgroundGradient }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-white" data-fg-djia12="44.96:44.4846:/components/Projects.tsx:75:21:3175:41:e:Github::::::DBGx"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </div>
                                    }
                                <h3 className="project-title mb-16 m-0">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>

                            <div className="project-card-footer">
                                <div className="tech-stack d-flex flex-row gap-column-3 mb-16">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="tech-item">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links d-flex gap-column-4">
                                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="git-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-4 h-4" data-fg-djia26="44.96:44.4846:/components/Projects.tsx:107:21:4618:30:e:Github::::::DBGx"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        Code
                                    </a>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4" data-fg-djia23="44.96:44.4846:/components/Projects.tsx:99:21:4213:36:e:ExternalLink::::::vz9"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default ProjectList;