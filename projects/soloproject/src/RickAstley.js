import React, {Component} from "react";
import axios from "axios";

class RickAstley extends Component {
  constructor(){
    super();
    this.state = {
      URL: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    axios.get('/urls').then(response => {
      console.log(response.data);
      this.setState({
        URL: response.data[0].URL
      })
    })
  }



  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.newURL.length > 10){
    var newURL = this.state.newURL;
    if(newURL.indexOf("embed") === -1) {
      let arrayURL = newURL.split('');
      arrayURL.splice(arrayURL.lastIndexOf("/"), 0, "/embed");
      console.log(arrayURL.lastIndexOf('/'));
      if(newURL.includes("watch")){
      arrayURL.splice(arrayURL.lastIndexOf("/") + 1, 8);
      console.log(arrayURL);
    }
      newURL = arrayURL.join('');
      console.log(newURL);
      newURL += "?autoplay=1"
      }
    this.setState({
      URL: newURL
    })
    var URLtoDatabase = {
      URL: newURL
    }
    axios.put("/urls/5ab56b8b19a64f3166ee105f", URLtoDatabase );
  }
}


  render() {


    return (
      <div className="videoPage">
        <iframe title= "video?" className = "video" width="800" height="600" src={this.state.URL}> </iframe>
        <form className="videoForm">
         <label className="videoLabel"> This video doesnt make your day? Put your own video in instead! </label> <br/> <input name="newURL" className="videoInput" onChange={this.handleChange}/>
         <button className="videoButton" onClick = {this.handleSubmit}> Change </button>
        </form>
        Here is a recommendation!
        <a href="https://www.youtube.com/embed/dQw4w9WgXcQ"> https://www.youtube.com/embed/dQw4w9WgXcQ </a>
      </div>
    )
  }
}

export default RickAstley;
