import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// this is my card list component
import CardListParent from './CardComponent/CardListParent';
import data from './CardComponent/data';

import GoButton from './FunctionComponentFeatures/GoButton';

import CounterButton from './ClassComponentFeatures/CounterButton';

import ComplexCounterParent from './ComplexComponent/ComplexCounterParent';


class App extends Component {
  render() {
    return (
      // CardListParent passes the data array (in CardComponent/data.js) to whoever wants it through props

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Very Basic React Playground</h2>
        </div>
      
        <div>
          { /* this is my CardList. Cards passes data into the props of the CardListParent */ }
          <CardListParent cards={data} /><br />

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
