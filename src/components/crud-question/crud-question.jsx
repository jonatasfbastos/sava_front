import { useState } from 'react';

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
        <>
            <form>
                <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={question}/>
                <button type="submit" onClick={handleAddItemToList}><i class="bi bi-plus"></i></button>
            </form>
            <ul className="todo-list" >{itemsList.map(item => (<li>{item}</li> ))}</ul>
        </>
    )
}

export default CrudQuestion