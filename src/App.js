import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  alertFunction = () => {
    alert("now you know how to handle onclick event");
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.alertFunction}>
          Hello world!
        </button>
        <span>
          Number: 0 
        </span>
      </div>
    );
  }
}

export default App;
