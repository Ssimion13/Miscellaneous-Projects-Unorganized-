import axios from "axios";

export const getCards = () => {
    return dispatch => {
        dispatch({
            type: "LOADING"
        });
        setTimeout(function(){
            axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
            .then(response => {
                dispatch({
                    type: "GET_CARDS",
                    data: response.data
                });
            });
        }, 1000)
        
    }
}

const initialState = {
    loading: false,
    cards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_CARDS":
            return {
                loading: false,
                cards: action.data.cards
            }
        default:
            return state;
    }
}

export default reducer;