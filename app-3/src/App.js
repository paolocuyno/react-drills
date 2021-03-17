import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(){
    super()
  
  this.state={
    filterString:'',
    list: ['ice cream','pizza','sushi','cookies','burgers']
  };
}
  handleChange(filter){
    this.setState({filterString:filter
  })
  }
  render(){
    let foodList=this.state.list
    .filter((elem,i)=>{
      return elem.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return (
    <div>
      <input onChange= {(e)=> this.handleChange(e.target.value)} type='text'/>
      {foodList}


    </div>

    )
  }
}
