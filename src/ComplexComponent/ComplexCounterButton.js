import React, { Component } from 'react';

class ComplexCounterButton extends Component {

    render() {
        return (
            // onClick event raises myParentOnClickFunction function.
            // myParentOnClickFunction is a copy of incrementCounter function. 
            <div>
                <div>This is a shit hot counter button</div>
                <button onClick={this.props.myParentOnClickFunction} >
                    +1
                </button>
            </div>
        );
    }
}

export default ComplexCounterButton