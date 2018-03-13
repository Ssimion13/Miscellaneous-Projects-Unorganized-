import React, { Component } from 'react';
import axios from "axios";
import Navbar from "./Navbar"


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
  
  componentDidMount(){
    axios.get("/posts").then(response => {
      this.setState({posts: response.data})
      console.log(this.state)
    })
  }
  
  
  
  
  render() {
    
    return (
      <div className="App">
        <Navbar />
        <div className="Title" > ROCK THE VOTE </div>
      </div>
    );
  }
}

export default App;
