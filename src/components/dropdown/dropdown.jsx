import "./dropdown.css"
import {useState} from "react";

function Dropdown() {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
    return (
        <div className="DropDown">
            <div className="DropDownBtn" onClick={e => setIsActive(!isActive)}>Escolha um</div>
            {isActive &&(
            <div className="DropDownContent">
                <div className="DropDownItens"> 1 </div>
                <div className="DropDownItens"> 2 </div>
                <div className="DropDownItens"> 3 </div>
            </div>
            )}
        </div>
    );
}

export default Dropdown;