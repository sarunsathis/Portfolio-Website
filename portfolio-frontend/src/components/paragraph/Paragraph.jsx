
function Paragraph(props) {
    return (
        <section className="paragraph-section">
            {props.children}
            <button className="paragraph-button">{props.buttonText}</button>
            <button className="paragraph-button-secondary">{props.secondaryButtonText}</button>
        </section>
    );
}

export default Paragraph;