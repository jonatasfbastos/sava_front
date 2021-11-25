import QuestionItem from '../question-item/question-item';
import './questions-bank.css';
import data from "../../jsons/question-bank.json"
import Dropdown from '../../components/dropdown/dropdown';

const QuestionBank = () => {

    return (
        <div>
            <div className="drop-down-container">
                <div className="drop-down">
                    <Dropdown/>
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