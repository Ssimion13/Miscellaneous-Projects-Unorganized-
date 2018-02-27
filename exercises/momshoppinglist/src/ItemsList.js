



import React from "react";

const ItemsList = props => {
  const mappedItems = props.nameList.map((namelist, index) => {
         return (<li key={namelist + index}> <span className = "xBox"> X </span> {namelist} </li>)}
       )
  return (
    <div className = "listDiv">
    <ul>
     {mappedItems}
    </ul>
    </div>


  )
}


export default ItemsList;
