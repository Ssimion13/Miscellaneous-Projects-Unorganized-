import React from "react"
import FormComponent from "./FormComponent"

function Forms(props){



  const mappedPosts = props.posts.map( (x,i)=> {

    return <FormComponent
      comments = {x.comments}
      state={props.state}
      upvote ={props.upvote}
      downvote={props.downvote}
      title={x.title}
      key={x+i}
      description = {x.description}
      karma = {x.karma}
      id = {x.id}
      />
  })
  return(
    <div>
    {mappedPosts}

    </div>
  )

}


export default Forms;
