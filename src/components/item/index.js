/* const Item = ({children}) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            {children}
        </a>
    )
}

export default Item; */

const Item = (props) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            {props.children}
        </a>
    )
}

export default Item;

/* const Item = (props) => {
    return(
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {props.texto}
    </a>
    )
} */