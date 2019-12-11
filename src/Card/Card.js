import React from 'react';
import './Card.css';

const Card = ({id, name, date, time, number, cancelReservation}) => {
    return (
        <div className="card">
          <h2 className="card_name">{name}</h2>
          <p className="card_date">{date}</p>
          <p className="card_time">{time} pm</p>
          <p className="number">Number of Guest:{number}</p>
          <button 
          className="card_btn"
          onClick={() => cancelReservation(id)}
          >Cancel</button>
        </div>
    )
}

export default Card;