import React, { Component } from 'react';
import axios from "axios"
import BountyList from "./BountyList"


class App extends Component {
  constructor(){
  super();
  this.state = {
    bounties: [],
    newBounty: {}
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.addBounty = this.addBounty.bind(this);
  this.deleteBounty = this.deleteBounty.bind(this);
}
  componentDidMount(){
     axios.get("/bounties").then(response => {
      this.setState({bounties: response.data})
      })
    }  
  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
 
  }
  
  handleSubmit(e){   
      e.preventDefault();
  var fName = this.state.firstName;
  var lName= this.state.lastName;
  var bAmount= this.state.bountyAmount;
  var Living= this.state.status;
  var type= this.state.type;
     var inputBounty = {
          fName,
          lName,
          bAmount,
          Living,
          type
        }
console.log(this.state);
    this.addBounty(inputBounty);
    console.log(this.state);


  }
  addBounty(bounty){    

      console.log(bounty);
      
    axios.post('/bounties', bounty).then(response =>{
          console.log(response.data);
      this.setState((prevState) => {
        return {bounties: [response.data, ...prevState.bounties]}
      })
    })
  }
  
  deleteBounty(id){
        axios.delete('/bounties/' + id).then(response=>{
            this.setState(prevState=>{
                const filteredBounties = prevState.bounties.filter(bounty=>{
                  console.log(bounty);
                    return bounty.id !== id; 
                })
                return {bounties: filteredBounties}
            })
            console.log(this.state);
        })

    }
  
  
  
  render() {
    return (
      <div>
      <h1 className = "title"> Bounty List </h1>
      <form onSubmit={this.handleSubmit}> 
      <table>
      <tbody>
        <tr>
        <td> First Name: </td>
        <td>   <input onChange={this.handleChange} name="firstName" id="firstName"/> </td>
        </tr>
        <tr>
        <td> <label htmlFor="lastName"> Last Name: </label> </td>
        <td>  <input onChange={this.handleChange} name="lastName" id="lastName"/> </td>
        </tr>
        <tr>
        <td> <label htmlFor="bountyAmount"> Bounty Amount:  </label>  </td>
        <td> <input onChange={this.handleChange} name = "bountyAmount" id="bountyAmount"/> </td>
        </tr>
        <tr>
        <td> <label htmlFor="status"> Current Status: </label> </td>
        <td>  <input  onChange={this.handleChange} name = "status" id="status"/> </td>
        </tr>
        <tr>
        <td> <label htmlFor="type"> Sith or Jedi?  </label> </td>
        <td>  <input  onChange={this.handleChange} name = "type" id="type"/> </td>
        </tr>
        </tbody>
        </table>
        <button > Submit </button>
      </form>
      <BountyList bounties = {this.state.bounties} delete = {this.deleteBounty}/>
    
      </div>
    );
  }
}

export default App;
