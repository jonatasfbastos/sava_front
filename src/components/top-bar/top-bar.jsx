import React, { useState } from 'react';
import './top-bar.css';
import user from '../../assets/coordenador.jpg'
import ModalClassCouncil from '../modal-class-council/modal-class-council';

const TopBar = (props) => {

    const {path, icon, typeButton} = props;
    const [OpenModal, setOpenModal] = useState(false);

   return (
    <div className="top-bar-container">
        <div className="path">
            <i class={icon}></i>
            <p>{path}</p>
        </div>
        <div className="top-bar-button">
            {
                typeButton ?
                <>
                    <button onClick={() => {setOpenModal(true)}}>Adicionar {typeButton == "class-council" ? " Conselho " : typeButton == "question-bank" ? "banco de perguntas" : ""}</button>
                    {OpenModal && <ModalClassCouncil CloseModal={setOpenModal}/>}
                </>
                : null
            }
        </div>
        <div className="avatar">
            <img src={user} alt="user" />
        </div>
    </div>
   )
}

export default TopBar;