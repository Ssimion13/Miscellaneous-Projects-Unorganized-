export function increment(){
    return {
        type: "INCREMENT_ONE"
    }
}

function reducer(prevState = {counter: 0}, action){
    switch(action.type){
        case "INCREMENT_ONE":
            return {counter: prevState.counter + 1};
        default:
            return prevState;
    }
}

export default reducer;
