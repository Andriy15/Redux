import './styles.css'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";
import thunk from "redux-thunk";

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(rootReducer, applyMiddleware(thunk))

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.dispatch({type: 'INIT__APPLICATION'})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value
})

