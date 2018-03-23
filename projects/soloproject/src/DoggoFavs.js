import React, {Component} from "react";
import axios from "axios";


class DoggoFavs extends Component {
  constructor(){
    super();
    this.state = {
      doggoArray: []
    }
    this.deleteDoggo = this.deleteDoggo.bind(this);
  }

componentDidMount(){
  axios.get('/dogs').then(response =>{
    console.log(response.data);
    this.setState({
      doggoArray: response.data
    })
  })
}

deleteDoggo(id){
  axios.delete('/dogs/' + id).then(response => {
    this.setState(prevState => {
      const filteredDogs = prevState.doggoArray.filter(dog => {
        return dog._id !== id;
      })
      return {doggoArray: filteredDogs}
    })
  })
}

render(){
  var doggoMapping = this.state.doggoArray.map( (x,i) => {

     return (
       <div className = 'mapDogs' key = {x + i + 100}>
     <img key = {x + i} className = "dogPictures" src = {x.URL} alt = "pictures" />
        <button  onClick={()=>this.deleteDoggo(x._id)}> Delete </button>
     </div>
   )
   })
  return(
    <div className="dogFavoriteDiv">
    <h1 className="dogFavoriteTitle"> Your Favorite Doggos </h1>
    <div className="dogFavoriteHome">
    {doggoMapping}
    </div>
    </div>

  )};
};

export default DoggoFavs;
