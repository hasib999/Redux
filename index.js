// productReducer

const { createStore, combineReducers } = require("redux");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//product states
const initialProductState = {
    products: ["sugar","salt"],
    numberOfProducts: 2
}

//cart states
const initialCartState = {
    cart: ["sugar"],
    numberOfCart: 1
}

//product action
const getProducts = () =>{
    return{
        type: GET_PRODUCTS,
    }
}
const addProducts = (product) =>{
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

//cart action
const getCart = () =>{
    return{
        type: GET_CART_ITEMS,
    }
}
const addCart = (cart) =>{
    return{
        type: ADD_CART_ITEMS,
        payload: cart
    }
}


//product Reducer

const productReducer = (state = initialProductState,action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state
            }
        case ADD_PRODUCT:
            return{
                products: [...state.products,action.payload],
                numberOfProducts: state.numberOfProducts + 1

            }
        default:
            return state;
    }
}

// cartReducer
const cartReducer = (state = initialCartState,action) =>{
    switch (action.type) {
        case GET_CART_ITEMS:
            return{
                ...state
            }
        case ADD_CART_ITEMS:
            return{
                cart: [...state.cart,action.payload],
                numberOfCart: state.numberOfCart + 1

            }
        default:
            return state;
    }
}

//combine all reducer
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

//store

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

console.log("Product")
store.dispatch(getProducts())
store.dispatch(addProducts("pen"))
console.log("Cart")
store.dispatch(getCart())
store.dispatch(addCart("salt"))