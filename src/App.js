import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardParent from './CardComponent/CardParent';

import GoButton from './FunctionComponentFeatures/GoButton';

import CounterButton from './ClassComponentFeatures/CounterButton';

import ComplexCounterParent from './ComplexComponent/ComplexCounterParent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Very Basic React Playground</h2>
        </div>
      
        <div>
          { /* this is my CardParent */ }
          <CardParent /><br />

          { /* this is my go button*/ }
          <GoButton /><br />

          { /* this is my counter button*/ }
          <CounterButton /><br />
          
          { /* this is my complex counter button*/ }
          <ComplexCounterParent /><br />

        </div>
      </div>
    );
  }
}

export default App;
