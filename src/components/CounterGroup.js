import React, { Component } from 'react'
import Counter from "./Counter.js";

export default class CounterGroup extends Component {

    constructor(props){
        super(props)
        let defaultNum = 1
        this.state = {
            defaultNum: defaultNum,
            sum: defaultNum * this.props.size,
            numberArray: new Array(this.props.size).fill({})
        }
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
