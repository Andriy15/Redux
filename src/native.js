import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

let state = 0

function render () {
    counter.textContent = state.toString()
}
render()

addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

render()