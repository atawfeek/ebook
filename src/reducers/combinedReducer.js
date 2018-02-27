import products from "./home.reducer";
import cart from "./cart.reducer";
import {combineReducers} from "redux";

export default combineReducers({
    products,
    cart
});