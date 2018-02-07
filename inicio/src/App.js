import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter';

class App extends Component {
  render() {
    return (
        <div>
            <Counter initialCount={10} color="blue"/>
        </div>
    );
  }
}

export default App;
