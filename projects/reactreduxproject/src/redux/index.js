import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import cards from "./cards";

const rootReducer = combineReducers({
    cards
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
