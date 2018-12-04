import React, { Component } from 'react'
import Counter from "./Counter.js";

export default class CounterGroup extends Component {

    // constructor(){
    //     super()
    //     alert(this.state)
    // }

    state = {
        defaultNum: 0,
        sum: 0 * this.props.size,
        numberArray: new Array(this.props.size).fill({})
    }

    updateSum = (d) => {
        this.setState({sum:this.state.sum + d});
    }

  render() {
    return (
      <div>
          {this.state.numberArray.map((_,i) => (<Counter key = {i} onUpdate = {this.updateSum} defaultNum = {this.state.defaultNum}></Counter>))}
          sum = {this.state.sum}
      </div>
      
    )
  }
}
