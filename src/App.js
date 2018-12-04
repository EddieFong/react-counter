import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from "./components/CounterGroup.js";
import Input from "./components/Input.js";

class App extends Component {
  state = {size: 5}

  updateValue = (targetValue) => {
    // alert(targetValue)
    this.setState({size: targetValue})
  }
  render() {
    return (
      <div className="App">
        <Input size = {this.state.size}  updateValue = {this.updateValue}></Input>
        <CounterGroup key={Math.random()} size={parseInt(this.state.size)}></CounterGroup>
      </div>
    );
  }
}

export default App;
