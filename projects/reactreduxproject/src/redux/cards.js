import axios from "axios";

export const setResultText = text => {
    return dispatch => {
        dispatch({
            type  : "RESULT_TEXT",
            value : text
        })
    };
}

export const addCard = (props) => {
  const netCardValue = props.netCardValue;
    return dispatch => {
        axios
            .get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
            .then(response => {
                const card = response.data.cards[0];
                let cardValue = 0;

                if(card.value === "JACK" || card.value === "QUEEN" || card.value ==="KING"){
                    cardValue = 10;
                } else if (card.value === "ACE"){
                    if(props.netCardValue + 11 <= 21){
                    cardValue = 11;
                    } else {
                    cardValue = 1;
                    }
                } else {
                    cardValue = Number(card.value)
                }
console.log(card.value);
                dispatch({
                    type : "ADD_CARD",
                    data : {
                        cardList : card,
                        cardImages: card.image,
                        cardValue: cardValue
                    }
                });
            });
        }
    }

export const reset = () => {
    return dispatch => {
        dispatch({
            type : "RESET"
        });
    }
}


const initialState = {
    drawnCards: [],
    cardImages: [],
    cardList: [],
    isLoading: false,
    cardValue: [],
    netCardValue: 0,
    resultTextResponse: "",
    loading: false,
    cards: []
}

export const actions = {
    setResultText,
    addCard,
    reset
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "RESET":
            return initialState;
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "RESULT_TEXT":
            return {
                ...state,
                resultTextResponse : action.value
            };
        case "ADD_CARD":
            return {
                ...state,
                cardList : [
                    ...state.cardList,
                    action.data.cardList
                ],
                cardImages : [
                    ...state.cardImages,
                    action.data.cardImages
                ],
                cardValue : [
                    ...state.cardValue,
                    action.data.cardValue
                ],
                netCardValue : parseInt(state.netCardValue + action.data.cardValue)
                        };
        default:
            return state;
    }
}

export default reducer;
