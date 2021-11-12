import './question-item.css';

const QuestionItem = (props) => {

    const {question, options} = props;

    return(
        
        <div className="container-item">
            <div className="question">
                <p>
                    {question}
                </p>

                {/* <div className="options">

                    {
                        options.map((item, index) => (
                            <p key={index}>{item} </p>
                            // <div className="option">
                            //     <input type="radio" value={`${item}`}    name={`${item}`}/> {item}
                            // </div>
                        ))
                    }
                </div> */}

                {/* <div className="options">
                    <div className="option">
                        <input type="radio" value="Muito Baixo" name="tMuitoBaixo"/> Muito Baixo
                    </div>

                    <div className="option">
                        <input type="radio" value="Baixo" name="tBaixo"/> Baixo
                    </div>

                    <div className="option">
                        <input type="radio" value="Indiferente" name="tIndiferente"/> Indiferente
                    </div>

                    <div className="option">
                        <input type="radio" value="Alto" name="tAlto"/> Alto
                    </div>

                </div> */}
            </div>
        </div>
            
    )
}

export default QuestionItem;