import React, { useState } from 'react';
import './top-bar.css';
import user from '../../assets/coordenador.jpg'
import ModalClassCouncil from '../modal-class-council/modal-class-council';

import dataSource from '../../jsons/side-bar.json'

const TopBar = (props) => {

    const {path} = props;
    
    const data = dataSource.filter((item) => item.to === `/${path}`)
    console.log(data)
    const [OpenModal, setOpenModal] = useState(false);

    return (
        <div className="top-bar-container">
            <div className="path">
                <i class={data[0].iconClassName}></i>
                <p>{data[0].name}</p>
            </div>
            <div className="top-bar-button">
                <>
                    <button onClick={() => {setOpenModal(true)}}>Adicionar {path === "conselho_de_classe" ? " Conselho " : path === "banco_de_perguntas" ? "pergunta" : ""}</button>
                    {OpenModal && <ModalClassCouncil CloseModal={setOpenModal}/>}
                </>

            </div>
            <div className="avatar">
                <img src={user} alt="user" />
            </div>
        </div>
   )
}

export default TopBar;