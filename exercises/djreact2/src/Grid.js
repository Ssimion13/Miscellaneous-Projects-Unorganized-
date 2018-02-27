import React from "react";
import Square from "./Square"



function Grid(props){
    return(
     <div className= "GridofSquares">
      <Square colors={props.colors.square1} color2={props.color2}/>
      <Square colors={props.colors.square2} color2={props.color2}/>
      <Square colors={props.colors.square3}/>
      <Square colors={props.colors.square4}/>
     </div>
    )

  }
export default Grid
