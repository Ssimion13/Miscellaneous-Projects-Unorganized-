const redux = require("redux");

//not a literal state, but a placeholder since we don't have things coming from a react app or something like that
const state = {
  counter: 0
}


//actions are javascript objects.....like everything in Javascript, I suppose.

//action creator
function increment (){
  return {
    //action
    type: "INCREMENT"
  }
}

function set (num){
  return {
    type: "SET",
    num: num //left blank, okay due to ES6
  }
}
function dubs(){
  return {
    type: "DUBS",
  }
}


//very important that reducers are pure functions--they do not affect state or anything as a side effect(!)

function reducer(prevState = state , action){
  switch(action.type){
    case "INCREMENT":
      return {
        counter: prevState.counter + 1 // ++ doesn't work b/c it would change prevState.
      }
    case "SET":
      return {
        counter: action.num
      }
    case "DUBS":
      return {
        counter: prevState.counter * 2
      }
    default:
      return prevState
  }
}


const store = redux.createStore(reducer);

//updates constantly changes in state
store.subscribe(() => {
  console.log(store.getState())
})

//recepient of the action creator's....action
store.dispatch(increment());
store.dispatch(set(10));
store.dispatch(dubs());
