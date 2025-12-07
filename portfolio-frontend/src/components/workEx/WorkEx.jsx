import { workExData } from './workExData.js';

function WorkEx(props) {

    return (
        <>
        <section className={`work-experience-section col-12 d-flex flex-column align-items-center`}>
            {
                workExData.map((workEx, index) => (
                    <div key={index} className="work-experience-card col-10 d-flex flex-column mb-4 p-3">
                        <h2>{workEx.role} - {workEx.company}</h2>
                        <p className="work-experience-duration-location">{workEx.duration} | {workEx.location}</p>
                        <ul className="work-experience-responsibilities">
                            {workEx.responsibilities.map((responsibility, rIndex) => (
                                <li key={rIndex}>{responsibility}</li>
                            ))}
                        </ul>
                        <ul className="work-experience-keypoints-list">
                            {workEx.keyPoints.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li> 
                            ))}
                        </ul>
                    </div>
                ))
            }
        </section>
        </>
    )
    
}

export default WorkEx;