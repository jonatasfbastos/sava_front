import QuestionItem from '../question-item/question-item';
import './questions-bank.css';
import data from "../../Jsons/question-bank.json"

const QuestionBank = () => {

    return (
        <div className="content">
            {data.map((item, index) => (
                <QuestionItem
                    number={index}
                    question={item.question}
                    options={item.options}
                />

            ))}
        </div>
    )
}

export default QuestionBank;