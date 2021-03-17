import React, { Component } from "react";

export default class Logon extends Component{
    constructor(){
        super();
    
    this.state={
        user:'',
        pass:''
    };
    this.handleLogin =this.handleLogin.bind(this);
}
    handleUsernameChange(val){
        this.setState({user: val})
    };
    handlePasswordChange(val){
        this.setState({pass:val})
    };
   handleLogin(){
       alert(`Username: ${this.state.user} Pass: ${this.state.pass}`)
   };

    render(){
        return(
        <div>
            <input onChange={e=>this.handleUsernameChange(e.target.value)}/>
            <input onChange={e=> this.handlePasswordChange(e.target.value)}/>
            <button onClick={this.handleLogin}>Login</button>
        </div>

        )
    }
    
}
