import React from "react"


function Form(props){

  return(
    <form>
         <p>Your ToDo List! Add, remove or make changes:</p><br/><br/>
         <input type="text" id="id"/>Entry ID<br/><br/>
         <input type="text" id="title"/>Title<br/><br/>
         <input type="text" id="description"/>Description<br/><br/>
         <input type="text" id="price"/>Price<br/><br/>
         <input type="text" id="imgUrl"/>Image URL<br/><br/>
         <input type="checkbox" id="completed"/>Complete?<br/><br/>
         <button id="add">Add New Entry</button>
         <button id="delete">Delete From Database</button>
         <button id="update">Submit Changes</button>
         <div id="myDiv"></div>
     </form>
  )
}

export default Form;
