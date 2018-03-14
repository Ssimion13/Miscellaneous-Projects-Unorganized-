import React, {Component} from "react";
import axios from "axios"

class FormComponent extends Component{
  constructor(){
    super();
    this.state = {
    }
    this.addComment=this.addComment.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }

 handleChange(e){
   this.setState({[e.target.name] : e.target.value});


 }

 handleSubmit(e){
   e.preventDefault();
   var username = this.state.username;
   var comment = this.state.comment;
   var inputComment = {
     username,
     comment
   }
   this.addComment(this.props.id, inputComment)
 }


 addComment(targetPost, comment){

   const topState = this.props.state;
   const posts = topState.posts.slice();
   const foundPost = posts.find(post => post.id === targetPost);
   foundPost.comments.push(comment);
   axios.put(`/posts/${foundPost.id}`, foundPost)
      this.setState({ posts })

 }



render(){
const batman = this.props.comments.map( (x,i) => {
  return (<div key = {x+i}>
  {x.username} {x.comment}
  </div>
)
})


return(
 <div className = "form">

  <h1>{this.props.title} </h1>
  <h2>{this.props.description}</h2>
  <h3>{this.props.karma}</h3>
  <button onClick={()=> this.props.upvote(this.props.id)} > ^ </button>
  <button onClick={()=> this.props.downvote(this.props.id)}> v </button>

 <form onSubmit={this.handleSubmit}>
   Username <input name="username" onChange={this.handleChange} />
   <br/>
   Comments <input name="comment" onChange={this.handleChange} />
   <br/>
   <button> Submit Comment </button>
 </form>
 {batman}
 </div>
)


}
}

export default FormComponent
