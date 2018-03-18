import React from "react";

function BountyList(props){

  const allBounties = props.bounties.map((x,i) =>{
     console.log(x);
    return(
           <div key ={x +i} className="bounty">
            <div className ="bountyText">
             <h2> {x.fName + " " + x.lName + ": " + x.type} </h2>
             <h3> {`Bounty Amount: $ ${x.bAmount}`} </h3>
              <div>
                 <h1> {`Current Status: ${x.Living}`} </h1>
                 <h2> {x.id} </h2>
                 </div>
              <button onClick={()=>props.delete(x._id)}> Delete </button>  
            </div>
           </div>
)
  })

  return(
    <div>
  {allBounties}
  </div>
  )
}

export default BountyList
