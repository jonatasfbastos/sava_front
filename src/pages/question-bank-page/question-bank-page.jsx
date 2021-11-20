import React from 'react';
import QuestionsBank from '../../components/questions-bank/questions-bank';
import TopBar from '../../components/top-bar/top-bar';

const QuestionBank = () => {
    return <div> 
        <TopBar icon="bi bi-question-circle" path="Banco de Perguntas" typeButton="question-bank"/>
        <QuestionsBank/>
    </div>
}

export default QuestionBank;