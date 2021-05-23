import React from 'react';

import './card.component.css';
export const Card = (props)=>(
    <div className="card-container">
        <img alt="monster.jpg" src={`https://robohash.org/${props.monsters.id}?set=set3&size=180x180`} />
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
)