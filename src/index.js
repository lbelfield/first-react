import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// this is where the magic is...
// can only render one element. 
// So when you want multiple elements, you must wrap them in a parent element.
// This is what the App is...
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
