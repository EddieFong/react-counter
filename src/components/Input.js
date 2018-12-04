import React, { Component } from 'react'

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size,
        };

    }

    handleSubmit = () => {
        this.props.updateValue(this.refs.countInput.value)
    }

    render() {
        return (
            <div>
                Size:
                <input type="text" ref="countInput"/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
