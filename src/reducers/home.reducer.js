import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from "../actions/ecommerce.actions";

const INITIAL_STATE = {
    products: [],
    loading: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LOADING:
            return {...state, loading: true};
        case GET_PRODUCTS_SUCCESS:
            return {...state, products: action.products, loading: false};
        case GET_PRODUCTS_FAILURE:
            return {...state, error: action.error, loading: false};
        default:
            return state;
    }
}
