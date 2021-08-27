import React, { Component } from 'react'

export default class HoverC extends Component {
    state = {
        count : 0,
    };

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1}));
    }


    render() {
        const { count } = this.state;
        return (
            <div>
                <h1 onMouseUp={this.incrementCount}>
                Hovered1 { count } times
                </h1>
            </div>
        )
    }
}
