import React, { Component } from 'react'
import Counter from "./Counter.js";

export default class CounterGroup extends Component {

    constructor(props){
        super(props)
        let defaultNum = 1
        this.state = {
            defaultNum: defaultNum,
            sum: defaultNum * this.props.size,
            numberArray: new Array(this.props.size).fill(0).map(() => {
                return {
                    id: Math.random()*1000,
                    countNum: defaultNum
                }
            }),
        }
    }

    updateSum = (d) => {
        this.setState({
            sum: this.state.sum + d,
        });
    }

    updateIndiv = (d, id) => {
        let newCounters = this.state.numberArray.map((item) => {
            if (id === item.id){
                return {
                    id: item.id,
                    countNum: item.countNum + d
                }
            } else {
                return item
            }
        })
        this.setState({numberArray: newCounters})
    }
  render() {
    return (
        <div>{
            this.state.numberArray.map((item,i) => (
                <Counter 
                    key = {i} 
                    onUpdate = {this.updateSum} 
                    defaultNum = {this.state.defaultNum}
                    updateIndiv = {this.updateIndiv}
                    counterNum = {item.countNum}
                    id = {item.id}
                ></Counter>)
            )
            }
          sum = {this.state.sum}
      </div>
      
    )
  }
}
