import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    componentDidMount() {
        console.log("mounted");
    }
    componentDidUpdate(previousProps, previousState, snapshot) {
        if (previousState.count !== this.state.count) console.log("count updated");

    }
    componentWillUnmount() {
        console.log("component unmounted");
    }
    render() {
        let { count, name } = this.state;
        return (
            <div className="container">
                <h1>{count}</h1>
                <h1>{name}</h1>
                <div className="all-buttons">
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}
