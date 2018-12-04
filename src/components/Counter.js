import React, { Component } from 'react'
import Number from "./Number.js"

export default class Counter extends Component {
    numberPlug1Function = () => {
        this.props.updateIndiv(1, this.props.id)
        this.props.onUpdate(1)
    }

    numberMinus1Function = () => {
        this.props.updateIndiv(-1, this.props.id)
        this.props.onUpdate(-1)
    }

    render() {
        return (
            <div>
                <button onClick={this.numberMinus1Function} >
                    -1
                </button>
                <span>
                    <Number></Number> {this.props.counterNum}
                </span>
                <button onClick={this.numberPlug1Function}>
                    +1
                </button>
            </div>
        )
    }
}
