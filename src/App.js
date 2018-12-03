import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
state= {number: this.props.defaultNum}

  alertFunction = () => {
    alert("now you know how to handle onclick event");
  }

  numberFunction = () => {
     this.setState({number: this.props.newFunction(this.state.number)})
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.numberFunction} >
          Hello world!
        </button>
        <button onClick = {this.numberFunction}>
          +1
        </button>
        <span>
          Number: {this.state.number}
        </span>
      </div>
    );
  }
}

export default App;
