import QuestionItem from '../question-item/question-item';
import './questions-bank.css';
import data from "../../jsons/question-bank.json"

const QuestionBank = () => {

    return (
        <div>
            <div className="drop-down-container">
                <div className="drop-down">
                </div>
            </div>
            <div className="content">
                {data.map((item, index) => (
                    <div className="container-item">
                        <QuestionItem
                            number={index}
                            question={item.question}
                            options={item.options}
                            toAnswer={true}
                        />
                    </div>

                ))}
            </div>
        </div>
        
    )
}

export default QuestionBank;