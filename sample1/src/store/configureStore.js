import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers";

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //in order to enable the redux devtools in the browser
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware())
    );   
}