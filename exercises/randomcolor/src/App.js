import React, { Component } from 'react';
import Color from "./Color";
import axios from "axios"



class App extends Component {
  constructor(){
    super();
    this.state = {
      color: "Red"
    }
    this.handleButtonOne = this.handleButtonOne.bind(this);
  }
  
 componentDidMount(){
    axios.get("http://www.colr.org/json/color/random").then((response)=>{
      this.setState({ color: "#" + response.data.colors[0].hex})
    });  
  }
  
  
  handleButtonOne(){
    axios.get("http://www.colr.org/json/color/random").then((response)=>{
               
      this.setState({ color: "#" + response.data.colors[0].hex});
    });
  }
  
  
  
  render(){
  
    return (
      <div>
      <Color color = {this.state.color} />
      <button   onClick={this.handleButtonOne}> I love this </button>
      </div>
    )
  }
}


export default App;
