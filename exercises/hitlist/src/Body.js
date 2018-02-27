import React, {Component} from 'react';
import Hit from "./Hit";
import axios from 'axios';

class Body extends Component {
  constructor(){
    super();
    this.state = {
      hitlist: []
    }
}
componentDidMount(){
  axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=>{
  let localstate = response.data;
  console.log(localstate);
  const mappedHit = localstate.map((hit, i) => {
    return <Hit 
    
        name = {hit.name}
        image = {hit.image}
        key = {hit.name + i}/>
  
})
this.setState({
  hitlist: mappedHit
})
})
};

  render(){
  
   console.log(this.state);
  
    return (
  <div className = "body">
   {this.state.hitlist}
  </div>


)

}
}
export default Body;
