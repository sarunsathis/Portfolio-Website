import "./styles.css"
function ColumnContainer(props) {
    return(
        <div className="column-cntr">
            {props.children}
        </div>
    )
    
}

export default ColumnContainer;