import React, { Component } from 'react'
import Counter from "./Counter.js";

export default class CounterGroup extends Component {

    constructor(props){
        super(props)
        let defaultNum = 1
        this.state = {
            defaultNum: defaultNum,
            sum: defaultNum * this.props.size,
            numberArray: new Array(this.props.size).fill(0),
            counterNum: 0,
        }
    }

    updateSum = (d) => {
        this.setState({
            defaultNum: this.state.defaultNum,
            counterNum: this.state.counterNum + d,
            sum:this.state.sum + d,
        });
    }

    updateIndiv = (d) => {
        this.setState({
            defaultNum: this.state.defaultNum,
            counterNum: this.state.counterNum + d,
            sum: this.state.sum,
        })
    }
  render() {
    let numberArray = new Array(this.props.size).fill(0)
    return (
        <div>{
            numberArray.map((_,i) => (
                <Counter 
                    key = {i} 
                    onUpdate = {this.updateSum} 
                    defaultNum = {this.state.defaultNum}
                    updateIndiv = {this.updateIndiv}
                    counterNum = {this.state.counterNum}
                ></Counter>)
            )
            }
          sum = {this.state.sum}
      </div>
      
    )
  }
}
