import React, { Component } from 'react';

export class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            count:0
        }
    }
    inc1() {
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h3>Increment by 1</h3>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.inc1()}>Increment 1</button>
            </div>
        )
    }
}

export default Counter;