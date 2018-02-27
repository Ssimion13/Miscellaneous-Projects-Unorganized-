import React from "react"
import Square from "./Square"

function Grid(props){
  return (
    <div>
      <Square color={props.gridColors.one} />
      <Square color={props.gridColors.two}/>
      <Square color={props.gridColors.three}/>
      <Square color={props.gridColors.four}/>
    </div>
  )



}
export default Grid;
