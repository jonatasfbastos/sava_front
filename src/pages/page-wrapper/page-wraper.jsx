import React from 'react';
import ClassCouncilCard from '../../components/class-council-card/class-council-card';
import TopBar from '../../components/top-bar/top-bar';
import Footer from '../../components/footer/footer';
import SideBar from '../../components/side-bar/side-bar';
import Home from  '../home/home';
import data from '../../jsons/side-bar.json'

import {ClassCouncilModalProvider, useClassCouncilModal} from '../../context/class-council-modal-context'

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
    const { isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal } = useClassCouncilModal();

    return <> 
        <SideBar data={data}/>
        <div className={`container${inactive ? " inactive" : ""}`}>
            <div className={`${openModal ?  "isOpened" : "not"}`}> 
                <TopBar path={to}/>   
                    { renderSwitch(to) }
                <Footer/>
            </div> 
        </div>
    </>
}

export default PageWraper;