import React, { Component } from 'react'
import Number from "./Number.js"

export default class Counter extends Component {
    state = {
        number: this.props.defaultNum,
    }
    numberPlug1Function = () => {
        this.setState(
            {
                number: this.state.number + 1,
                numberArray: new Array(this.state.number).fill({})
            }
        )
    }

    numberMinus1Function = () => {
        this.setState(
            {
                number: this.state.number - 1,
                numberArray: new Array(this.state.number).fill({})
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.numberMinus1Function} >
                    -1
                </button>
                <button onClick={this.numberPlug1Function}>
                    +1
                </button>
                <span>
                    <Number></Number> {this.state.number}
                </span>
            </div>
        )
    }
}