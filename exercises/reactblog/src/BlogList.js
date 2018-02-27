import React from "react"
import BlogPost from "./BlogPost";

const blogArray = [{
  title: "Man must explore and this is exploration at its greatest",
  subTitle: "Problems look mighty small from 150 miles up",
  author: "Start Bootstrap",
  date: "092418"
},
{
  title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
  subTitle: "",
  author: "Start Bootstrap",
  date: "091818"
  
},
{
  title: "Science has not yet mastered prophecy",
  subTitle: "We predict too much for the next year and yet far too little for the next ten.",
  author: "Start Bootstrap",
  date: "082418"
},
{
  title: "Failure is not an option",
  subTitle: "Many say exploration is part of our destiny, but its actually our duty to future generations.",
  author: "Start Bootstrap",
  date: "07082018"
  
}
  
]

function BlogList(){
  const mappedBlog = blogArray.map((blog, i) => {
    return <BlogPost
    
      title={blog.title}
      subTitle = {blog.subTitle}
      author = {blog.author}
      date = {blog.date}
      key={i + blog.date}
    />
  })
   return(
   <div>
    {mappedBlog}
   </div>

)}


export default BlogList;
