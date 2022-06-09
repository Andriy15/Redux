import './styles.css'
import {createStore} from "./createStore";
import {rootReducer} from "./redux/rootReducer";

const counter = document.getElementById('counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

asyncBtn.addEventListener('click', () => {

})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type: '__INIT__APPLICATION'})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})


