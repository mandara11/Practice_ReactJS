import React from 'react'
import { useReducer } from 'react'
import { act } from 'react-dom/test-utils'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return {...state, secondCounter: state.firstCounter + action.value }
        case 'decrement2':
            return {...state, secondCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    useReducer(reducer, initialState)
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment5</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement5</button>
            <div>
            <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Increment Counter2</button>
            <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>Decrement Counter2</button>
            </div>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default CounterTwo
