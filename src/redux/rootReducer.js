import {INCREMENT, DECREMENT, CHANGE_THEME, TO_ZERO} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    }else if (action.type === DECREMENT) {
        return state - 1
    }else if (action.type === TO_ZERO) {
        return state = 0
    }

    return state
}

const initialThemeState = {
    value: 'light'
}

function themeReducer(state = initialThemeState, action) {
    if (action.type === CHANGE_THEME) {
        return {...state, value: action.payload}
    }
    return state
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})