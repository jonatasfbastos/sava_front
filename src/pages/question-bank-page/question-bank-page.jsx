import React from 'react';

import QuestionsBank from '../../components/questions-bank/questions-bank';
import TopBar from '../../components/top-bar/top-bar';
import Footer from '../../components/footer/footer'

const QuestionBank = () => {
    return <div className="question-bank-page"> 
        <TopBar icon="bi bi-question-circle" path="Banco de Perguntas" typeButton="question-bank"/>
        <QuestionsBank/>
        <Footer />
    </div>
}

export default QuestionBank;