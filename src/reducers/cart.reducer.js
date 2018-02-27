import { ADD_CART , REMOVE_CART } from "../actions/ecommerce.actions";

const INITIAL_STATE = {
    cartItems: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART:{
            return { 
                ...state,
                cartItems: state.cartItems.concat(action.cart)
            }
        }
        case REMOVE_CART:{
            return { 
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.cartId)
            }
        }
        default:
            return state;
    }
}
