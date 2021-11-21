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
                    <QuestionItem
                        number={index}
                        question={item.question}
                        options={item.options}
                    />

                ))}
            </div>
        </div>
        
    )
}

export default QuestionBank;