import React from 'react';
import {connect} from "react-redux";
import { increment } from "./redux";

function App(props){
    return (
        <div> 
           <h1>{ props.counter }</h1>
           <button onClick={props.increment}>increment</button>
        </div>
    );
  
}

export default connect(state => state, { increment })(App);
