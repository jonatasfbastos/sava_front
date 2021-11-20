import React from 'react';
import './top-bar.css';
import user from '../../assets/coordenador.jpg'

const TopBar = (props) => {

    const {path, icon, typeButton} = props;

   return (
    <div className="top-bar-container">
        <div className="path">
            <i class={icon}></i>
            <p>{path}</p>
        </div>
        <div className="top-bar-button">
            {
                typeButton ?
                    <button>Adicionar {typeButton == "class-council" ? " Conselho " : typeButton == "question-bank" ? "banco de perguntas" : ""}</button>
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