import React, {Component} from "react";
import {Link} from "react-router-dom"
import axios from 'axios'

class DadJokes extends Component {
  constructor(){
    super();
    this.state = {
    }
    this.newJoke = this.newJoke.bind(this);
    this.addJoke = this.addJoke.bind(this)
  }
  componentDidMount(){
    axios.get("https://icanhazdadjoke.com", { headers: { "Accept": "application/JSON" } }).then(response => {
      console.log(response.data);
      var question = "";
      var answer = "";
      if(response.data.joke.indexOf("?") !== -1) {
       question = response.data.joke.substring(0, response.data.joke.indexOf("?") + 1)
       answer = response.data.joke.substring(response.data.joke.indexOf("?") + 2, response.data.joke.length)
    } else {
       question = response.data.joke;
    }
      this.setState({ 
        question: question,
        answer: answer
      })
    })
  }
  
  newJoke(){
    axios.get("https://icanhazdadjoke.com", { headers: { "Accept": "application/JSON" } }).then(response => {
      var question = "";
      var answer = "";
      if(response.data.joke.indexOf("?") !== -1) {
       question = response.data.joke.substring(0, response.data.joke.indexOf("?") + 1)
       answer = response.data.joke.substring(response.data.joke.indexOf("?") + 2, response.data.joke.length)
    } else {
       question = response.data.joke;
    }
      this.setState({ 
        question: question,
        answer: answer
      })
    })
  }
  
  addJoke(question, answer){
    var inputJoke = {
      URL: question + " " + answer
    }
    axios.post('/jokes', inputJoke).then(response =>{
      console.log(response.data);
    })
    this.setState({
      question: "",
      answer: ""
    })
    this.newJoke();
  }

  render() {


    return (
      <div className="dadHome">
        <div className = "dadQuestionDiv">
          <h2 className = "dadQuestion"> {this.state.question} </h2>
          </div>
        <div className= "dadAnswerDiv">
          <h2 className="dadAnswer"> {this.state.answer} </h2>
        </div>
        <div className='dadButtonDiv'>
          <button className="dadButton" onClick={()=> this.newJoke()}> Give me another joke! </button>
          <button className="dadButton" onClick={()=> this.addJoke(this.state.question, this.state.answer)}> Add this to my collection of Dad Jokes! </button>
          <Link className="link" to="/dadJokeFavs"> Your Favorite Jokes </Link>
        </div>
      </div>
  )

}
}

export default DadJokes;
