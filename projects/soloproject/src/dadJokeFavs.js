import React, {Component} from "react";
import axios from "axios";


class dadJokeFavs extends Component {
  constructor(){
    super();
    this.state = {
      jokeArray: []
    }
    this.deleteJoke = this.deleteJoke.bind(this);
  }

componentDidMount(){
  axios.get('/jokes').then(response =>{
    console.log(response.data);
    this.setState({
      jokeArray: response.data
    })
    console.log(this.state.jokeArray);
  })
}

deleteJoke(id){
  axios.delete('/jokes/' + id).then(response => {
    this.setState(prevState => {
      const filteredJokes = prevState.jokeArray.filter(joke => {
        return joke._id !== id;
      })
      return {jokeArray: filteredJokes}
    })
  })
}

render(){
  var jokeMapping = this.state.jokeArray.map( (x,i) => {

     return (
       <div className = "mapJokes" key = {x + i + 100}>
     <h2 key = {x + i} className = "jokeText"> {x.URL}  </h2>
      <button className="favDelete" onClick={()=>this.deleteJoke(x._id)}> Delete </button>
     </div>
   )
   })
  return(
    <div className="jokeFavoriteDiv">
    <h1 className="jokeFavoriteTitle"> Your Favorite Jokes </h1>
    <div className="jokeFavoriteHome">
    {jokeMapping}
    </div>
    </div>

  )};
};

export default dadJokeFavs;
