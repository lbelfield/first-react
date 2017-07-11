import React, { Component } from 'react';
import './Card.css'
import axios from 'axios';

class Form extends Component {

    state = { userName: '' }  

    handleSubmit = (event) => {
        event.preventDefault();

        // axios is an ajax js library pulled in from npm
        // we get the url of the github api and set the input to the url
        // this will send a request to gitHub
        // note this axios is an async promise to get the data
        
        // In CardParent.js, we have the line:
        // <Form parentAddNewCardFunctionAttribute={this.addNewCard}/>
        // parentAddNewCardFunctionAttribute() is a function reference to the CardParent.js addNewCard()
        // This reference becomes a prop inside the Form component. 
        // We can access it with this.props.parentAddNewCardFunctionAttribute. 
        // This prop now holds a function, so we can invoke it and we'll pass the data that we get from the GitHub API as an argument here

        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(r => {
                this.props.parentAddNewCardFunctionAttribute(r.data);
                this.setState({ userName: '' });
            })
    };

    render() {

        // <form onSubmit={this.handleSubmit}> allows us to have a required field. 
        // note, we could have done an onclick() function on the button instead, but this wouldn't give us the required validation

        // when the state's userName is changed, we set the value of the input

        // when input is typed into box, onChange event triggers a new event, an inline function, which takes a parameter (event)
        // this sets the State of the class (note inside state, we have userName)
        // this updates the userName to the event's value.

        return(
            <form onSubmit={this.handleSubmit} className="Card-container">

                <input 
                    type="text" 
                    value={this.state.userName}
                    onChange={ (event) => this.setState({userName : event.target.value}) }
                    placeholder="Github username" 
                    required 
                />
                <button type="submit">Add card</button>
            </form>
        );
    }

}

export default Form;