import './Name.css';

function Name(props) {
    return (
        <h4 className="txt-centered">{props.fnm}, {props.lnm}</h4>
    )
}

export default Name;