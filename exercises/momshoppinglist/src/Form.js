import React, {Component} from "react";
import ItemsList from "./ItemsList"

class Form extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      nameList: []
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let localstate = {
      nameList: [...this.state.nameList ,
      this.state.name]
    }
    console.log(localstate)
    this.setState(localstate)
  }
  
  handleChange(e){
    console.log(e.target.value);
    this.setState({
      "name": e.target.value
    })
  }
  
  clearInput = () => {
  this.setState({ nameList: [] });
}
Delete = () => {
}

//add state and implementation stuff here.
//eg. onchange, handlechange, handlesubmit, etc.



  render(){

    return(
      <div>
      <div className =  "billy">
      <input onChange = {this.handleChange}/>
      <button onClick = {this.handleSubmit}> Submit </button>
      <button onClick = {this.clearInput}> Clear </button>
      </div>
      <ItemsList
      handleSubmit = {this.handleSubmit}
      handleChange = {this.handleChange}
      {...this.state}
      />
      </div>
  )
  };
}

export default Form;
