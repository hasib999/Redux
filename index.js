// state - count:0
//action - increment,decrement,reset
//reducer
//store

const { createStore } = require("redux")

const INCREMENT = 'INCREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const ADD_USER = 'ADD_USER'

const intialState = {
    count:0,
    users: ['Hasib']
}

const addUser = (user) => {
    return{
        type : ADD_USER,
        payload: user
    }
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
const incrementByValue = (value) => {
    return{
        type : INCREMENT_BY_VALUE,
        payload: value
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
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload
            }
        case ADD_USER:
            return{
                ...state,
                users: [...state.users,action.payload]
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

// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(resetAction())
// store.dispatch(incrementByValue(5))
// store.dispatch(incrementByValue(15))
store.dispatch(addUser("Shanto"))


