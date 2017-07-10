import React, { Component } from 'react';
import Card from './Card';
import data from './data';

const CardListParent = (props) => {

    return(
        // App.js passes the data array (data.js) into this class via the props. We can access by props.cards       
        // what we need here is to map this array of objects into an array of Card components 
        // this is like a mapper class for Domain to DataContract 
        // the map operator handles this
        // {...card} is a spread operator. 
        //  This makes all the properties of the card object available as props in the Card component, and our data will render exactly as we want it.
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

export default CardListParent;