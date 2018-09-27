import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState  = {};

//array of middlewares that we are going to use in our project
const middlewares = [thunk];


const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);

export default store;