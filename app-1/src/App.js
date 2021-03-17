import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{

constructor(){
  super()

this.state={
  message:''
};
this.handleChange=this.handleChange.bind(this)  
}  
handleChange(val){
  this.setState({message:val})
}
  render(){
    return (
      <div>
        <input class='message' onChange={ (e) => this.handleChange(e.target.value)} type='text'></input>
        <p>{this.state.message}</p>
      </div>
    )
  }

}




