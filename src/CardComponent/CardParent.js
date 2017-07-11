import React, { Component } from 'react';
import Card from './Card';
import CardList from './CardList';
import Form from './Form';

class CardParent extends Component {

    state = {
        cardDataArray: [
            {
                name: "Paul O’Shannessy",
                avatar_url: "https://avatars2.githubusercontent.com/u/8445?v=3",
                company:"Facebook"
            },
            {
                name: "Ben Alpert",
                avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=3",
                company:"Facebook"
            }
        ]
    };

    
    // addNewCard is a function that takes in a Card type (name, avatar_url, company)
    // setState sets the state above, which holds the cardDataArray.
    // It then adds the card passed in to the cardDataArray
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cardDataArray: prevState.cardDataArray.concat(cardInfo)
        }));
    }

    render() {
        return(

            // passing the this.addNewCard is a function reference to the addNewCard function above. 
            // This allows Form to use the addNewCard() on its props.
            // So if the CardParent.js passes a function reference to the Form component, 
            // we can change the state of the CardParent.js in that function and the Form component will be able to invoke that function because it will be part of its props object.
            // So, pass the Form component a new prop and call it parentAddNewCardFunctionAttribute with its value set to the addNewCard reference. 
            // Note how this is just a reference to the function, we're not invoking the function here. 

            // the this.state.cardDataArray is a simple primitive value we pass to the CardList.
            // this will now exist on the props of Card.js as parentCardDataArrayAttribute.
            // Again, we can change this cardDataArray, as parentCardDataArrayAttribute is a reference.
            <div>
                <Form parentAddNewCardFunctionAttribute={this.addNewCard}/>
                <CardList parentCardDataArrayAttribute={this.state.cardDataArray}/>
            </div>
        );
    }
}

export default CardParent;
