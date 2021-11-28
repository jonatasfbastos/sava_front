import {useState} from "react";
import "./dropdown.css"
import data from "../../jsons/dropdown/class-council-modal.json"

function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const {type, selected, setSelected} = props;
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected}</div>
            {isActive &&(
            <div className="dropdown-content">
                {data.options.map(options => (
                    <div onClick={e => {
                        setSelected(options.option)
                        setIsActive(false)
                        }
                    } className="dropdown-itens"> {options.option} </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default Dropdown;