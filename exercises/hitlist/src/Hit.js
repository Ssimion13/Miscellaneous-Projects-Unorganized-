import React from "react";


function Hit(props){
  const styles = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: "contain"
  }
  return(
    <div className = "hit">
    <div className = "Name"> {props.name} </div>
    <div className = "image" style={styles}> </div>
    </div>
  )
}

export default Hit;
