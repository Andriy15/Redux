import './styles.css'
import {applyMiddleware, createStore, compose} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment, toZero} from "./redux/actions";
import thunk from "redux-thunk";

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')
const zeroBtn = document.querySelector('#zero')

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) )
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

zeroBtn.addEventListener('click', () => {
    store.dispatch(toZero())
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

