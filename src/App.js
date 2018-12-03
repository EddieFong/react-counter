import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter.js";

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Counter defaultNum = {0} size ={5}></Counter>
      </div>
    );
  }
}

export default App;
