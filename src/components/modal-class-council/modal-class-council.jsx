import { useState } from 'react';
import QuestionItem from '../question-item/question-item';
import './modal-class-council.css';
import data from "../../jsons/question-bank.json"
import Dropdown from '../dropdown/dropdown';



const ModalClassCouncil = ({CloseModal}) => {
    const [selected, setSelected] = useState("");
    return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="modal-top">
                <div className="modal-title">
                    <span>Novo Conselho</span>
                </div>
                <div className="close-buttom">
                    <i onClick={() => {CloseModal(false)}} class="bi bi-x"></i>
                </div>
            </div>
            <Dropdown selected={selected} setSelected={setSelected} type="class"/>
            <span id="questionnaire">Questionário:</span>
            <div className="modal-container-body">
                <div className="questions-container">
                    {data.map((item, index) => (
                        <QuestionItem
                            number={index}
                            question={item.question}
                        />

                    ))}
                </div>
                <div className="body-button">       
                    <button>Banco de Perguntas</button>
                </div>
            </div>
            <div className="modal-container-bottom">
                <button id="cancel" onClick={() => {CloseModal(false)}}> Cancelar </button>
                <button id="register" > Cadastrar </button>
            </div>
        </div>
    </div>
    )
}

export default ModalClassCouncil;