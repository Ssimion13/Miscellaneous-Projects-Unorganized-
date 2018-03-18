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
   const foundPost = posts.find(post => post._id === targetPost);
   foundPost.comments.push(comment);
   console.log(foundPost);
   console.log(foundPost._id)
   axios.put(`/post/${foundPost._id}`, foundPost)
      this.setState({ posts })

 }



render(){
const mappedComments = this.props.comments.map( (x,i) => {
  return (<div className = "comments" key = {x+i}>
    <div className = "commentbox">
      <h4> {x.username} commented: </h4>
      <p> {x.comment} </p>
    </div>
  </div>
)
})


return(
 <div className = "form">
  <h1 className="title">{this.props.title} </h1>
  <h2 className="description">{this.props.description}</h2>
  <span className = "karmaBox">
  <h3>{this.props.karma || 0}</h3>

    <button onClick={()=> this.props.upvote(this.props.id)} > ^ </button>
    <br/>
    <button onClick={()=> this.props.downvote(this.props.id)}> v </button>
  </span>
 <form className="mainForm" onSubmit={this.handleSubmit}>
   <label className="commentLabels" htmlFor="username" > Username </label>  <br/> <input className= "userNameInputs" name="username" onChange={this.handleChange} />
   <br/>
   <label  className="commentLabels" htmlFor="comment" > Add Comment </label> <br/> <input className = "commentInput" name="comment" onChange={this.handleChange} />
   <br/>
   <button> Submit Comment </button>
   <br/>
 </form>
 <div className = "commentDiv">
  <h2> Here's what people are saying about {this.props.title}! </h2>
   {mappedComments}
 </div>
 </div>
)


}
}

export default FormComponent
