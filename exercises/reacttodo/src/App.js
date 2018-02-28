import React, {Component} from "react";
import axios from "axios";
import "./styles.css";
import DisplayData from "./DisplayData";
import FormContainer from "./FormContainer";


class App extends Component{
  constructor(){
    super();
    this.state = {
      toDoItems: []
    }
  /*  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); */
  }

  componentDidMount(){
    axios.get("https://api.vschool.io/ryan/todo").then((response)=>{
    this.setState({toDoItems: response.data})
    console.log(this.state.toDoItems);
  });
}


  /* handleChange(){
  };

  handleSubmit(){
    e.preventDefault;
  };
*/

  render(){

    return(
      <div>
      <FormContainer {...this.state}/>
        <DisplayData {...this.state}/>
      </div>
    )
  }


}

export default App;
