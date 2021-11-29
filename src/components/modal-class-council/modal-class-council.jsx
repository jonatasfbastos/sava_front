import { useState } from 'react';
import QuestionItem from '../question-item/question-item';
import './modal-class-council.css';
import data from "../../jsons/question-bank.json"
import Dropdown from '../dropdown/dropdown';



const ModalClassCouncil = ({CloseModal}) => {
    const [selected, setSelected] = useState("");

    const dataTeacher = data.filter((item) => item.to ==="teacher" )
    console.log(dataTeacher)
    const dataStudent = data.filter((item) => item.to ==="student" )
    console.log(dataStudent)

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
            <div className="dropdown-container">
                <Dropdown selected={selected} setSelected={setSelected} type="class"/>
            </div>            
            <span id="questionnaire">Questionário • Professor:</span>
            <div className="modal-container-body" >
                <div className="questions-container" style={{overflowY: 'scroll', height: '300px'}}>
                    {dataTeacher.map((item, index) => (
                        <QuestionItem
                            number={item.id}
                            question={item.question}
                        />

                    ))}
                </div>
            </div>
            <span id="questionnaire">Questionário • Aluno:</span>
            <div className="modal-container-body">
                <div className="questions-container" style={{overflowY: 'scroll', height: '300px'}}>
                    {dataStudent.map((item, index) => (
                        <QuestionItem
                            number={item.id}
                            question={item.question}
                        />

                    ))}
                </div>
            </div>
            <div className="modal-container-bottom">
                <div className="body-button">       
                    <button>Banco de Perguntas</button>
                </div>
                <div className="bot-button">
                    <button id="cancel" onClick={() => {CloseModal(false)}}> Cancelar </button>
                    <button id="register" > Cadastrar </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ModalClassCouncil;