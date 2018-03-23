import React, {Component} from "react";
import {Link} from "react-router-dom"
import axios from "axios"

class Doggos extends Component {
  constructor(){
   super();
   this.state = {
     doggo: {},
     isLoaded: false,
     doggoArray: []
   }
   this.addDog = this.addDog.bind(this);
   this.newDog = this.newDog.bind(this);
 }

  componentDidMount(){
    axios.get('/dogs').then(response =>{
      console.log(response.data);
      this.setState({
        doggoArray: response.data,
        isLoaded: true
      })
    })
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      this.setState({
        doggo: response.data,
        isLoaded: true
      })
  console.log(this.state);
    })
  };
  newDog(){
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      console.log("here?")
      this.setState({
        doggo: response.data
      })
  console.log(this.state);
    })
  };
  addDog(post){
    var inputDog = {
      URL: post
    }
    axios.post('/dogs', inputDog).then(response =>{
      console.log(response.data);
    })
    this.setState({
      doggo: ""
    })
    this.newDog();
  }




 render(){



  return (

    <div className="doggoDiv">
      <div className="doggoImageDiv">
        <img alt="stopaskingmeforaltnames" className="doggoImage" src={this.state.doggo.message} />
      </div>
      <button className="doggoButton" onClick={()=> this.newDog() }> New Doggo </button>
      <button className="doggoButton" onClick={()=> this.addDog(this.state.doggo.message)}> Save Doggo </button>
      <Link className="link" to="/DoggoFavs"> Your Favorite Doggos </Link>


    </div>

  )
}
}

export default Doggos;
