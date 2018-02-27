import React, {Component} from "react"
import axios from "axios";

class TodoList extends Component {
  constructor(){
    super();
    this.state: {
      people: []

    }


  }

  componentDidMount(){
    axios.get("https://swapi.c/api/people/2").then((response)=>{
      const people = response.data.results;
      this.setState({people: response.data.results});
    })
  }

  render(){
    const mappedPeople = this.state.people.map((person, i) => {
      return <div > {person.name} </div>
    })
    return(
      <h1> Yo! </h1>
    )
  }

}

export default TodoList;
