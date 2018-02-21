import React from "react";

function Pet(props){
    return (
        <li>
          <h4> {props.name + ", a " + props.breed} </h4>
        </li>
);
};

export default Pet;
