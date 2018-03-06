import React, {Component} from "react"
import Grid from "./Grid"


class App extends Component{
  constructor(){
    super();
    this.state = {
      colors: {
      square1: "Red",
      square2: "Red",
      square3: "Red",
      square4: "Red"
    }
    }
  this.handleButtonOne = this.handleButtonOne.bind(this)
  this.handleButtonTwo = this.handleButtonTwo.bind(this)
  }

  handleButtonOne(){
    let localstate = {};
    console.log(this.state);
    if(this.state.colors.square4 === "Red"){
     localstate = {
       square1: "Blue",
       square2: "Blue",
       square3: "Blue",
       square4: "Blue"
     }
    } else {
     localstate = {
       square1: "Red",
       square2: "Red",
       square3: "Red",
       square4: "Red"
    }
  }
    this.setState({colors:localstate});
    }

  handleButtonTwo(){
    let localstate = {
      square1: "Purple",
      square2: "Purple",
      square3: "Red",
      square4: "Red"WQQ
    }
    this.setState({colors:localstate});
  }

//create button, set to buttonone function. Check with juan to ensure that it flips between black and white. Or something.....

  render(){
      return(
          <div>
              <Grid colors = {this.state.colors}/>
              <button  onClick = {this.handleButtonOne}> Let the Bass Drop </button>
              <button onClick = {this.handleButtonTwo}> Let the Top Bass Drop </button>
          </div>
        )
    }
}

export default App;
