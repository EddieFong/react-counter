import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Line from "./components/Line.js"
import Number from "./components/Number.js"

class App extends Component {
  
state= {
  number: this.props.defaultNum,
  numberArray: [{}]
}

  alertFunction = () => {
    alert("now you know how to handle onclick event");
  }

  numberFunction = () => {
     this.setState(
      {
        number: this.props.newFunction(this.state.number),
        numberArray: new Array(this.state.number).fill(0)
      }
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.numberFunction} >
          -1
        </button>
        <button onClick = {this.numberFunction}>
          +1
        </button>
        <span>
          <Number></Number> {this.state.number}
        </span>
        {this.state.numberArray.map(() => (<Line></Line>))}
      </div>
    );
  }
}

export default App;
