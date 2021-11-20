import React from 'react';
import Card from '../../components/card/card';
import TopBar from '../../components/top-bar/top-bar';

const ClassCouncil = () => {
    return <div className="container-class-council">
        <TopBar icon="bi bi-people" path="Conselho de Classe" typeButton="class-council"/>
        <div className="cards-container-class-council">
            <Card/>
        </div>
    </div>
}

export default ClassCouncil;