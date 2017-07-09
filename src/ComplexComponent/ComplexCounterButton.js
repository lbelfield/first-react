import React, { Component } from 'react';

class ComplexCounterButton extends Component {

    render() {
        return (
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