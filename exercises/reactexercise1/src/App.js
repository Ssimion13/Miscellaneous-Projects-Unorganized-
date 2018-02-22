import React, {Component} from "react";
import "./styles.css"


class App extends Component{
constructor(){
  super();
  this.state = {
  count: 0,
  };
  this.addOne = this.addOne.bind(this);
  this.subOne = this.subOne.bind(this);
  this.multiOne = this.multiOne.bind(this);
  this.divOne = this.divOne.bind(this);
}

addOne() {
  this.setState(prevState => {
    return {
      count: prevState.count + 1
    }
  });
}
subOne(){
  this.setState(prevState => {
    return {
      count: prevState.count - 1
    }
  });
}

multiOne(){
  this.setState(prevState => {
    return {
      count: Math.floor(prevState.count * 2)
    }
  });
}
divOne(){
  this.setState(prevState => {
    return {
      count: Math.floor(prevState.count / 2)
    }
  });
}




  render(){
      const numStyle = {};
      if(this.state.count === 0){
        numStyle.color = "Black";
      } else if(this.state.count > 0){
        numStyle.color = "Green";
      } else if(this.state.count < 0 ){
        numStyle.color = "Red";
      }
    return(
      <div className = "container">

     <button className = "buttons" onClick={this.addOne}> + </button>
     <button className = "buttons" onClick={this.subOne}> - </button>
        <div className = "counter" style={numStyle}> {this.state.count}</div>
     <button className = "buttons" onClick={this.multiOne}> * </button>
     <button className = "buttons" onClick={this.divOne}> / </button>
     </div>
    )
  }

}

export default App;
