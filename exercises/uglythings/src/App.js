import React, {Component} from 'react';
import {connect} from "react-redux";
import {increment} from "./redux";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameList: [],
      value: ''
    
    }
    this.handleChange = this.handleChange.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this);
   
  }
  
  handleSubmit(e){
        e.preventDefault();
    let localstate = {
      nameList: [...this.state.nameList,
      this.state.value]
    }
    console.log(localstate)
    this.setState(localstate);
  };


  handleChange(e){
    console.log(e.target.value);
      this.setState({
        "value": e.target.value
      })
    }
  
  
  render(){
  return(
      <div>
      <div>
        <form>
          <input value={this.state.value} onChange={this.handleChange}/> Name
            <br/>
          <input/> Description
            <br/> 
          <input/> Link Url
            <br/> 
        </form>
        
        <button onClick = {this.changeName}>FUCK YOU</button>
        <button onClick = {this.props.increment}> increment </button>
        <button onClick = {this.handleSubmit}> submit </button>
        {this.state.nameList.map((nameList,index) => {
          return (<li key={nameList + index}> {nameList} </li> )}
        )}
      </div>
      {this.props.counter}
      {this.props.namer}
      </div>
    )
}
}

export default connect(state => state, {increment}) (App)
