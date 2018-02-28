import React from "react"

function DisplayData(props){
  let mappedData = props.toDoItems.map((item,i) => {
    return (<div key={item.title+i}>
      <img src={item.imgUrl || "https://img.etsystatic.com/il/f25886/1168713642/il_570xN.1168713642_h6ej.jpg"}  />
      <h3> {item.title} </h3>
      <p> {item.description} </p>
      </div>
   )
  })


  return(
    <div>
    {mappedData}
    </div>
  )
}

export default DisplayData;
