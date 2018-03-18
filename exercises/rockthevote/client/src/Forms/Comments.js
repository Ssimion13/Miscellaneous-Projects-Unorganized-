import React from "react";

function Comments(props){
  console.log(props);
  return (
    <div>
     <p> {props.username} </p>
     <p> {props.comment} </p>
    </div>
  )
}


export default Comments;
