import React, {Component} from "react";
import axios from "axios"
import Images from "./Images"
import {connect} from "react-redux";
import {actions} from "./redux/cards"

class Home extends Component{
  constructor(){
    super();
    this.stay = this.stay.bind(this);
  }

   stay(){
    const currentPlayerValue = this.props.netCardValue;
    console.log(currentPlayerValue);
    var resultText = "";

    const dealerValue = Math.floor(Math.random() * 15) + 14
    if(dealerValue > currentPlayerValue && dealerValue <=21){
      resultText = (`You have ${currentPlayerValue} to the computers ${dealerValue}! \n Sorry, he won.`);

    } else if (dealerValue < currentPlayerValue && dealerValue <=21){
      resultText = (`You have ${currentPlayerValue} to the computer's ${dealerValue}!\nCongratulations! You won!!` );

    } else if (dealerValue === currentPlayerValue && dealerValue <=21){

      resultText = ( `You have ${currentPlayerValue} to the computer's ${dealerValue}!\nIt's a tie!`);

    } else {
      resultText = (`You have ${currentPlayerValue} to the computer's ${dealerValue}!\n Congratulations! He busted.`);

    }

    this.props.setResultText(resultText);
  }

  render(){
    console.log(this.props);
    const checker =   this.props.netCardValue > 21
      ? <p> Sorry, you busted, man </p>
      : <p> Your current card value is: {this.props.netCardValue} </p>;

    const addButton = this.props.cardList.length < 5 && this.props.netCardValue <=21
      ? <div className = "buttons">
          <button className="button" onClick={()=>this.props.addCard(this.props)} > Add Card </button>
          <button className="button" onClick={()=> this.stay()} > Stay </button>
          <button className="button" onClick={()=>this.props.reset()} > Reset </button>
        </div>
      : <div className="buttons" >
          <button className="button" onClick={()=>this.props.reset()} > Reset </button>
          <button className="button" onClick={()=> this.stay()} > Stay </button>
        </div>;

    return (
      <div className = "home">
        <div className = "cardList" >
          <Images  cardImages= {this.props.cardImages}   />
        </div>
        {addButton}

        <div className= "results" >
        {checker}
        {this.props.resultTextResponse}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return state.cards;
}

const mapDispatchToProps = () => actions;

export default connect(mapStateToProps, actions)(Home);
