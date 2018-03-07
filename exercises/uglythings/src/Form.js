import React, {Component} from "react";
import {actions} from "./redux/Functions";
import {connect} from "react-redux";
import FormComponent from "./FormComponent"




 class Form extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      description: "",
      linkURL: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleSubmit(e){
      //e is event
      //e.target is the entire form
     e.preventDefault();
     let name = this.state.name;
     let description = this.state.description;
     let linkURL = this.state.linkURL;
     let uglyObject = {
       name,
       description,
       linkURL
     }
     this.props.setName(uglyObject);
     console.log(this.props.uglyThings);

    };

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })

    }


  render(){
    const mappedUglyThings = this.props.uglyThings.map((x, i) => {
      return(
        <FormComponent key = {x + i} name = {x.name} description = {x.description} linkURL = {x.linkURL} />
      )
    })
    return(
      <div className = "body">

         <h1 class="title"> Ugly Things </h1>

        <div className = "formSheet">
          <form name = "form" onSubmit = {this.handleSubmit}>
            Name         <input name= "name" onChange = {this.handleChange}/>  <br/>
            Description  <input name="description" onChange = {this.handleChange} />    <br/>
            URL          <input name="linkURL" onChange = {this.handleChange} />
            <button> Submit </button>
          </form>
        </div>
        {mappedUglyThings}



      </div>
  )
};

}

export default connect(state => state, actions)(Form)
