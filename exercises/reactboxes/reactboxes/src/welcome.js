import React from "react";


function Welcome(props){
  const styles = {
    backgroundColor: props.bColor,
    fontSize: props.font
  }

  return <h1 style={styles}> HI {props.name} HERE WITH THE {props.product} ! IT HAS THE POWER {props.gimmick} AND MORE! WHAT ARE YOU WAITING FOR? </h1>
}

export default Welcome;
