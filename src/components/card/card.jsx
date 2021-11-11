import React, { Component } from 'react';
import './card.css';
import CardItem from '../card-item/card-item';


const Card = () => {
    const vetor=[1,2,3,4]
    return (
            <div className='cards-container'>
                {vetor.map((index)=>(
                  <CardItem/>      

                ))}
            </div>  
        )


    
}
export default Card;