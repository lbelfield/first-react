import React, { Component } from 'react';

class CounterButton extends Component {
    // classes hold state
    state = { counter: 0 };

    // handleClick acts as a prototype function on the CounterButton Class
    // handleClick is an eventHandler, as it is set by onClick attribute in JSX
    myHandleClick = () => {

        // this === component instance to the DOM
        // setState is built in and sets the state of the CounterButton class
        // setState is an Asynchronous operation
        // takes a parameter, prevState to handle race conditions
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            // JSX
            // onClick event raises myHandleClick function
            <div>
                <div>Increment me</div>
                <button onClick={this.myHandleClick} >
                    {this.state.counter}
                </button>
            </ div>
        );
    }
}

export default CounterButton