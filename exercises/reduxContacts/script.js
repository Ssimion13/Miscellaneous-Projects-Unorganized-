// Build a contact management system using Redux in a vanilla JavaScript environment (no React).
//
// You should be able to dispatch actions that add a new person and remove an existing person from an array of contacts.
//
// The contact objects can have whatever properties you want. For example:
//
const redux = require("redux");

const state = {

   people: [{
      name: "Tommy Oliver",
      phone: "925-867-5309",
      email: "thegreenranger@powerrangers.com"
  }
]};

function addPerson(person){
    return {
        type: "ADDPERSON",
        add: person
    }
  }

function removePerson(personName){
  return {
    type: "REMOVEPERSON",
    name: personName
  }
}

function mapNames(){
  return {
    type: "MAPNAMES"
  }

};



function reducer(prevState = state, action) {
  switch(action.type){
    case "ADDPERSON":
      return {
        people: [...prevState.people, action.add]
      }

    case "REMOVEPERSON":
    const copy = prevState.people;
    let filteredPerson = copy.filter(x => x.name !== action.name);
      return {
         people: filteredPerson
      }
    case "MAPNAMES":
    const copy2 = prevState.people;
    let mappedPerson = copy2.map(x => x.name)
    return mappedPerson;

    default:
      return prevState

  }
}


const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
})




store.dispatch(addPerson({
  name: "John Cena",
  phone: "892-323-4562",
  email: "andhisnameisJohnCena@WWESuperslam.com"
}));

store.dispatch(removePerson("Tommy Oliver"));

store.dispatch(mapNames());
