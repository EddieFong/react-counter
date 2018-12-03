import React, { Component } from 'react'
import Counter from "./Counter.js";

export default class CounterGroup extends Component {
    state = {
        sum: 0,
        numberArray: new Array(this.props.size).fill({})
    }
  render() {
    return (
      <div>
          {this.state.numberArray.map(() => (<Counter defaultNum = {0}></Counter>))}
      </div>
      
    )
  }
}
