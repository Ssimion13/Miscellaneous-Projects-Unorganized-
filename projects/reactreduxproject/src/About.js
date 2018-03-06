import React from "react";

function About (){
  return(
    <div className = "about">
    <p className = "aboutText">
      This website was made by Scott Simion in a way of testing out both react and redux in a website.
      On load, the website pulls cards from the card API and marks down the values of these cards according to Blackjack
      (so Face cards are 10, and aces are, for the most part, 1 or 11 accordingly).

      There are a couple of bugs, mainly with the implementation of the aces in the current build. I was originally just going to make them
      count as one but that would just utterly defeat the point of blackjack in a lot of ways. As far as I know, the only time it glitches
      with the aces is if the ace is one of the first cards.
    </p>
    </div>

  )
}

export default About;
