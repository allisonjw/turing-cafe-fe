import React from 'react';
import './Card.css';

const Card = ({id, name, date, time, number}) => {
    return (
        <div className="card">
          <h2 className="card_name">{name}</h2>
          <p className="card_date">{date}</p>
          <p className="card_time">{time}</p>
          <p className="number">{number}</p>
        </div>
    )
}

export default Card;