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
    axios.get("/posts").then(response => {
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
    axios.post('/posts', post).then(response => {
      this.setState((prevState) => {
        return {posts: [ ...prevState.posts,response.data]}
      })
    })
  }
  
  upvote(targetPost){
    const posts = this.state.posts.slice();
    const foundPost = posts.find(post => post.id === targetPost);
    foundPost.karma += 1;
    axios.put(`/posts/${foundPost.id}`, foundPost)
      this.setState({ posts })
  }
  downvote(targetPost){
    const posts = this.state.posts.slice();
    const foundPost = posts.find(post => post.id === targetPost);
    foundPost.karma -= 1;
    axios.put(`/posts/${foundPost.id}`, foundPost)
      this.setState({ posts })
}
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Title" > ROCK THE VOTE </div>
        <div className="inputForm">
          <form onSubmit={this.handleSubmit}>
            Post Title: <input onChange = {this.handleChange} name="title" /> <br/>
            Post Description: <input onChange = {this.handleChange} name="description" /> <br/>
            <button > Submit </button>
          </form>
        </div>
        <Forms state={this.state}  posts={this.state.posts} upvote={this.upvote} downvote={this.downvote} votes={this.state.votes}/>
  
      </div>
    );
  }
}

export default App;
