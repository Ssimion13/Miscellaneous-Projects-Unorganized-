import React from "react";
import Spots from "./spots";




const vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring",
    imgUrl: "https://en.wikipedia.org/wiki/Meridian,_Idaho"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
    imgUrl: "http://foundtheworld.com/wp-content/uploads/2014/06/Cancun-mexico-11.jpg"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall",
    imgUrl: "http://www.speeli.com/articles/view/Why-Donald-Trump-hates-China"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
    imgUrl: "https://www.lonelyplanet.com/russia/volga-region/volgograd"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
    imgUrl: "https://media.timeout.com/images/103478224/630/472/image.jpg"
  }
]
for(var i = 0; i < vacationSpots.length; i++){
if(Number(vacationSpots[i].price) <= 500){
  vacationSpots[i].costRating = "$";
}
if(Number(vacationSpots[i].price) >500 && vacationSpots[i].price < 1000){
  vacationSpots[i].costRating = "$$";
}
if(Number(vacationSpots[i].price) > 1000){
  vacationSpots[i].costRating = "$$$";
}

}



function App(){
    var styley = {
          textAlign:"center"
    };
    const mappedSpots = vacationSpots.map((spots, index) =>{
    return <Spots place={spots.place} price={spots.price} timeToGo ={spots.timeToGo} costRating ={spots.costRating} imgUrl={spots.imgUrl} key={index} />
  })
  return (
    <div style={styley}>
    <h1> Welcome to Baller Travel! </h1>
    <p> Try going to our Baller destinations! </p>
    { mappedSpots }
    </div>
  );

}

export default App;
