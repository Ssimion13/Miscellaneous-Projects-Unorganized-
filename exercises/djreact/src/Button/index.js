import React from "react";
import Button from "./Buttons"

function Buttons(props){
  return (
    <div>
      <Button text = "toggle black and white" handleClick={props.handleButtonOne} />
      <Button handleClick={props.handleButtonTwo} />
    </div>
  )
}

export default Buttons;
