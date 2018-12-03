import React, { Component } from 'react'
import Counter from "./Counter.js";

export default class CounterGroup extends Component {
  render() {
    return (
      <Counter defaultNum = {0}></Counter>
    )
  }
}
