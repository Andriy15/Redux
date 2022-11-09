import {CHANGE_THEME, DECREMENT, INCREMENT, TO_ZERO} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function toZero() {
    return {
        type: TO_ZERO
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    }
}