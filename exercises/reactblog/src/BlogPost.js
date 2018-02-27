import React from "react";



function BlogPost(props){
  return(
 <div className="blogPostys">
   <div className="blogPostyText">
   <h1> {props.title} </h1>
   <h3> {props.subTitle} </h3>
   <h4> Posted by {props.author} on {props.date} </h4>
   </div>
 </div>
)
}

export default BlogPost;