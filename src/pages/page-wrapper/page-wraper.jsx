import React from 'react';
import ClassCouncilCard from '../../components/class-council-card/class-council-card';
import TopBar from '../../components/top-bar/top-bar';
import Footer from '../../components/footer/footer';
import SideBar from '../../components/side-bar/side-bar';
import Home from  '../home/home';


import './page-wraper.css'
import { useSideBar } from '../../context/side-bar-context';
import QuestionBank from '../../components/questions-bank/questions-bank';

function renderSwitch(param) {
    switch(param) {        
        case '':
            return <Home/> 
        case 'conselho_de_classe':
            return <ClassCouncilCard />;
        case 'banco_de_perguntas':
            return <QuestionBank />  
        default:
            return <ClassCouncilCard />;
    }
}

const PageWraper = ({ to }) => {
    const { inactive, setInactive } = useSideBar();

    return <> 
        <SideBar />
        <div className={`container${inactive ? " inactive" : ""} `}>
            <TopBar path={to}/>
            { renderSwitch(to) }
            <Footer/>
        </div>
    </>
}

export default PageWraper;