export function addPeople(){
  return {
    type: "ADD_PEOPLE"
  }
}



function reducer(prevState = {contactList: [{
            name: 'Jerry Simpson',
            age: 29
        }]}, action){
    switch(action.type){
      case "ADD_PEOPLE":
        return {
          contactList: [...prevState.contactList, action.newContact]
        }
      default:
        return prevState;
    }
}


export default reducer;
