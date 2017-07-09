import React, { Component } from 'react';
import ComplexCounterButton from './ComplexCounterButton';
import Result from './Result';

class ComplexCounterParent extends Component {

    state = { counter: 0 };

    incrementCounter = () => {

        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <div>
                <ComplexCounterButton myParentOnClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

export default ComplexCounterParent;