import React, { Component } from 'react';
import './Card.css';

const Card = (props) => {
    return(
        // this uses the data from data.js to set the properties 
        <div className="Card-container">
            <img width="75" src= {props.avatar_url} />
            <div className="Person-details">
                <div className="Name-font">{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
}

export default Card;