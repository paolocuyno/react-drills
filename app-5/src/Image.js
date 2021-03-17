import React, {Component} from 'react';

export default class Image extends Component{
    constructor(){
        super()
    }
render(){
    return(
        <div>
          <img src={this.props.url}/>  
          <h2>404 ERROR</h2>
        </div>
    )
}
}