import React, { Component } from 'react';
import ComplexCounterButton from './ComplexCounterButton';
import Result from './Result';

// note: this whole class is like two-way binding in ng
// raise an event, output on screen.
class ComplexCounterParent extends Component {

    // classes hold state
    state = { counter: 0 };

    // incrementCounter acts as a prototype function on the CounterButton Class
    // incrementCounter is an eventHandler, as it is set by onClick attribute in JSX
    incrementCounter = () => {

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
            // ComplexCounterButton
            // the whole point of myParentOnClickFunction is to give ComplexCounterButton access to the incrementCounter function via props.

            // Result
            // This result will output the counter under the button
            // this gives the Result.js access to state.counter via props.
            <div>
                <ComplexCounterButton myParentOnClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

export default ComplexCounterParent;