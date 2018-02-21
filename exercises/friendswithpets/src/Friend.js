import React from "react";
import Pet from "./Pet";
import PropTypes from "prop-types";

// props.pets is breaking everything. It's an array with objects, and react wants it to be an array of components

function Friend(props){
  const petList = props.pets.map(function(pet,index){
    return (
      <Pet name = {pet.name}
                breed = {pet.breed}
                key = {index + pet.name}
                
    />)});
    return (
        <div >
            <h1 className = "friendos"> {props.name + ",  " + props.age + " years old"} </h1>
            <div className = "petDiv">
            <h2> Pets: </h2>
            <ul>
              {petList}
            </ul>
            </div>
        </div>
    )
};

Friend.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    pets: PropTypes.array
}

export default Friend;
