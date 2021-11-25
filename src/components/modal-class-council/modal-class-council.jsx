import { useState, useEffect } from 'react';
import './modal-class-council.css';


const ModalClassCouncil = ({CloseModal}) => {
    return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="modal-top">
                <div className="modal-title">
                    <span>Novo Conselho</span>
                </div>
                <div className="close-buttom">
                    <i onClick={() => {CloseModal(false)}} class="bi bi-x-circle"></i>
                </div>
            </div>
            
            <div className="modal-container-body">
                <p>GOGO</p>
            </div>
            <div className="modal-container-bottom">
                <button onClick={() => {CloseModal(false)}}> Cancelar </button>
                <button> Continuar </button>
            </div>
        </div>
    </div>
    )
}

// const ModalClassCouncil = (props) => {
    
//     return (
//         <div className="modal-container">
//             <p>skhvkjclkxcjvhbvjskasdjfh</p>
//             <div className="modal-footer">
//             <button onClick={props.onClose} className="button">
//               Close
//             </button>
//           </div>
//         </div>
//     )
// }

export default ModalClassCouncil;