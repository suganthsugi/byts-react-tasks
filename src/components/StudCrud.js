import React from 'react'

class StudCrud extends React.Component{
    constructor(){
        super();

        this.state={
            name:"",
            rno:"",
            age:"",
            mark:"",
            address:"",
            need:"",
            updateneed:"",
            updatebtn:"",
            updateChoice:"",
            upname:"",
            upage:"",
            res:<></>,
            studs:[]
        }
        
    }
    save(){
        var tstuds = this.state.studs;
        tstuds.push({
            name:this.state.name,
            age:this.state.age,
            rno:this.state.rno,
            mark:this.state.mark,
            address:this.state.address
        })
        this.setState({
            studs:tstuds
        })
        console.log(this.state.studs);
    }
    delStud(val){
        var ind = this.state.studs.findIndex((obj)=>obj.rno===val)
        this.state.studs.splice(ind, ind);
       this.setState({
        studs:this.state.studs
       })
    }
    disp(){
        return this.state.studs.map((val)=>
        <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.rno}</td>
            <td><button onClick={()=>this.delStud(val.rno)}>Del</button></td>
        </tr>);
        
    }
    search(){
        console.log(this.state.need)
        var q=this.state.studs.find((obj)=>obj.rno===this.state.need)
        if(q===undefined){
            this.setState({
                res:"not found"
            });
            return;
        }
        console.log(q);
        // var tres=`name:${q.name}\nrno:${q.rno}\nage:${q.age}\nmark:${q.mark}\naddress:${q.address}`
        const restable = (
            <center>
                <table style={{ display: "inline-block" }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll no</th>
                        <th>Age</th>
                        <th>Mark</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{q.name}</td>
                        <td>{q.rno}</td>
                        <td>{q.age}</td>
                        <td>{q.mark}</td>
                        <td>{q.address}</td>
                    </tr>
                    </tbody>
                </table>
            </center>
        )
        console.log(restable);
        this.setState({
            res:restable
        })
        // this.setState({
        //     res:"asdguaysdgv"
        // })
        // this.setState({res:<p>{q.name+" "+q.age}</p>})
    }
    updateName(){
        for (let i = 0; i < this.state.studs.length; i++) {
            if(this.state.studs[i].rno===this.state.updateneed){
                var ts=this.state.studs
                ts[i].name=this.state.upname;
                this.setState({
                    studs:ts
                });
            }
        }
    }
    updateAge(){
        for (let i = 0; i < this.state.studs.length; i++) {
            if(this.state.studs[i].rno===this.state.updateneed){
                var ts=this.state.studs
                ts[i].age=this.state.upage;
                this.setState({
                    studs:ts
                });
            }
        }
    }
    showUBY(choice){
        if(choice===1){
            this.setState({
                updateChoice:(
                    <>
                    <input type="text" name="uname" id="uname" onChange={(e)=>this.setState({upname:e.target.value})}/><button onClick={()=>this.updateName()}>Update Name</button>
                    </>
                )
            })
        }
        if(choice===2){
            this.setState({
                updateChoice:(
                    <>
                    <input type="text" name="uname" id="uname" onChange={(e)=>this.setState({upage:e.target.value})}/><button onClick={()=>this.updateAge()}>Update Age</button>
                    </>
                )
            })
        }
    }
    canshow(){
        var q=this.state.studs.find((obj)=>obj.rno===this.state.updateneed);
        if(q===undefined){
            this.setState({
                updatebtn:"not found"
            })
        }
        else{
            this.setState({
                updatebtn:(
                    <>
                    <button onClick={()=>this.showUBY(1)}>Name</button>
                    <button onClick={()=>this.showUBY(2)}>Age</button>
                    </>
                )
            })
        }
    }
    render(){
        return(
            <React.Fragment>
                <h2>Student CRUD</h2>
                <label htmlFor="name">Name : </label><input type="text" id="name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/><br /><br /> 
                <label htmlFor="age">Age  : </label><input type="text" id="age" onChange={(e)=>{this.setState({age:e.target.value})}} value={this.state.age}/><br /><br /> 
                <label htmlFor="rollno">Roll No : </label><input type="text" id="rollno" onChange={(e)=>{this.setState({rno:e.target.value})}} value={this.state.rno}/><br /><br /> 
                <label htmlFor="mark">Mark : </label><input type="text" id="mark" onChange={(e)=>{this.setState({mark:e.target.value})}} value={this.state.mark}/><br /><br /> 
                <label htmlFor="address">Address : </label><input type="text" id="address" onChange={(e)=>{this.setState({address:e.target.value})}} value={this.state.address}/><br /><br /> 
                <button onClick={()=>this.save()}>Submit</button> <button onClick={(e)=>{this.setState({name:"", rno:"", age:"", mark:"", address:""})}}>Clear</button>
                <br /><br />
                <center>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Roll no.</th>
                            <th>Delete</th>
                        </tr>
                        <br />
                        {this.disp()}
                    </tbody>
                </table>
                </center>
                <br /><br />
                <h3>Search by rollno</h3>
                <label htmlFor="scr"></label>
                <input type="text" id="scr" onChange={(e)=>{this.setState({need:e.target.value})}} value={this.state.need}/>
                <button onClick={()=>this.search()}>Search</button>
                <br /><br />
                {this.state.res}

                <br /><br />
                <h3>Update User</h3>
                <input type="text" id="scr" onChange={(e)=>{this.setState({updateneed:e.target.value})}} value={this.state.updateneed}/>
                <button onClick={()=>this.canshow()}>Update</button>
                <br /><br />
                {this.state.updatebtn}
                <br /><br />
                {this.state.updateChoice}
            </React.Fragment>
        );
    }
}

export default StudCrud;