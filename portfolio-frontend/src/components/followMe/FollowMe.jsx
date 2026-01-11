import "./styles.css"
import { socialData } from "./socialData.js"

function FollowMe() {
    return (
        <div className="follow-me-cntr">
            <h2 className="follow-me-title m-0">Follow Me</h2>
            <div className="social-icons-cntr d-flex flex-row gap-column-3 align-items-center">
                {socialData.map((social) => (
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <div className="d-flex flex-column" dangerouslySetInnerHTML={{__html: social.svgPath}} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FollowMe;
