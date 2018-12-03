import React, { Component } from 'react'
import Line from "./Line.js"
import Number from "./Number.js"

export default class CounterGroup extends Component {
    state = {
        number: this.props.defaultNum,
        numberArray: new Array(this.props.defaultNum).fill({})
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
                {this.state.numberArray.map(() => (<Line></Line>))}
            </div>
        )
    }
}
