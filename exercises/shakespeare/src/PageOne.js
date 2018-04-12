import React, { Component } from 'react';
import axios from "axios";
import ReactStars from "react-stars"


class App extends Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }
  componentDidMount(){
    console.log("Hi");
    axios( {
      method: "GET",
      url: "http://shakespeare.podium.co/api/reviews",
      headers: {"Authorization" : "koOheljmQX",
                'Content-Type' : 'application/json'}
      }).then( response => {

            this.setState({
              reviews: response.data.data
            })
            console.log(this.state.reviews);

          })
          .catch((error) => {
            console.log(error)
          });




        }

  render() {
    var mappedData = this.state.reviews.map( (x,i)=> {
      console.log(x.rating);
      let rating;
      switch(true){
        case (x.rating === 5):
          rating = 5;
          break;
        case (x.rating > 4.5 && x.rating < 5):
          rating = 4.5;
          break;
        case (x.rating > 4 && x.rating < 4.5):
          rating = 4;
          break;
        case (x.rating > 3.5 && x.rating < 4):
          rating = 3.5;
          break;
        case (x.rating > 3 && x.rating < 3.5):
          rating = 3;
          break;
        case (x.rating > 2.5 && x.rating < 3):
          rating = 2.5;
          break;
        case (x.rating > 2 && x.rating < 2.5):
          rating = 2;
          break;
        case (x.rating > 1.5 && x.rating < 2):
          rating = 1.5;
          break;
        case (x.rating > 1 && x.rating < 1.5):
          rating = 1;
          break;
        case (x.rating > 0.5 && x.rating < 1):
          rating = 0.5;
          break;
        case (x.rating < 0.5):
          rating = 0;
          break;
        }
        console.log(rating);
      return (
        <div className="mappedDiv" key = {x+i}>
          <div className = "Names"> <h6> {x.author}  </h6>  </div>


          <div> <h5> {x.rating} Stars </h5> </div>
          <div>
          <ReactStars
            count={5}
            size={45}
            edit={false}
            value={rating}
            color2={'#ffd700'} />
          </div>
        </div>
      )
    });



    return (
      <div className = "page">
        <div className = "title"> Reviews </div>
        {mappedData}
      </div>
    );
  }
}

export default App;
