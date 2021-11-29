import './question-item.css';

const QuestionItem = (props) => {

    const {question , options, number, type, toAnswer} = props;

    return (
        <div className="question">
            <p>
                {number}. {question}
            </p>
            { options && toAnswer? ( 
                <div className="options">
                    {   
                        options.map((item, index) => (
                            <div className="option">
                                <input type="radio" value={item.option} name={item.option}/>
                                {item.option}
                            </div>
                        ))
                    }
                </div> 
            ) : toAnswer ? 
                <div className="opened-question"> 
                    <textarea placeholder="Comente sua resposta ..." />
                </div>
            : null }
        </div>            
    )
}

export default QuestionItem;