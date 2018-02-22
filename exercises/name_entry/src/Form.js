import React, {Component} from "react";



 class Form extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      person: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(e){
  //e is event
  //e.target is the entire form
 e.preventDefault();
 this.setState({
   ["name"]: ""
 })
};

handleChange(e){
  console.log(e.target.value);
  this.setState({
    ["name"]: e.target.value
  })

}


  render(){
    return(
    <div>
      <h1> {this.state.name} </h1>
      <form name = "form" onSubmit = {this.handleSubmit}>
        <input onChange = {this.handleChange}/>
        <button> Submit </button>
      </form>
    </div>
  )
}
}


export default Form;
