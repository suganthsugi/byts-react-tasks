import React from "react";

class Counter5 extends React.Component{
    constructor(){
        super()

        this.state = {
            count:0
        }
    }

    inc=()=>{
        this.setState((prev)=>{
            return {count:prev.count+1}
        })
    }

    inc5=()=>{
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
    }

    render(){
        return(
            <div>
                <h3>Increment by 5</h3>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc5.bind(this)}>Increment 5</button>
            </div>
        )
    }
}

export default Counter5;