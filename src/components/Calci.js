import React from "react";

class Calci extends React.Component {
    constructor(){
        super();
        this.state={
            expression:''
        }
    }
    val(){
        try{
            this.setState({
                expression:eval(this.state.expression)
            });
        } catch(err){
            // var t=1;
            setTimeout(()=>{
                this.setState({
                    expression:"error"
                })
            }, 10);
            setTimeout(()=>{
                this.setState({
                    expression:""
                })
            }, 2000);
            // setInterval(()=>{
            //     if(t===2){
            //         this.setState({
            //             expression:""
            //         })
            //         t++;
            //     }
            //     else if(t===1){
            //         this.setState({
            //             expression:"error"
            //         })
            //         t++;
            //     }
            //     else{
            //         this.setState({
            //             expression:this.state.expression
            //         })
            //     }
            // }, 2000)
        }
    }
    render() {
        return(
            <React.Fragment>
                <h2>Calculator</h2>
                <textarea name="cali" id="calci" cols="25" rows="3" value={this.state.expression}></textarea>
                <br />

                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:""})}>C</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.val()}>=</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>{this.setState({expression:this.state.expression+"0"});console.log(this.state.expression)}}>0</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"/"})}>/</button>

                <br />
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"7"})}>7</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"8"})}>8</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"9"})}>9</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"*"})}>X</button>
                <br />
                
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"4"})}>4</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"5"})}>5</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"6"})}>6</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"-"})}>--</button>
                <br />

                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"1"})}>1</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"2"})}>2</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"3"})}>3</button>
                <button style={{"padding":"20px", "margin":"2px"}} onClick={()=>this.setState({expression:this.state.expression+"+"})}>+</button>
                
            </React.Fragment>
        )
    }
}


export default Calci;