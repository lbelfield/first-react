import React, { Component } from 'react';
import Card from './Card';

const CardList = (props) => {

    return(
        // CardParent.js passes the cardDataArray into this class via the props. 
        // We can access by props.parentCardDataArrayAttribute, as this is the attribute on the Form element.
        // what we need here is to map this array of objects into an array of Card components 
        // this is like a mapper class for Domain to DataContract 
        // the map operator handles this
        // {...card} is a spread operator. 
        //  This makes all the properties of the card object available as props in the Card component, and our data will render exactly as we want it.
        <div>
            {props.parentCardDataArrayAttribute.map(c => <Card key={c.id} {...c} />)}
        </div>
    );
}

export default CardList;