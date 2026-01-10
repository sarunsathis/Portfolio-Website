import { workExData } from './workExData.js';
import './styles.css';

function WorkEx(props) {

    return (
        <>
        <section className={`work-experience-section d-flex flex-column align-items-center`}>
            <h2 className='col-12 m-0 section-title'>Work Experience</h2>
            <p className='col-12 m-0 mb-16 section-desc'>My professional journey and career milestones</p>
            <div className="workEx-cntr col-12">
                {
                    workExData.map((workEx, index) => (
                        <div key={index} className="work-experience-card col-12 d-flex flex-column mb-4 p-3">
                            <div className="work-experience-card-header d-flex align-items-center col-12 mb-8">
                                <div className='logo-cntr'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase w-6 h-6 text-blue-400" data-fg-dael12="44.97:44.7083:/components/WorkExperience.tsx:92:23:3959:47:e:Briefcase::::::BYhm"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                                </div>
                                <div className='workEx-title-header col-9'>
                                    <h3 className='m-0 mb-8 fs-24'>{workEx.role}</h3>
                                    <p className='work-experience-location m-0 d-flex flex-row gap-column-2'>
                                        <span className='m-0 company'>{workEx.company}, </span>
                                        <span className='m-0'>{workEx.location}</span>
                                    </p>
                                </div>
                                <div className='workEx-duration text-end'>
                                    <span>{workEx.duration}</span>
                                </div>
                            </div>
                            <p className='description m-0'> {workEx.description || "Some Description of achievement from JS"}</p>
                            <div className='workEx-desc-cntr d-flex flex-row gap-column-2 col-12'>
                                <div className='icon-cntr'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-4 h-4 text-green-400" data-fg-dael33="44.97:44.7083:/components/WorkExperience.tsx:124:19:5385:49:e:TrendingUp::::::D6b0"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                </div>
                                <p className='m-0'>Key Achievements</p>
                            </div>
                            
                            <ul className="workEx-res m-0">
                                {workEx.responsibilities.map((responsibility, rIndex) => (
                                    <li key={rIndex}>{responsibility}</li>
                                ))}
                            </ul>
                            <ul className="work-experience-keyPoints">
                                {workEx.keyPoints.map((point, pIndex) => (
                                    <li key={pIndex}>{point}</li> 
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    )
    
}

export default WorkEx;