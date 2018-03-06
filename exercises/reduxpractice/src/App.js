import React, {Component} from 'react';
import {connect} from "react-redux";
import {addSecond} from "./redux ";

class App extends Component{
  constructor(){
    super();
    this.state = {
      intervalId: null,
      isRunning: false

    }
    this.start = this.start.bind(this);
    this,.stop = this.stop.bind(this);
  }
  start(){

    setInterval(this.props.addSecond ,1000);
    this.setState({
      isRunning: true

    })
  }


  stop(){
    clearInterval(this.state.intervalId);

  }











  render(){
    const containerStyles = {
      width: "100%",
      height: "100vh",
      marginTop: "60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  return (
    const startStopButton =   this.state.isRunning ?
    <button onClick = {this.props.stop}> stop </button>
    :
    <button onClick = {this.start}> start </button>



          <h1> {this.props.minutes} : {this.props.seconds} </h1>
    <div style={containerStyles}>

    <button onClick = {this.props.reset}> reset </button>

    </div>
  );
}
}
export default connect(state => state, {addSecond})(App);
