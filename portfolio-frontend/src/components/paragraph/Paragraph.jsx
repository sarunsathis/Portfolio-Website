import "./styles.css";

function Paragraph(props) {
    return (
        <section className="paragraph-section">
            {props.children}

            <div className="button-cntr">
                {
                    props.buttonText != null && props.buttonText != undefined  && props.buttonText != "" ?
                        <button className="paragraph-button">{props.buttonText}</button> : null
                }
                {
                    props.secondaryButtonText != null && props.secondaryButtonText != undefined  && props.secondaryButtonText != "" ?
                    <button className="paragraph-button-secondary">{props.secondaryButtonText}</button> : null
                    }
            </div>
        </section>
    );
}

export default Paragraph;