import react from "react";

import './class-council-card.css';

import CardItem from '../class-council-card-item/class-council-card-item';
import data from '../../jsons/class-council.json'

const ClassCouncilCard = () => (
    <div className='cards-container'>
        {data.map((cardItem,index)=>(
            <CardItem
                key={index}
                subject={cardItem.subject}
                classYear={cardItem.classYear}
                isOpened={cardItem.isOpened}
                quarter={cardItem.quarter}
            />      
        ))}
    </div>
)

export default ClassCouncilCard