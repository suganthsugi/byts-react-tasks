import React from "react";

class CurrencyConvertor extends React.Component {

    constructor(){
        super()

        this.state = {
            a1:1,
            a2:88,
            c1:'USD',
            c2:'IND',
            rate:{
                'IND-IND':1,
                'EURO-EURO':1,
                'USD-USD':1,
                'USD-IND':88,
                'IND-USD':1/88,
                'IND-EURO':87.67,
                'EURO-IND':1/87.67,
                'USD-EURO':1/1.06,
                'EURO-USD':1.06
            }
        }
    }
    con1(){
        const rate=this.state.rate[this.state.c1+'-'+this.state.c2];
        console.log(this.state.c1+'-'+this.state.c2, rate);
        this.setState({
            a2:this.state.a1*rate
        });
    }
    con2(){
        const rate=this.state.rate[this.state.c2+'-'+this.state.c1];
        console.log(rate);
        this.setState({
            a1:this.state.a2*rate
        });
    }
    render() {
        return(
            <>
            <h2>Currency Convertor</h2>
            <select name="c1" id="c1" value={this.state.c1} onChange={(e)=>this.setState({c1:e.target.value}, ()=>this.con1())}>
                <option value="IND">IND</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
            </select>
            <input type="number" name="a1" id="a1" value={this.state.a1} onChange={(e)=>this.setState({a1:e.target.value}, ()=>this.con1())}/>
            <br /><br />
            <select name="c2" id="c2" value={this.state.c2} onChange={(e)=>this.setState({c2:e.target.value}, ()=>this.con2())}>
                <option value="IND">IND</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
            </select>
            <input type="number" name="a2" id="a2" value={this.state.a2} onChange={(e)=>this.setState({a2:e.target.value}, ()=>this.con2())}/>
            </>
        )
    }
}

export default CurrencyConvertor;