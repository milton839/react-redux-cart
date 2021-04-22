import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartAction";

const initialState = {
    cart: [],
    products: [
        {name:'Lenovo Laptop', id:1},
        {name:'Asus Laptop', id:2},
        {name:'Dell Laptop', id:3},
        {name:'Hp Laptop', id:4},
        {name:'Walton Laptop', id:5},
    ]
}


const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
        const newItem = {
            productId: action.id, 
            name: action.name,
            cartId: state.cart.length + 1
        }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item.cartId !== action.id );
            return {...state, cart: remainingCart}

        default:
            return state;
    }
}

export default cartReducer;