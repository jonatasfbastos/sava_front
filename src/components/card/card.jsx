import React, { Component } from 'react';
import './card.css';
import CardItem from '../card-item/card-item';

const cardItems = [
  {
      subject: "Informática",
      classYear: "3º Ano A",
      status: "Fechado",
      quarter: "2020.3"
  },
  {
      subject: "Biocombustíveis",
      classYear: "2º Ano A",
      status: "Fechado",
      quarter: "2020.3"
  },
  {
      subject: "Eletromecânica",
      classYear: "3º Ano B",
      status: "Fechado",
      quarter: "2020.3"
  }
]

const Card = () => {

    return (
            <div className='cards-container'>
                {cardItems.map((cardItem,index)=>(
                  <CardItem
                    key={index}
                    subject={cardItem.subject}
                    classYear={cardItem.classYear}
                    status={cardItem.status}
                    quarter={cardItem.quarter}
                  />      

                ))}
            </div>  
        )


    
}
export default Card;