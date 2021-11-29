import {useState} from "react";
import "./dropdown.css"
import data from "../../jsons/dropdown/class-council-modal.json"
import { useClassCouncilModal } from "../../context/class-council-modal-context";

function Dropdown() {
    const { isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal } = useClassCouncilModal();

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selectedItem}</div>
            {isActive &&(
            <div className="dropdown-content">
                {data.options.map(options => (
                    <div onClick={e => {
                        setSelectedItem(options.option)
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