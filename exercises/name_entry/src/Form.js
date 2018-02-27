import React, {Component} from "react";



 class Form extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      person: [ ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(e){
  //e is event
  //e.target is the entire form
 e.preventDefault();
 let localstate = {
   person: [...this.state.person,
   this.state.name
   ]
 }
 console.log(localstate)
 this.setState(localstate);
};

handleChange(e){
  console.log(e.target.value);
  this.setState({
    "name": e.target.value
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
      <div>
         <ul>
          {this.state.person.map((person, index) => {
            return (<li key={person + index}> {person} </li>)})}
         </ul>
      </div>
    </div>
  )
};
}


export default Form;
