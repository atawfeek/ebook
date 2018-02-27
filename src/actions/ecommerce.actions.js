import { productsApi } from "../api-config";
import axios from "axios";

/**
 * types
 */
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

/**
 * action creators
 */
export function GetProductsLoading(){
    return {
        type: GET_PRODUCTS_LOADING
    }
}
export function GetProducts(){
    
    const payload = axios(productsApi);

    return {
        type: GET_PRODUCTS,
        payload
    }
}
export function GetProductsSuccess(products){
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}
export function GetProductsFailure(error){
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}
export function AddCart(cart){
    return {
        type: ADD_CART,
        cart
    }
}
export function RemoveCart(cartId){
    return {
        type: REMOVE_CART,
        cartId
    }
}
