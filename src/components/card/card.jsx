import React from 'react';

import './card.css';

import CardItem from '../card-item/card-item';

import data from '../../jsons/class-council.json'

const Card = () => {

	return (
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


		
}
export default Card;