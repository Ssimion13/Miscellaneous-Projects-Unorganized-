import React from "react"
import {createStore} from 'redux'

export const start = () => {
  return {
    type: "START"

  }

}
export const stop = () => {
  return {
    type: "STOP"
  }

}
export const reset = () => {
  return {
    type: "RESET"
  }

}

const addSecond = () => {
  return {
    type: "ADD_SECOND"
  }
}



const initialState = {
  minutes: 0,
  seconds: 0
}

const reducer = (prevState = initialState, action) => {
  switch(action.type){
    case "ADD_SECOND":
      if(prevState.seconds < 59) {
      return {
        ...prevState,
        seconds: prevState.seconds + 1
      }
    }
    return {
      seconds: 0,
      minutes: prev.State.minutes + 1
    }
    case "RESET":
    return initialState;

    default:
      return prevState
  }

}


export default createStore(reducer)
