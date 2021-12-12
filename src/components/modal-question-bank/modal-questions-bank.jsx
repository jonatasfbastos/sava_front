import { useState } from 'react';
import QuestionItem from '../question-item/question-item';
import './modal-questions-bank.css';
import data from "../../jsons/question-bank.json"
import Dropdown from '../dropdown/dropdown';
import { useClassCouncilModal } from '../../context/class-council-modal-context';
import dataQuestionsBank from "../../jsons/dropdown/questions-bank-modal.json"
import CrudQuestion from '../crud-question/crud-question';


const ModalQuestionsBank = () => {
    const { isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal } = useClassCouncilModal();

    return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="modal-container-superior" style={{overflowY: 'scroll', height: '100%'}}>
                <div className="modal-top">
                    <div className="modal-title">
                        <span>Nova Pergunta</span>
                    </div>
                    <div className="close-buttom" >
                        <i onClick={() => setOpenModal(false)} class="bi bi-x"></i>
                    </div>
                </div>

                <div className="dropdown-container">
                    <Dropdown type="class" data={dataQuestionsBank}/>
                </div>   

                <div className="questionnaire-conteiner">
                    <span id="questionnaire">Enunciado:</span>
                    <div className='question'>
                        <textarea placeholder="Nova pergunta ..." />
                    </div>   
                    {selectedItem === "Fechada" || selectedItem === "Mista" ? (
                        <>
                            <span id="questionnaire">Opções:</span>
                            <div className="modal-container-body" >
                                <div className="questions-container" style={{overflowY: 'scroll', height: '100%'}}>
                                    <CrudQuestion/>
                                </div>
                            </div> 
                        </>
                    ) : selectedItem === "Aberta"}    
                </div> 
            </div>
                <div className="modal-container-bottom">
                    <div className="container-buttons-bottom">  
                        <div className="body-button">       
                            <button>Banco de Perguntas</button>
                        </div>
                        <div className="bot-button">
                            <button id="cancel" onClick={() => {setOpenModal(false)}}> Cancelar </button>
                            <button id="register" > Cadastrar </button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default ModalQuestionsBank;