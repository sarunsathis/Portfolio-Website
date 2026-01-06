import "./styles.css";

function Paragraph(props) {
    return (
        <section className="paragraph-section">
            {props.children}
            <div className="button-cntr">
                <button className="paragraph-button">{props.buttonText}</button>
                <button className="paragraph-button-secondary">{props.secondaryButtonText}</button>
            </div>
        </section>
    );
}

export default Paragraph;