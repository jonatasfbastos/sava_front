import QuestionItem from '../question-item/question-item';
import './questions-bank.css';

const QuestionItems = [
    {
        question: 'Professor, como você define o nível de comprometimento da turma com as atividades de ensino de um modo geral?',
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]

    },
    {
        question: 'Professor, como você avalia o comportamento da turma nos  ambientes virtuais para aulas síncronas?',
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]
    },
]

function QuestionBank(){

    return(
        
        <div className="content">
            {QuestionItems.map((item, index) => (
                <QuestionItem
                    key={index}
                    question={item.question}
                    options={item.options}
                />

            ))}
        </div>
    )
}

export default QuestionBank;