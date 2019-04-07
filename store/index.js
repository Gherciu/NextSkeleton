import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from 'store/reducers';
import state from 'store/state';

const isServer = typeof window === 'undefined';
const initializeStore = initialState => (
    createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
);

const getOrCreateStore = () => {
    if (isServer) {
        return initializeStore(state);
    }
    if (!window.__REDUX_STORE__) {
        window.__REDUX_STORE__ = initializeStore(state);
    }
    return window.__REDUX_STORE__;
};
const store = getOrCreateStore();
export default store;