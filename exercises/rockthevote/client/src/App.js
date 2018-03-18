import React, { Component } from 'react';
import axios from "axios";
import Forms from "./Forms/index.js"
import Navbar from "./Navbar"


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addPost = this.addPost.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }
  
  componentDidMount(){
    axios.get("/post").then(response => {
      this.setState({
        posts: response.data,
      })
    })

  }
  
  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }
  
  handleSubmit(e){
    e.preventDefault();
    var title = this.state.title;
    var description = this.state.description;
    var inputPost = {
      title,
      description
    }
    console.log(inputPost)
    this.addPost(inputPost);
    title = "";
    description = "";
    inputPost = "";
  }
  
  
  addPost(post){
    console.log(post)
    axios.post('/post', post).then(response => {
      this.setState((prevState) => {
        return {posts: [ ...prevState.posts,response.data]}
      })
    })
  }
  
  upvote(targetPost){
    const posts = this.state.posts.slice();
    console.log(posts);
    const foundPost = posts.find(post => post._id === targetPost);
    console.log(foundPost);
    foundPost.karma += 1;
    axios.put(`/post/${foundPost._id}`, foundPost)
      this.setState({ posts })
  }
  downvote(targetPost){
    const posts = this.state.posts.slice();
    const foundPost = posts.find(post => post._id === targetPost);
    foundPost.karma -= 1;
    axios.put(`/post/${foundPost._id}`, foundPost)
      this.setState({ posts })
}
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="poster">
          <h3 className="Title" > Add a Post! </h3>
          <div className="inputForm">
            <form onSubmit={this.handleSubmit}>
            <label>  Post Title: </label> <br/> <input onChange = {this.handleChange} className="postTitle" name="title"  /> <br/>
              <label> Post Description: </label> <br/> <input onChange = {this.handleChange} className="postDescription" name="description" /> <br/>
              <button > Submit </button>
            </form>
          </div>
        </div>
         <h2 className="Trending"> Here's What's trending now! </h2>
        <Forms state={this.state}  posts={this.state.posts} upvote={this.upvote} downvote={this.downvote} votes={this.state.votes}/>
  
      </div>
    );
  }
}

export default App;
