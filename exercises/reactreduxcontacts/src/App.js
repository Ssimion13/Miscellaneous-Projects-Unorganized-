import React from 'react';
import {connect} from "react-redux";
import {addPeople} from "./redux";

function App(props){
  return (
    <div>
    <h1> {props.contactList} </h1>
    </div>
  );
}

export default connect(state => state, { addPeople })(App);
