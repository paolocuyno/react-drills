import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

export default class App extends Component{
  constructor(){
    super()

    this.state={
      list: [];
      input:""
    }
  };
  this.handleAdd=this.handleAdd.bind(this);
  handleInputChange(value){
    this.setState({input:value});  
  }
  handleAdd(){
    this.setState({
      list:[..this.state.list,this.state.input],
      input:''
    });
  }
  render()
  let list=this.state.list.map((element,index)=>{
    return<Todo key
  }
  
  )
return(
<>  
<TodoList/>
<input type="text"/>
<button> Add Todo</button>
</>
)

export default App;
