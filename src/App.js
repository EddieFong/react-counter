import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from "./components/CounterGroup.js";

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <CounterGroup size ={5}></CounterGroup>
      </div>
    );
  }
}

export default App;
