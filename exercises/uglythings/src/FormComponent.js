import React from "react";


function FormComponent(props){
  return(
    <div className = "results" >

     <h2> Name: {props.name} </h2>
      <h2> description: {props.description} </h2>
       <img src={props.linkURL} />
     </div>

  )


}

export default FormComponent
