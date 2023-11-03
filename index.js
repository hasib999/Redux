// state - count:0
//action - increment,decrement,reset
//reducer
//store

const { createStore } = require("redux")

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const intialState = {
    count:0
}

const incrementAction = () => {
    return{
        type : INCREMENT
    }
}

const decrementAction = () => {
    return{
        type : DECREMENT
    }
}

const resetAction = () => {
    return{
        type : RESET
    }
}

// Create Reducer

const counterReducer = (state = intialState,action) =>{
    switch (action.type) {
        case INCREMENT:
           return{
            ...state,
            count: state.count + 1
           }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
               }
        case RESET:
            return{
                count: 0
            }
        default:
            state;
    }
}

//store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementAction())
store.dispatch(resetAction())



