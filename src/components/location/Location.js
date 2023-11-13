import './Location.css';

function Location(props) {
    return (
        <h5 className="txt-centered">{props.college}, {props.city}</h5>
    )
}

export default Location;