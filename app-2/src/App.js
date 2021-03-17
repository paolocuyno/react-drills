import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(){
    super()
  this.state={
    arr:['tacos','pizza','food']
  };  

  this.updateArr=this.updateArr.bind(this);
  }
  updateArr(arr){

  }
  render(){
    return(
      <div>
        <h2> {this.state.arr[0]}</h2>
        <h2> {this.state.arr[1]}</h2>
        <h2> {this.state.arr[2]}</h2>

      </div>
    )
  }

  }

