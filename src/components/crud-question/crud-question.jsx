import { useState } from 'react';
import './crud-question.css';


const CrudQuestion = () => {

    const [question, setQuestion] = useState("");
    const [itemsList, setItemsList] = useState([]);

    function handleChangeInput(event) {
        let inputQuestion = event.target.value;
        
        setQuestion(inputQuestion);        
    }

    function handleAddItemToList(event) {
        event.preventDefault();
        
        setItemsList([...itemsList, question]);
        setQuestion("");
    }

    return(
        <div className="questions-list-container"  >
            <form>
                <input type="text" placeholder="Adicionar opção" onChange={handleChangeInput} value={question}/>
                <i type="submit" onClick={handleAddItemToList} class="bi bi-plus-lg"></i>
            </form>
            <ul className="questions-list" >
                {itemsList.map( item => (
                    <div className="question-item-container">
                        <div className="question-item-left">
                            <input type="radio"/>
                            <li>{item}</li> 
                        </div>
                        <div className="question-item-right">        
                            <i class="bi bi-pencil-square"></i>
                            <i class="bi bi-x-lg"></i>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CrudQuestion