import React, {Component} from "react";
import axios from 'axios'

class DadJokes extends Component {
  constructor(){
    super();
    this.state = {
      joke: {}
    }
  }
  componentDidMount(){
    axios.get(axios.get("https://icanhazdadjoke.com", { headers: { "Accept": "application/JSON" } }).then(response => {
      console.log(response.data);
      this.setState({ joke: response.data })
    }))
  }

  render() {


    return (
      <div className="home">
      
      <h1>  {this.state.joke.joke} </h1>
      </div>
  )

}
}

export default DadJokes;
