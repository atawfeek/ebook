import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';

import rootReducer from "./reducers/combinedReducer";

const enhancer = compose(
    applyMiddleware(
        promise
    )
)

export default createStore(rootReducer, enhancer);