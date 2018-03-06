import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios"
import Images from "./Images"
import {getCards} from "./redux"

class Home extends Component{
  constructor(){
    super();
    this.state = {
      drawnCards: [],
      cardImages: [],
      cardList: [],
      isLoading: false,
      cardValue: [],
      netCardValue: 0,
      resultTextResponse: ""
    }
    this.addCard = this.addCard.bind(this);
    this.reset = this.reset.bind(this);
    this.stay = this.stay.bind(this);
  }
  componentDidMount(){
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2").then(response =>{

      const cardImages = response.data.cards.map(x => {
        return x.image;
      })
      const Cards = response.data.cards.map(x => {
        return x;
      })
      const cardValues = response.data.cards.map(x =>{

        if(x.value === "JACK" || x.value === "QUEEN" || x.value ==="KING"){
          return 10;
        } else if (x.value === "ACE"){
          if(this.state.netCardValue + 11 <= 21){
            return 11
          } else {
            return 1
          }
        } else {
        return Number(x.value)
        }
      })
        const newArray = this.state.cardValue.concat(cardValues)
        const reduceCardValues = newArray.reduce((accumulator,currentValue) => {
          return Number(accumulator) + Number(currentValue);
        })

      this.setState({
        drawnCards: response.data,
        isLoading: true,
        cardImages: cardImages,
        cardList: Cards,
        cardValue: cardValues,
        netCardValue: reduceCardValues
      })
console.log( this.state);
    })
  }

  addCard(){
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1").then(response =>{



      const cardValues = response.data.cards.map(x =>{
        if(x.value === "JACK" || x.value === "QUEEN" || x.value ==="KING"){
          return 10;
        } else if (x.value === "ACE"){
          if(this.state.netCardValue + 11 <= 21){
            return 11
          } else {
            return 1
          }
        } else {
        return Number(x.value)
          }
      })
    const newArray = this.state.cardValue.concat(cardValues)

    const reduceCardValues = newArray.reduce((accumulator,currentValue) => {
      if(currentValue === 11 && accumulator + currentValue > 21){
        console.log("Ace Tester");
        currentValue = 1;
      }
      return Number(accumulator) + Number(currentValue);
    })
      this.setState ((prevState) => {
        return {
          cardList: [...prevState.cardList, response.data.cards[0]],
          cardImages: [...prevState.cardImages, response.data.cards[0].image],
          cardValue: [...prevState.cardValue, cardValues[0]],
          netCardValue: reduceCardValues
          }
      })
      console.log(this.state);
    })

}

  reset(){
    this.setState({
          drawnCards: [],
          cardImages: [],
          cardList: [],
          isLoading: false,
          cardValue: [],
          netCardValue: 0,
          dealerCardValue: [],
          resultTextResponse: ""
        })

  }

   stay(){
     const currentPlayerValue = this.state.netCardValue;
     console.log(currentPlayerValue);

     const dealerValue = Math.floor(Math.random() * 15) + 14
     if(dealerValue > currentPlayerValue && dealerValue <=21){
      const resultText = (`You have ${currentPlayerValue} to the computers ${dealerValue}! \n Sorry, he won.`);
      this.setState({
        resultTextResponse: resultText
      })
     } else if (dealerValue < currentPlayerValue && dealerValue <=21){
       const resultText = (`You have ${currentPlayerValue} to the computer's ${dealerValue}!
      \nCongratulations! You won!!` )
       this.setState({
         resultTextResponse: resultText
       })
     } else if (dealerValue === currentPlayerValue && dealerValue <=21){

       const resultText = ( `You have ${currentPlayerValue} to the computer's ${dealerValue}!\nIt's a tie!`);
       this.setState({
         resultTextResponse: resultText
       })
     } else {
      const  resultText = (`You have ${currentPlayerValue} to the computer's ${dealerValue}!\n Congratulations! He busted.`)
      this.setState({
        resultTextResponse: resultText
      })
     }

}

  render(){

  const checker =   this.state.netCardValue > 21 ?
    <p> Sorry, you busted, man </p> :
    <p> Your current score is: {this.state.netCardValue} </p>
  const addButton = this.state.cardList.length < 5 && this.state.netCardValue <=21 ?
  <div className = "buttons">
    <button className="button" onClick={()=>this.addCard()} > Add Card </button>
    <button className="button" onClick={()=> this.stay()} > Stay </button>
    <button className="button" onClick={()=>this.reset()} > Reset </button> </div>
     :
  <div className="buttons" >
    <button className="button" onClick={()=>this.reset()} > Reset </button>
    <button className="button" onClick={()=> this.stay()} > Stay </button>
  </div>



    return(
      <div className = "home">
        <div className = "cardList" >
          <Images  cardImages= {this.state.cardImages}   />
        </div>
        {addButton}

      <div className= "results" >
       {checker}
       {this.state.resultTextResponse}
      </div>

      </div>
    )
  }
}


export default connect(state => state, {getCards})(Home);
