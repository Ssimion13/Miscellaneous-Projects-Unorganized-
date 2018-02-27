import React, {Component} from "react";
import Buttons from "./Button/index.js"
import Grid from "./Grid/index.js"

class App extends Component {
  constructor(){
    super();
    this.state = {
      colorGrid: {
        one: "white",
        two: "white",
        three: "white",
        four: "white"
      }
    }

  }
  handleButtonOne(){
    this.setState((prevState) =>{
      return(
        this.colorGrid: {
            one: "black",
            two: "black",
            three: "black",
            four: "black"
          }
      )
    })
  }

  render(){
    return(
     <div>
       <Grid gridColors = {this.state.colorGrid} />
       <Buttons handleButtonOne = {this.handleButtonOne}
                handleButtonTwo = {this.handleButtonTwo}
                handleButtonThree = {this.handleButtonThree}
                handleButtonFour = {this.handleButtonFour}
                />
     </div>


    )
  }



}
export default App;
