import React, { Component } from 'react';
import './Card.css';

const Card = (props) => {
    return(
        // this uses the cardDataArray from CardParent.js to set the properties. 
        // this is a card array holding the name, company and image.
        // This data gets passed in by the CardList, one by one.
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