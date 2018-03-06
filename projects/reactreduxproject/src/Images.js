import React from 'react';

function Images(props){
  const cardImage = props.cardImages.map((x,i) => {
    return <img src={x} key = {x+i} className="cards" alt="somethingwentwrong"/>
  })
    return (
        <div className = "cardView">
        {cardImage}
        </div>
    )
}

export default Images;
