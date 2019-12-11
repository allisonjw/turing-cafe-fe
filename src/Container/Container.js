import React from 'react';
import './Container.css';
import Card from '../Card/Card';

const Container = ({reservations}) => {
    let allReservations = reservations.map(res => {
        return (<Card
            key={res.id}
            id={res.id}
            name={res.name}
            date={res.date}
            time={res.time}
            number={res.number} 
        />)
    })
    return (
      <div className="resy_AllCards">
        {allReservations}
      </div>
    )
}

export default Container;