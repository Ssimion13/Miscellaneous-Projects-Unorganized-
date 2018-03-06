export function increment(name){
  return {
    type: "INCREMENT",
    name: name
  }
}





function reducer(prevState = {counter: 0}, action){
    switch(action.type){
      case "INCREMENT":
        return {counter: prevState.counter + 1};

      default:
      return prevState;
    }
}

export default reducer;
