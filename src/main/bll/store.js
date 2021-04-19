import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { gameReducer } from "./reducer";

const rootReducer = combineReducers({
    games: gameReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))