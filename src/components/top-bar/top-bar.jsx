import React, { useState } from 'react';
import './top-bar.css';
import user from '../../assets/coordenador.jpg'
import ModalClassCouncil from '../modal-class-council/modal-class-council';
import ModalQuestionsBank from '../modal-question-bank/modal-questions-bank'
import UserModal from '../user-modal/user-modal';
import { ClassCouncilModalProvider, useClassCouncilModal } from '../../context/class-council-modal-context';
import dataSource from '../../jsons/side-bar.json'

const TopBar = (props) => {
    const { isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal } = useClassCouncilModal();

    const {path} = props;   
    
    const data = dataSource.filter((item) => item.to === `/${path}`)
    
    const [userModal, setUserModal] = useState(false);

    const Toggle = () => setUserModal(!userModal); 

    return (
        <>
            <div className="top-bar-container">
                <div className="path">
                    <i class={data[0].iconClassName}></i>
                    <p>{data[0].name}</p>
                </div>
                <div className="top-bar-button">
                    <>
                        <button onClick={() => {setOpenModal(true)}}>Adicionar {path === "conselho_de_classe" ? " Conselho " : path === "banco_de_perguntas" ? "pergunta" : ""}</button>
                        {
                            openModal &&
                            (path === "conselho_de_classe" ? <ModalClassCouncil/> : path === "banco_de_perguntas" ? <ModalQuestionsBank/> : "")  
                        }
                    </>

                </div>
                <div className={`avatar ${userModal ? "active" : ""}`}>
                    <div className='clickUserButton' onClick={() => Toggle()}>
                        <img src={user} alt="user" />
                    </div>
                </div>
            
            </div>
            { userModal ? 
                <div className='userModalContainer'>
                    <UserModal show={userModal}/>
                </div> : null
            }        
        </>
   )
}

export default TopBar;