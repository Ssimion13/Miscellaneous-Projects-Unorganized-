import React from "react";


function Spots(props){
  let backgroundColor = "FireBrick";
  if(props.timeToGo === "Spring" || props.timeToGo === "Summer"){
    backgroundColor = "grey";
  }
  const styles = {
    backgroundColor,
    border: "1px solid black",
    paddingLeft: "5px",
    textAlign: "center"
  }
  return(
    <div style={styles}>

  <h2> {props.place} </h2>
  <h3> Cost: {props.price} </h3>
  <h4> When to Go: {props.timeToGo} </h4>
  <h5> Cost Rating: {props.costRating} </h5>
  <img src ={props.imgURL} alt="img"/>
  </div>
);
}


export default Spots;
