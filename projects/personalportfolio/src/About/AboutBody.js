import React from "react";
import ScottSuit from "./ScottSuit.jpg"

function AboutBody (){
  return (
    <div className="aboutBodies">
      <div className="personalInformation">
        <div className="infoDivider">
          <img alt="me" className="portrait" src={ScottSuit} />
          <div className="contactInfo">
            <h3> Contact Me! </h3>
            <h4> Email: ScottSimion@gmail.com </h4>
            <h5> Telephone: (561) 632-9726 </h5>
          </div>
        </div>
      </div>
    <div className ="aboutProfile">
      <h1> My Background </h1>
      <p> I originally found my passion for computer science while I was in undergraduate school for Biology-- in my junior year and senior year I made friends with many CS major students who kept telling me how I'd love working in CS: I found their work to be fascinating and the elective classes invigorating, but my school wouldn't let me switch majors so far along in my program.  When I worked as a medical assistant, I found that while I greatly enjoyed helping people get better, it wasn't for me, and I wanted to make a difference in the world in a different way--  the medical record programs and other programs I used on my job were fascinating to me in scope and scale, and when I started coding and realized that I could one day be a part of something that could really make the difference in the world, that's when I decided: working as a developer was for me. </p>
    </div>
    <div className ="aboutBackground">
      <h1>My Values </h1>
      <p> In the workplace, I'm a very strong proponent of teamwork, communication, self-sufficiency, and hard work. <br/> <br/>
        Growing up, my parents always instilled in me a strong desire to learn more about the world, and always to try to find new ways to make processes more efficent and understand why things work rather than 'just' if they work .
         I always throw my 100% into everything I do, especially when other people are affected by my work and are counting on me. I am an honest believer that anything is possible if everyone works hard, and everyone knows what they need to do and how to do it.
         One of my big passions is competitive gaming, which I've been doing since I was a teenager, and understanding what everyone's role in a process and working towards a common goal is something I've always held in high esteem.
      </p>
    </div>
    <div className ="aboutWebDevelopment">
      <h1> Choosing Development </h1>
      <p> I chose web/software development as my career because I genuinely enjoy the logic and problem solving that comes with the field. The feeling of accomplishment when you finish a project or even just solve a bug or problem that has held you up to me is a euphoric feeling I can't say any other career has ever matched.
          People say that you should do what you love, and I have to say: I love to code.</p>
    </div>


    </div>
  )
}

export default AboutBody;
