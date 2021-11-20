import QuestionItem from '../question-item/question-item';
import './questions-bank.css';

const QuestionItems = [
    {
        question: 'Professor, como você define o nível de comprometimento da turma com as atividades de ensino de um modo geral?',
        type:"closed",
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]

    },
    {
        question: 'Professor, como você avalia o comportamento da turma nos  ambientes virtuais para aulas síncronas?',
        type:"closed",
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]
    },
    {
        question: 'Professor, como você avalia o comportamento da turma nos  ambientes virtuais para aulas síncronas?',
        type:"closed",
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]
    },
    {
        question: 'De um modo geral, como o professor avalia a turma em relação a execução das atividades propostas (lista de exercícios, trabalhos, leituras, provas, dentre outros',
        type:"closed",
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]
    },
    {
        question: 'Professor, como você define o nível de participação da turma nos horários de atendimento?',
        type:"closed",
        options: [
            {option: 'Muito Baixa'},
            {option: 'Baixa'},
            {option: 'Indiferente'},
            {option: 'Alto'},
        ]
    },
    
    // {
    //     question: 'Professor, como você define o nível de participação da turma nos horários de atendimento?',
    //     type:"opened"
    // },
]

function QuestionBank(){

    return(
        
        <div className="content">
            {QuestionItems.map((item, index) => (
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