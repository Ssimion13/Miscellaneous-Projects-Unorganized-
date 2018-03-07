export const setName = (uglyObject) => {
  return dispatch => {
    dispatch({
      type: "SET_NAME",
      setuglyObjects: uglyObject


    })
  }
}




export const actions = {
  setName
};

const initialState = {
  uglyThings: []
}


const reducer = (state = initialState , action) => {
  switch(action.type) {
    case "SET_NAME":

      return {
          uglyThings: [...state.uglyThings, action.setuglyObjects]

      }
      default:
        return state;
  }
}


export default reducer;
