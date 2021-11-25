import "./dropdown.css"
import {useState} from "react";

function Dropdown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['1', '2', '3']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected}</div>
            {isActive &&(
            <div className="dropdown-content">
                {options.map(option => (
                    <div onClick={e => {
                        setSelected(option)
                        setIsActive(false)
                        }
                    } className="dropdown-itens"> {option} </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default Dropdown;