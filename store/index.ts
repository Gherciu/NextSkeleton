import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from 'store/reducers';
import state from 'store/state';

const isServer = typeof window === 'undefined';
const initializeStore = (initialState: any) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const getOrCreateStore = () => {
    if (isServer) {
        return initializeStore(state);
    }
    if (!(window as any).__REDUX_STORE__) {
        (window as any).__REDUX_STORE__ = initializeStore(state);
    }
    return (window as any).__REDUX_STORE__;
};
const store = getOrCreateStore();
export default store;
